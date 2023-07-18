import React, { useState } from 'react'
import { AiFillCaretDown, AiFillCaretLeft } from "react-icons/ai";


const Accordion = ({ items }) => {
  const [ expandedIndex, setExpandedIndex ] = useState(-1);


  // el Accordion comienza collpased useState(-1) y cuando onClick se Expanded y
  // cuando onClick nuevamente se Collapsed
  const handleClick = (indexNext) => {
    if (expandedIndex === indexNext) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(indexNext)
    }
  };

  const renderedItems = items.map(( item, index ) => {
    const isExpanded = index === expandedIndex;

    
    // isExpanded es true devolvemos lo que continua despues de ? < AiFillCaretDown /> 
    // isExpanded es false devolvemos lo que continua despues de : < AiFillCaretLeft /> 
    const icon = <span className='text-2xl'>{isExpanded ? < AiFillCaretDown /> : < AiFillCaretLeft />}</span>



    // isExpanded && <div>{ item.content }</div> ---> if isExpanded es true && item.content true ('&&' shows first truthy value)
    return (
      <div key={ item.id }>
        <div className='flex justify-between p-3 bg-gray-100 border-b items-center cursor-pointer' 
        onClick={ () => handleClick(index)}>
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className='border-p p-5'>{ item.content }</div>} 
      </div>
    )
  });
  return (
    <div className='border-x border-t rounded'>
      { renderedItems }
    </div>
  )
}

export default Accordion