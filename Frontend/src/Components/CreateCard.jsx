export function CreateCard(){
    return <div>
        <input type="text" placeholder="Name"/> <br />
        <input type="text" placeholder="About You"/> <br />
        <input type="text" placeholder="Your interest(Webdev/ML)"/> <br />
        <input type="text" placeholder="facebook link"/> <br />
        <input type="text" placeholder="linkedin link"/> <br />
        <button style={{
            height:50,
            width:120
        }}>Submit</button>

    </div>
}