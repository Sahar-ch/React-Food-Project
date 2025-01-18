import Meal from "./Meal";
import useHttp from "../hooks/useHttp";
import Error from "./UI/Error";

const requestConfig = {};

const Meals = () => {
  const {
    data: meals,
    isLoading,
    error,
  } = useHttp(
    "https://react-food-project-ihmm.onrender.com/meals",
    requestConfig,
    []
  );

  console.log(meals);

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if (error) {
    return <Error title="Failed to fetched meals." message={error} />;
  }

  return (
    <ul id="meals">
      {meals.map((meal) => {
        return <Meal key={meal.id} meal={meal} />;
      })}
    </ul>
  );
};

export default Meals;
