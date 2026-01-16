import { addNote } from '../state';
import { navigateTo } from '../router';


export function CreateNote(): string {
    return `
    <div class="create-note">
      <div class="create-note__container">
        <h2 class="create-note__title">Create New Note</h2>
        <form class="note-form" id="note-form">
          <div class="form-group">
            <label for="note-title" class="form-label">Title</label>
            <input
              type="text"
              id="note-title"
              class="form-input"
              placeholder="Enter note title..."
              required
              autofocus
            />
          </div>
          
          <div class="form-group">
            <label for="note-content" class="form-label">Content</label>
            <textarea
              id="note-content"
              class="form-textarea"
              placeholder="Write your note here..."
              rows="10"
              required
            ></textarea>
          </div>
          
          <div class="form-actions">
            <button type="submit" class="btn btn--primary">
              Save Note
            </button>
            <a href="/" data-link class="btn btn--secondary">
              Cancel
            </a>
          </div>
        </form>
      </div>
    </div>
  `;
}


export function attachCreateNoteHandlers(): void {
    const form = document.getElementById('note-form') as HTMLFormElement;

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const titleInput = document.getElementById('note-title') as HTMLInputElement;
            const contentInput = document.getElementById('note-content') as HTMLTextAreaElement;

            const title = titleInput.value.trim();
            const content = contentInput.value.trim();

            if (!title || !content) {
                alert('Please fill in both title and content');
                return;
            }

            addNote(title, content);

            navigateTo('/');
        });
    }
}
