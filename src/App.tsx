import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import router from '@/router';
import logo from './logo.svg';
import './App.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Hello Vite + React!</p>
        <p>
          <button type='button' onClick={() => setCount((prev) => prev + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <Routes>
          {router.map((i) => (
            <Route key={i.path} path={i.path} element={i.element} />
          ))}
        </Routes>
      </header>
    </div>
  );
}

export default App;
