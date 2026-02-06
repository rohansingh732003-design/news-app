import React, { useState } from 'react';
import Navbar from './Component/Navbar';
import Newsboard from './Component/Newsboard';
const App = () => {
  const   [category, setCategory] = useState("general");
  console.log({category});
  
  return (
    <div>
      <Navbar setCategory={setCategory} />
     <Newsboard category={category}/>
    </div>
  );
};

export default App ;


