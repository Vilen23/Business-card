import './Card.css'

export function Card({cards}){
    return <div style={{
        display:'flex',
        flexWrap:"wrap"
        
    }}>
        {cards.map((card)=>{
            return <div id="container">
                <h2>{card.name}</h2>
                <p>{card.description}</p>
                <h3>Interests</h3>
                <p>{card.interest}</p>
                <div id='buttons'>
                <button onClick={()=>{
                    window.location.href=card.facebook
                }}>Facebook</button>
                <button onClick={()=>{
                    window.location.href=card.linkedin
                }}>Linked In</button>
                </div>
                </div>
        })}
    </div>
}

