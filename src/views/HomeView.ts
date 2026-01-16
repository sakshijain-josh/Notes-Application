import { Header } from '../components/Header';
import { NoteList } from '../components/NoteList';
import { getAllNotes } from '../state';

// all notes
export function HomeView(): string {
    const notes = getAllNotes();

    return `
    ${Header()}
    <main class="main">
      <div class="container">
        <div class="page-header">
          <h2 class="page-title">My Notes</h2>
          <a href="/create" data-link class="btn btn--primary">
            + New Note
          </a>
        </div>
        ${NoteList({ notes })}
      </div>
    </main>
  `;
}
