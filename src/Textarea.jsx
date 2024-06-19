import { useState } from "react"
import Warning from "./Warning"

export default function Textarea() {
  const [text, setText] = useState('')
  const [warningText, setWarningText] = useState('')

  const handleChange = (e) => {
    let newText = e.target.value
    if(newText.includes('<script>')) {
      setWarningText('No script tags allowed!')
      newText = newText.replace('<script>', '')
    } else if(newText.includes('@')) {
      setWarningText('No @ symbol allowed!')
      newText = newText.replace('@', '')
    }
    setText(newText)
  }

  return (
    <div className="textarea">
      <textarea  
        placeholder="Enter your text..."
        spellCheck="false"
        value={text}
        onChange={handleChange}
      />
      <Warning warningText={warningText} />
    </div>
  )
}
