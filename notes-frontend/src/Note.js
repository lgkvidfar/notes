import React from 'react'

const Note = (props) => {
    return (
      <li className='note'>
      {props.note.content}
        <button onClick={props.toggleImportance}>{props.label}</button>
        </li>
    )
  }

  export default Note
