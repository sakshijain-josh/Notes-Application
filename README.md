# 📝 Notes App

A modern, lightweight Single Page Application (SPA) for creating, viewing, and managing notes, built with vanilla TypeScript, Vite, and client-side routing.

## 🚀 Features

### Core Functionality
- **Create Notes**: Add new notes with title and content
- **View All Notes**: Browse all your notes in a clean list view
- **View Note Details**: Click any note to see its full content
- **Persistent Storage**: Notes are saved in browser's localStorage
- **Client-Side Routing**: Navigate between views without page reloads
- **Responsive Design**: Works seamlessly across desktop and mobile devices

## 📋 Table of Contents

- [Quick Start](#-quick-start)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Components](#-components)
- [Routing](#-routing)
- [Development](#-development)
- [Building for Production](#-building-for-production)
- [Technologies Used](#-technologies-used)

## ⚡ Quick Start

```bash
# Clone the repository
git clone <your-repo-url>
cd Notes_app

# Install dependencies
npm install

# Start the development server
npm run dev
```

Visit `http://localhost:5173` in your browser to see the app in action.

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Notes_app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

## 🎯 Usage

### Creating a Note

1. Navigate to the home page
2. Click on the "Create Note" button or navigate to `/create`
3. Fill in the note title and content
4. Click "Save Note"
5. You'll be redirected to the home page where your new note appears

**Example:**
```
Title: Shopping List
Content: - Milk
         - Bread
         - Eggs
         - Butter
```

### Viewing Notes

- **Home Page (`/`)**: Displays all notes in a list format showing:
  - Note title
  - Creation timestamp
  - Preview of content

- **Note Details**: Click any note to view its full content

### Managing Notes

- Notes are automatically saved to browser's localStorage
- Notes persist across browser sessions
- Each note includes a timestamp for tracking when it was created

## 📁 Project Structure

```
Notes_app/
├── index.html              # Main HTML entry point
├── package.json            # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration (if needed)
├── src/
│   ├── main.ts            # Application entry point
│   ├── router.ts          # Client-side routing logic
│   ├── state.ts           # Application state management
│   ├── types.ts           # TypeScript type definitions
│   ├── style.css          # Global styles
│   ├── components/
│   │   ├── NoteItem.ts    # Individual note component
│   │   ├── NoteList.ts    # Notes list component
│   │   ├── CreateNote.ts  # Create note form component
│   │   └── Header.ts      # Navigation header component
│   └── views/
│       ├── HomeView.ts    # Home/list view
│       └── CreateView.ts  # Create note view
├── public/
│   └── vite.svg           # Static assets
└── README.md              # This file
```

## 🧩 Components

### NoteItem Component
Renders an individual note in the list view.

**Props:**
- `note`: Note object containing id, title, content, and timestamp

**Example:**
```typescript
{
  id: "1234567890",
  title: "My First Note",
  content: "This is the content of my note",
  timestamp: "2026-01-15T14:30:00.000Z"
}
```

### NoteList Component
Renders the complete list of notes.

**Props:**
- `notes`: Array of note objects

**Features:**
- Displays all notes
- Handles empty state (when no notes exist)
- Each note is clickable to view details

### CreateNote Component
Form component for creating new notes.

**State:**
- `title`: Input field for note title
- `content`: Textarea for note content

**Features:**
- Form validation
- Save functionality
- Auto-navigation after saving

### Header Component
Navigation component.

**Features:**
- Logo/App title
- Navigation links (Home, Create Note)
- Active route highlighting

## 🛣️ Routing

The app uses client-side routing with the HTML5 History API (`history.pushState()`).

### Available Routes

| Route | View | Description |
|-------|------|-------------|
| `/` | Home View | Lists all notes |
| `/create` | Create View | Form to create a new note |
| `/note/:id` | Note Detail View | Display full note details (optional) |

### How It Works

1. **Route Registration**: Routes are mapped to view components
2. **Navigation**: Links use `data-link` attribute to prevent page reload
3. **State Updates**: Route changes update the browser URL and render the appropriate view
4. **No Refresh**: All navigation happens without full page reloads

**Example Navigation:**
```typescript
// Navigate to create note view
navigateTo('/create');

// Navigate back to home
navigateTo('/');
```

## 💻 Development

### Development Server

Start the Vite development server with hot module replacement:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Development Features
- **Hot Module Replacement (HMR)**: Changes appear instantly
- **TypeScript Compilation**: Real-time type checking
- **CSS Auto-reload**: Style changes without refresh

### TypeScript Configuration

The project uses strict TypeScript settings for better code quality:

```json
{
  "strict": true,
  "noUnusedLocals": true,
  "noUnusedParameters": true,
  "noFallthroughCasesInSwitch": true
}
```

## 🏗️ Building for Production

### Build Command

```bash
npm run build
```

This will:
1. Compile TypeScript to JavaScript
2. Bundle and minify all assets
3. Output to the `dist/` directory

### Preview Production Build

```bash
npm run preview
```

Preview the production build locally before deployment.

### Deployment

The `dist/` folder can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your repository and deploy
- **GitHub Pages**: Use GitHub Actions to deploy
- **AWS S3**: Upload the `dist` folder to S3 bucket

## 🛠️ Technologies Used

- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite](https://vitejs.dev/)** - Fast build tool and dev server
- **[HTML5 History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)** - Client-side routing
- **[localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)** - Browser storage for persistence
- **Vanilla CSS** - Styling without frameworks

## 📝 Data Structure

### Note Model

```typescript
interface Note {
  id: string;              // Unique identifier (timestamp-based)
  title: string;           // Note title
  content: string;         // Note content/body
  timestamp: string;       // ISO 8601 date string
}
```

### Storage

Notes are stored in the browser's localStorage:

```javascript
// Storage key
const STORAGE_KEY = 'notes-app-data';

// Data format
{
  "notes": [
    {
      "id": "1705329000000",
      "title": "Sample Note",
      "content": "This is a sample note",
      "timestamp": "2026-01-15T14:30:00.000Z"
    }
  ]
}
```

## 🎨 Customization

### Styling

All styles are in `src/style.css`. You can customize:
- Color scheme
- Typography
- Layout and spacing
- Responsive breakpoints

### Adding Features

Potential enhancements:
- Edit existing notes
- Delete notes
- Search functionality
- Tags/categories
- Rich text editor
- Dark mode
- Export notes (JSON, PDF)

## 🐛 Known Limitations

- Notes are stored locally (not synced across devices)
- localStorage limit (~5-10MB depending on browser)
- No user authentication
- No collaborative editing

## 📄 License

MIT License - feel free to use this project for learning or personal use.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For questions or issues, please open an issue in the repository.

---

**Happy Note Taking! 📝✨**