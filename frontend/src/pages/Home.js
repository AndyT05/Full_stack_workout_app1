import WorkoutDetails from "../components/WorkoutDetails";
import { useState, useEffect } from "react";
import { WorkoutForm } from "../components/WorkoutForm";
function Home() {
  const [workouts, setWorkouts] = useState(null);

  useEffect(function () {
    async function fetchWorkouts() {
      const response = await fetch("/api/workouts");
      const data = await response.json();
      if (response.ok) {
        setWorkouts(data);
      }
    }

    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails workout={workout} key={workout._id} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
}

export default Home;
