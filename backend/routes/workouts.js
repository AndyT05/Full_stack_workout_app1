import express from 'express'
import Workout from '../models/workoutModel.js'
import {getWorkout, 
        getWorkouts, 
        createWorkout, 
        deleteWorkout,
        updateWorkout 
} from '../Controllers/workoutControllers.js'


const router = express.Router()

//GET all workouts
router.get('/', getWorkouts)

//Get a workout
router.get('/:id', getWorkout)

//POST a new workout
router.post('/', createWorkout)

//DELETE a workout
router.delete('/:id', deleteWorkout)


//UPDATE a workout
router.patch('/:id', updateWorkout)

export default router