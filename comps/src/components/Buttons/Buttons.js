import React from 'react'
import classNames from 'classnames';

function Buttons ({
  children,
  primary,
  secondary,
  success,
  danger,
  warning,
  rounded,
  outline,
  ...rest
}) {
  const classes = classNames(
    rest.className, // para que podamos agregar styles al objeto sin que se pisen los codigos !
    'flex items-center px-3 py-1.5 border', { 
    'border-blue-500 bg-blue-500 text-white' : primary, // "primary: true"= if true style like 'mention'
    'border-gray-900 bg-gray-900 text-white' : secondary,
    'border-green-500 bg-green-500 text-white' : success,
    'border-red-500 bg-red-500 text-white' : danger,
    'border-yellow-400 bg-yellow-400 text-white' : warning,
    'rounded-full' : rounded,
    'bg-white text-' : outline
  });

  return (
    <button { ...rest } className={ classes }>
      { children }
    </button>
  )
}



export default Buttons