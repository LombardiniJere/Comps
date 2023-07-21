import { useState } from "react";
import Dropdown from "../Dropdown";


function DropdownPage() {
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

  return (
    <div className="flex">
      <Dropdown onChange={handleSelect} options={ options } value={selection}/>
    </div>
  );
};

export default DropdownPage;