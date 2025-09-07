// src/App.tsx
import React from 'react';
import Presentation from './components/Presentation';

function App() {
  return (
    <div className="w-screen h-screen overflow-hidden bg-[#0A0A0A] text-gray-200 font-sans">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(4,38,115,0.3),_transparent_40%)]" />
      <Presentation />
    </div>
  );
}

export default App;
