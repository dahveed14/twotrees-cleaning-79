import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initializeGTM } from './utils/gtm'

// Initialize GTM tracking
initializeGTM();

createRoot(document.getElementById("root")!).render(<App />);
