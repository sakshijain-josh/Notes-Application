/**
 * Client-side router using HTML5 History API
 */

// Route registry
const routes: Record<string, () => string> = {};

/**
 * Register a route
 */
export function registerRoute(path: string, view: () => string): void {
    routes[path] = view;
}

/**
 * Navigate to a path programmatically
 */
export function navigateTo(path: string): void {
    // Update browser URL using history.pushState
    history.pushState(null, '', path);

    // Render the new view
    router();
}

/**
 * Main router function - matches current path and renders view
 */
export function router(): void {
    const path = window.location.pathname;

    // Try exact match first
    let view = routes[path];

    // If no exact match, try pattern matching for dynamic routes
    if (!view) {
        for (const [routePath, routeView] of Object.entries(routes)) {
            if (routePath.includes(':')) {
                // Convert route pattern to regex
                const pattern = routePath.replace(/:[^/]+/g, '([^/]+)');
                const regex = new RegExp(`^${pattern}$`);
                const match = path.match(regex);

                if (match) {
                    view = routeView;
                    // Store matched parameters for use in view
                    (window as any).__routeParams = {
                        id: match[1] // For /note/:id pattern
                    };
                    break;
                }
            }
        }
    }

    // Fallback to 404
    if (!view) {
        view = () => '<h1>404 - Page Not Found</h1>';
    }

    // Render view
    const app = document.getElementById('app');
    if (app) {
        app.innerHTML = view();

        // Attach event listeners after rendering
        attachEventListeners();
    }
}

/**
 * Get route parameters (for dynamic routes)
 */
export function getRouteParams(): any {
    return (window as any).__routeParams || {};
}

/**
 * Attach event listeners to dynamically rendered content
 */
function attachEventListeners(): void {
    // Intercept clicks on links with data-link attribute
    document.querySelectorAll('[data-link]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = (link as HTMLAnchorElement).getAttribute('href');
            if (href) {
                navigateTo(href);
            }
        });
    });
}

/**
 * Initialize router
 */
export function initRouter(): void {
    // Handle browser back/forward buttons
    window.addEventListener('popstate', router);

    // Initial route
    router();
}
