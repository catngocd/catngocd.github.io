import React from 'react';
import Header from './components/Header';
import Me from './components/Me';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Me />
        <Contact />
      </main>

    </div>
  );
}

export default App;

