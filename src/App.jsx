import { useState } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  const [count, setCount] = useState(0)
  async function generateResponse(){
    console.log("loading..")
   const response= await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAadkr2gDYgbaASBvFAembtO8FGX3EqR24",
      method: "post",
      data : {
          "contents": [
      {
        "parts": [
          {
            "text": "tell me about india"
          }
        ]
      }
    ]
  }
    })
    console.log(response['data']['candidates'][0]['content']['parts'][0]['text'])
  }

  return (
    <>
      <div>
        <h1>ai chat bot</h1>
        <button onClick={generateResponse}>search</button>
    </div>
    </>
  )
}

export default App
