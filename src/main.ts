import './style.css';
import { initState } from './state';
import { initRouter, registerRoute } from './router';
import { HomeView } from './views/HomeView';
import { CreateView } from './views/CreateView';
import { NoteDetailView } from './views/NoteDetailView';

initState();

registerRoute('/', HomeView);
registerRoute('/create', CreateView);
registerRoute('/note/:id', NoteDetailView);

initRouter();
