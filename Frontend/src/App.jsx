import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { CreateCard } from './Components/CreateCard';
import { Card } from './Components/Card';

function App() {

  const[cards,setTodos]=useState([])
  fetch("http://localhost:3000/cards")
    .then(async (resolve)=>{
        const json = await resolve.json()
        setTodos(json.cards)
    })
  return (
    <div>
      <CreateCard></CreateCard>
      <Card cards={cards}></Card>
    </div>  
  )
}

export default App;
