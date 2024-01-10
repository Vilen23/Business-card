import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateCard } from './Components/CreateCard'
import { Card } from './Components/Card'

function App() {
const [cards,setCards] = useState([])
fetch("http://localhost:3000/cards")
  .then(async (resolve)=>{
    const json = await resolve.json()
    setCards(json.cards)
  })


  return (
    <div>
      <CreateCard></CreateCard>
      <Card cards={cards}></Card>
    </div>
  )
}

export default App
