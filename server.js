const express = require('express')
const mongoose = require('mongoose')
const app = express()
const mongoUri= process.env.MONGOURI;


//using middleware
app.use(express.json());

//routes

app.get('/',(req, res) =>{
    res.send(`you cn now get info on the site`)
})

app.get('/blog',(req, res) =>{
    res.send(`hello, welcome to the server`)
})


app.post('/ptient/register', sync(req, res) =>{
    const {
        ptientID,
        surnme,
        othernmes,
        gender,
        residentildress,
        emergencyNme,
        emergencyContct,
    } = req.body
   
}
try {
    const newPtient = new ptient({
        ptientID,
        surnme,
        othernmes,
        gender,
        residentildress,
        emergencyNme,
        emergencyContct: {
            nme: emergencyNme,
            contct:emergencyContct,
            reltionship:req.body.reltionship
        }
    });

    const svedPtient = wit newPtient.sve();

}
)


mongoose.set("strictQuery", false)
mongoose.connect (mongoURI)
.then(()=>{
    console.log('connected to MongoDB')
    app.listen(3000, () =>{
        console.log(`Node API app is runnning on port 3000`)
    });
}).catch((error)=>{   
    console.log(error)

})

