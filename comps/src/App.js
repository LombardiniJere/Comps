import { useState } from "react";
import Dropdown from "./components/Dropdown";


function App() {
  const [ selection, setSelection ] = useState(null);

  const options = [
    {id: 1, label: 'Red', value: 'red'},
    {id: 2, label: 'Green', value:'green'},
    {id: 3, label: 'Blue', value: 'blue'}
  ]

  // recibimos la nueva selection (option) y actualizamos nuestro "Piece of State" 
  const handleSelect = (option) => {
    setSelection(option)
  }

  return <Dropdown onSelect={handleSelect} options={ options } selection={selection}/>
};

export default App;
