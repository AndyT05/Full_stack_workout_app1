import { useReducer, createContext } from "react";

//Create context
export const WorkoutsContext = createContext();

//Reducer function
export function workoutsReducer(state, action) {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      };
    case "CREATE_WORKOUT":
      return {
        workouts: [action.payload, ...state.workouts],
      };
    case "DELETE_WORKOUT":
      return {
        workouts: state.workouts.filter(
          (workout) => workout._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
}

//Context provider component
export function WorkoutsContextProvider({ children }) {
  const [state, dispatch] = useReducer(workoutsReducer, { workouts: null });
  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
}
