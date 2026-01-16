import type { Note } from './types';

const STORAGE_KEY = 'notes-app-data';

let notes: Note[] = [];

let observers: Array<() => void> = [];

//localstorage
function loadFromStorage(): Note[] {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];

    try {
        const parsed = JSON.parse(data);
        return parsed.notes || [];
    } catch (error) {
        console.error('Failed to parse stored data:', error);
        return [];
    }
}


function saveToStorage(notesToSave: Note[]): void {
    try {
        const data = { notes: notesToSave };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
        if (error instanceof Error && error.name === 'QuotaExceededError') {
            alert('Storage full! Please delete some notes.');
        }
        throw error;
    }
}


function notifyObservers(): void {
    observers.forEach(callback => callback());
}


export function initState(): void {
    notes = loadFromStorage();
}


export function getAllNotes(): Note[] {
    return [...notes]; 
}


export function getNoteById(id: string): Note | undefined {
    return notes.find(note => note.id === id);
}


export function addNote(title: string, content: string): Note {
    const note: Note = {
        id: Date.now().toString(),
        title: title.trim(),
        content: content.trim(),
        timestamp: new Date().toISOString(),
    };

    notes.unshift(note); 
    saveToStorage(notes);
    notifyObservers();

    return note;
}

export function updateNote(id: string, updates: Partial<Note>): void {
    const index = notes.findIndex(note => note.id === id);
    if (index === -1) {
        throw new Error(`Note with id ${id} not found`);
    }

    notes[index] = { ...notes[index], ...updates };
    saveToStorage(notes);
    notifyObservers();
}


export function deleteNote(id: string): void {
    const index = notes.findIndex(note => note.id === id);
    if (index === -1) {
        throw new Error(`Note with id ${id} not found`);
    }

    notes.splice(index, 1);
    saveToStorage(notes);
    notifyObservers();
}


export function subscribe(callback: () => void): () => void {
    observers.push(callback);


    return () => {
        observers = observers.filter(obs => obs !== callback);
    };
}
