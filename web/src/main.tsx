import { createRoot } from "react-dom/client";

const root = document.querySelector('div')

const App = () => <h1>Welcome</h1>

if (root !== null) createRoot(root).render('<App/>')