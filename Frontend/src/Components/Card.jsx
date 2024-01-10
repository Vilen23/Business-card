export function Card({cards}){
    return <div>
        {cards.map((card)=>{
            return <div>
                <h2>{card.name}</h2>
                <p>{card.description}</p>
                <h3>Interests</h3>
                <p>{card.interest}</p>
                <button onClick={()=>{
                    window.location.href=card.facebook
                }}>Facebook</button>
                <button onClick={()=>{
                    window.location.href=card.linkedin
                }}>Linked In</button>
                </div>
        })}
    </div>
}