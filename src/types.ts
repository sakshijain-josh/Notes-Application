
export interface Note {
    id: string;              
    title: string;           
    content: string;        
    timestamp: string;       
}


export interface NoteItemProps {
    note: Note;
}


export interface NoteListProps {
    notes: Note[];
}


export interface Route {
    path: string;
    view: () => string;
}
