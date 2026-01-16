import type { NoteListProps } from '../types';
import { NoteItem } from './NoteItem';


export function NoteList(props: NoteListProps): string {
    const { notes } = props;

    // Empty state
    if (notes.length === 0) {
        return `
      <div class="note-list note-list--empty">
        <div class="empty-state">
          <span class="empty-state__icon">📝</span>
          <h2 class="empty-state__title">No notes yet</h2>
          <p class="empty-state__text">Create your first note to get started!</p>
          <a href="/create" data-link class="btn btn--primary">
            Create Note
          </a>
        </div>
      </div>
    `;
    }

    // Render notes
    const notesHtml = notes.map(note => NoteItem({ note })).join('');

    return `
    <div class="note-list">
      ${notesHtml}
    </div>
  `;
}
