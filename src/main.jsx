import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <div className="page">
      <header><a className="brand" href="/" aria-label="MGX Electric home">MGX<span> ELECTRIC</span><span className="spark" aria-hidden="true">↗</span></a></header>
      <main>
        <p className="eyebrow"><span /> A NEW CONNECTION</p>
        <h1>Powering<br />what’s <em>next.</em></h1>
        <p className="intro">The new home of MGX Electric.<br />Our website is taking shape. Stay tuned.</p>
        <div className="status"><span aria-hidden="true">↗</span> Website coming soon</div>
      </main>
      <footer><span>MGX ELECTRIC</span><span>A brighter beginning.</span></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
