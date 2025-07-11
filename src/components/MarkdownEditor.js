import React from 'react'

const MarkdownEditor = (props) => {
    const{text,setText}  = props;
  return (
    <div>
        <textarea  className='textarea' onChange={(e)=>setText(e.target.value)}></textarea>

        <div className='preview'><h1 style={{fontWeight:'bold'}}>{text}</h1> </div>
        
    </div>
  )
}

export default MarkdownEditor