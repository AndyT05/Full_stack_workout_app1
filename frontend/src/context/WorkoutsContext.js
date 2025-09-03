import { createContext, useReducer } from 'react'


//Reducer Funtion(rules)
//State: current staet, action: an object with {type, payload}
export const WorkoutReducer = (state, action) => {
    switch(action.type){
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            }
        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts]
            }
        case 'DELETE_WORKOUT':
            return {
                workouts: state.workouts.filter(w => w._id !== action.payload._id) 
            }
        default:
            return state
    }
}

// This is A provider to give data for the components
export const WorkoutContext = new createContext()

//dispatch is a function to send action to the reducer
export const WorkoutContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(WorkoutReducer, {workouts: null})
    return (
        <WorkoutContext.Provider value={{...state, dispatch}}>
            { children }
        </WorkoutContext.Provider>
    )
}