import React from 'react'

const MarkdownEditor = (props) => {
    const{text,setText}  = props;
  return (
    <div>
        <textarea  className='textarea' onChange={(e)=>setText(e.target.value)}></textarea>

        <h1 className='preview'>{text}</h1>
    </div>
  )
}

export default MarkdownEditor