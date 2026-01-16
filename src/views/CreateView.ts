import { Header } from '../components/Header';
import { CreateNote, attachCreateNoteHandlers } from '../components/CreateNote';

//create
export function CreateView(): string {
    setTimeout(() => {
        attachCreateNoteHandlers();
    }, 0);

    return `
    ${Header()}
    <main class="main">
      <div class="container">
        ${CreateNote()}
      </div>
    </main>
  `;
}
