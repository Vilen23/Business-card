import { useState } from "react"

export function CreateCard(){

    const[name,setName] = useState("")
    const[about,setAbout] = useState("")
    const[interest,setInterest] = useState("")
    const[facebook,setFacebook] = useState("")
    const[linkedin,setLinkedin] = useState("")

    return <div>
        <input type="text" placeholder="Name" onChange={(e)=>{
            setName(e.target.value)
        }}/> <br />
        <input type="text" placeholder="About You" onChange={(e)=>{
            setAbout(e.target.value)
        }}/> <br />
        <input type="text" placeholder="Your interest(Webdev/ML)" onChange={(e)=>{
            setInterest(e.target.value)
        }} /> <br />
        <input type="text" placeholder="facebook link" onChange={(e)=>{
            setFacebook(e.target.value)
        }}/> <br />
        <input type="text" placeholder="linkedin link" onChange={(e)=>{
            setLinkedin(e.target.value)
        }}/> <br />
        <button style={{
            height:50,
            width:120
        }} onClick={()=>{
            fetch("http://localhost:3000/card",{
                method:"POST",
                body:JSON.stringify({
                    name:name,
                    description:about,
                    interest:interest,
                    facebook:facebook,
                    linkedin:linkedin
                    
                }),
                headers:{
                    "content-Type":"application/json"
                }
            })
                .then(async (val)=>{
                    await val.json()
                    alert("Card Added")
                })
                window.location.reload();
        }}>Submit</button>

    </div>
}