import './App.css'
import Data from './Data'
import Card from './Card'
import Navbar from './Navbar'

export default function Main(){
  const showCard = Data.map(card=>{
    return (
       <Card key ={card.title} {...card}/>
    )
  })
  return(
    <div className='main-container'>
      <Navbar/>
      {showCard}
    </div>
  )
}