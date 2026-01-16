import { Header } from '../components/Header';
import { getNoteById } from '../state';
import { getRouteParams } from '../router';

//format
function formatDate(timestamp: string): string {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}


function escapeHtml(unsafe: string): string {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// display notes
export function NoteDetailView(): string {
    const params = getRouteParams();
    const noteId = params.id;

    if (!noteId) {
        return `
      ${Header()}
      <main class="main">
        <div class="container">
          <div class="error-state">
            <h2>Invalid Note ID</h2>
            <a href="/" data-link class="btn btn--primary">Back to Home</a>
          </div>
        </div>
      </main>
    `;
    }

    const note = getNoteById(noteId);

    if (!note) {
        return `
      ${Header()}
      <main class="main">
        <div class="container">
          <div class="error-state">
            <h2>Note Not Found</h2>
            <p>The note you're looking for doesn't exist.</p>
            <a href="/" data-link class="btn btn--primary">Back to Home</a>
          </div>
        </div>
      </main>
    `;
    }

    return `
    ${Header()}
    <main class="main">
      <div class="container">
        <div class="note-detail">
          <div class="note-detail__header">
            <a href="/" data-link class="back-link">← Back to Notes</a>
          </div>
          
          <article class="note-detail__content">
            <h1 class="note-detail__title">${escapeHtml(note.title)}</h1>
            <time class="note-detail__time" datetime="${note.timestamp}">
              ${formatDate(note.timestamp)}
            </time>
            <div class="note-detail__body">
              ${escapeHtml(note.content).replace(/\n/g, '<br>')}
            </div>
          </article>
        </div>
      </div>
    </main>
  `;
}
