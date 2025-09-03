import { useForm } from "react-hook-form";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();

    // if (!response.ok) {
    //   setError(json.error);
    // }
    if (response.ok) {
      reset(); // clear form
      dispatch({ type: "CREATE_WORKOUT", payload: json });
      console.log("new workout added:", json);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit(onSubmit)}>
      <h3>Add a New Workout</h3>

      <label>Exercise Title:</label>
      {errors.title && <small>Title is required!</small>}
      <input {...register("title", { required: true })} />

      <label>Load (in kg):</label>
      {errors.load && <small>Load is required!</small>}
      <input type="number" {...register("load", { required: true })} />

      <label>Number of Reps:</label>
      {errors.reps && <small>Reps are required!</small>}
      <input type="number" {...register("reps", { required: true })} />

      <button>Add Workout</button>
    </form>
  );
};

export default WorkoutForm;
