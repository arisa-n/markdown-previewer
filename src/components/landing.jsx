import { marked } from 'marked'
import React, { useState } from 'react'

const intialState=`
 # marked
 ## marked
 Favorite movies site is [goojar](https://www.goojara.to/)\n
 \`yarn create react-app . \`
 
 \`\`\`
    const handleChange=(e)=>{
        setForm(...form, [e.target.name]e.target.value)
    }
 \`\`\`
 
  - python
  - React
 
 > First line 
 > > nested line
 
 > last line
 
 ![](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`

const Landing = () => {
    const[text, setText]=useState(intialState)

    const handleChange=(e)=>{
        setText(e.target.value)
    }

    const markdown =marked(text, {breaks: true})
  return (
    <div className="marked-container">
        <div className="heading">
            <h1>Markdown Previewer</h1>
        </div>
        <div className="editors-container">
            <div className="markdown">
                <h2>Editor</h2>
                <textarea id='editor' onChange={handleChange} value={text}/>
            </div>
            <div className="preview-container">
                <h2 className='h2'>Preview</h2>
                <div id="preview" dangerouslySetInnerHTML={{__html:markdown}}/>
            </div>
        </div>
    </div>
  )
}

export default Landing