
import React from 'react';
import './App.css';
import Gate from './Gate';
import MediaCard from './MediaCard';

function App() {

  return (
    <div className="App">
      <MediaCard title="Shirt" body={<p>White T-shirt {<b>Rs: 4000</b>}</p>} imgUrl="https://fabricprinting.pk/wp-content/uploads/2020/07/Polo-Shirt-1.jpg" />
      <Gate isOpen />
    </div>
  );
}

export default App;
