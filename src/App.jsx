import { useState } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  async function generateResponse(){
    setAnswer("loading..")
   const response= await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAadkr2gDYgbaASBvFAembtO8FGX3EqR24",
      method: "post",
      data : {
          "contents": [
      {
        "parts": [
          {
            "text": question
          }
        ]
      }
    ]
  }
    })
setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text'])
  }

  return (
    <>
      <div className='main-container'>
        <h1>ai chat bot</h1>
        <textarea className='text-area'
        value={question}
        onChange={(e)=>{
         setQuestion(e.target.value)
        
        }}
        >

        </textarea>
        <button className='search-btn' onClick={generateResponse}>Generate Response</button>
        <pre className='response'>
          {answer}
        </pre>
    </div>
    </>
  )
}

export default App
