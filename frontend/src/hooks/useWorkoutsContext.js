import { WorkoutsContext } from "../context/WorkoutsContext";
import { useContext } from "react";

export function useWorkoutsContext() {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw Error(
      "useWorkoutsContext must be use inside WorkoutsContextProvider"
    );
  }

  return context;
}
