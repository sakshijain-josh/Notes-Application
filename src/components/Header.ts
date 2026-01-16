
export function Header(): string {
    const currentPath = window.location.pathname;

    return `
    <header class="header">
      <div class="header__container">
        <h1 class="header__logo">
          <a href="/" data-link>📝 Notes</a>
        </h1>
        <nav class="header__nav">
          <a href="/" data-link class="nav-link ${currentPath === '/' ? 'nav-link--active' : ''}">
            Home
          </a>
          <a href="/create" data-link class="nav-link ${currentPath === '/create' ? 'nav-link--active' : ''}">
            Create Note
          </a>
        </nav>
      </div>
    </header>
  `;
}
