import type { NoteItemProps } from '../types';


function formatDate(timestamp: string): string {
  const date = new Date(timestamp);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}


function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}


export function NoteItem(props: NoteItemProps): string {
  const { note } = props;

  return `
    <a href="/note/${note.id}" data-link class="note-item" data-note-id="${note.id}">
      <h3 class="note-item__title">${escapeHtml(note.title)}</h3>
      <time class="note-item__time" datetime="${note.timestamp}">
        ${formatDate(note.timestamp)}
      </time>
      <p class="note-item__preview">${escapeHtml(truncate(note.content, 150))}</p>
    </a>
  `;
}


function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
