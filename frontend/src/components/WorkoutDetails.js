import { useWorkoutContext } from "../hooks/useWorkoutContext";
import { formatDistanceToNow } from "date-fns";

function WorkoutDetails({ workout }) {
  const { dispatch } = useWorkoutContext();

  const handleClick = async () => {
    const response = await fetch(
      "https://full-stack-workout-app1.onrender.com/" + workout._id,
      { method: "DELETE" }
    );
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (lbs): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Number of reps: </strong>
        {workout.reps}
      </p>
      <p>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        Delete
      </span>
    </div>
  );
}

export default WorkoutDetails;
