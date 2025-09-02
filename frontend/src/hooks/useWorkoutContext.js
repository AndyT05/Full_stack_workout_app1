import { WorkoutContext } from "../context/WorkoutsContext";
import { useContext } from "react";

export const useWorkoutContext = () => {
    const context = useContext(WorkoutContext)
    if(!context) {
        throw Error('userWorkoutContex must be use inside an WorkoutContextProvider')
    }
    return context
}