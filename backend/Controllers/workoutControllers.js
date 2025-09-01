import Workout from "../models/workoutModel.js"
import mongoose from "mongoose"



//Get all workout
export const getWorkouts = async (req, res) => {
    const workout = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workout)
}

//Get a workout
export const getWorkout = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'No such workout'})
    }

    const workout = await Workout.findById(id)
    if(!workout) {
        return res.status(400).json({error: "No such workout!"})
    }
    else{
        res.status(400).json(workout)
    }
}

//Post a workout
export const createWorkout = async (req, res) => {
   const {title, reps, load} = req.body
   try{
        const workout = await Workout.create({title, reps, load})
        res.status(200).json(workout)
   }catch(error){
        res.status(400).json({error: error.message})
   }
}

//Delete a workout
export const deleteWorkout = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({error: "No such workout!"})
    }

    const workout = await Workout.findOneAndDelete({_id: id})
    if(!workout){
        res.status(400).json({error: "No such workout!"})
    }
    else{
        res.status(200).json(workout)
    }

}

//Update a workout
export const updateWorkout = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({error: "No such workout!"})
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {...req.body})
    if(!workout){
        res.status(400).json({error: "No such workout!"})
    }
    else{
        res.status(200).json(workout)
    }
}
