import { useState } from 'react';

import Sidebar from './components/Sidebar';

import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="app">
      <button
        className="app__button"
        onClick={toggleSideBar}
      >
        Open
      </button>
      <Sidebar isOpen={isOpen} onClose={toggleSideBar}>
        <h1>Hello, Sidebar</h1>
      </Sidebar>
    </div>
  );
}

export default App;
