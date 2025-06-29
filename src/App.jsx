import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("")

  async function generateAnswer() {
    setAnswer("loading");
    const response = await axios({
      url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBESb1g_CATpPGqlJck4-ImYcQW0XNXhgY",
      method:"post",
      data:{
        contents:[
          { parts: [{ text: question}] },
        ],
      },
    });
    setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
  }
  return (
    <>
      <h1 className='bg-blue-300 rounded-2xl'>Chat AI</h1>
      <textarea className='border rounded-2xl w-full' value={question} onChange={(e) => setQuestion(e.target.value)} cols="30" rows="18" placeholder='Ask Anything for me !'></textarea> 
      <button className='bg-gray-300' onClick={generateAnswer}>Generate Answer</button>

      <pre>{answer}</pre>
    </>
  )
}

export default App
