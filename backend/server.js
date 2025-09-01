import express from "express";
import 'dotenv/config'
import workoutRoutes from './routes/workouts.js'
import mongoose from "mongoose"

// create app
const app = express();

//middleware
app.use(express.json())

app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/workouts', workoutRoutes)





  

//Connect to mongo DB
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("connected to DB")
        // listen on port 4000
        app.listen(process.env.PORT, () => {
        console.log("Listening on port ", process.env.PORT);
        });
    })
    .catch((error)=>{
        console.log(error)
    })