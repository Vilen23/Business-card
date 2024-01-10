const express = require("express")
const cors = require("cors")
const app = express()
const {Validation} = require('./types')
const {User} = require('./db')

app.use(express.json())
app.use(cors())

app.post("/card",async (req,res)=>{
    const response  = Validation.safeParse(req.body)
    if(!response.success){
        res.status(400).json({
            msg:"Invalid inputs"
        })
    }
    await User.create({
        name:req.body.name,
        description:req.body.description,
        interest:req.body.interest,
        facebook:req.body.facebook,
        linkedin:req.body.linkedin

    })
    res.status(200).json({
        msg:"User added successfully"
    })
})

app.get("/cards", async (req,res)=>{
    const response = await User.find({})
    res.json({
        cards: response
    })
    
})    

app.listen(3000)