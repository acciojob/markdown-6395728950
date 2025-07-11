import React from 'react'

const MarkdownEditor = (props) => {
    const{text,setText}  = props;
  return (
    <div>
        <textarea  className='textarea' onChange={(e)=>setText(e.target.value)}></textarea>

        <p className='preview'>{text}</p>
    </div>
  )
}

export default MarkdownEditor