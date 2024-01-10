import { useState, useEffect } from 'react';
import './App.css';
import { CreateCard } from './Components/CreateCard';
import { Card } from './Components/Card';

function App() {

  const[cards,setCards]=useState([])
  useEffect(()=>{
    async function fetcheddata(){
      try{
        const response = await fetch("http://localhost:3000/cards")
        const res = await response.json()
        setCards(res.cards)
      }
      catch(error){
        console.error("Error fetching data ",error)
      }
    }
    fetcheddata()
  },[])
  
  return (
    <div>
      <CreateCard></CreateCard>
      <Card cards={cards}></Card>
    </div>  
  )
}

export default App;
