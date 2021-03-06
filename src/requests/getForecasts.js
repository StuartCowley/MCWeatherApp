import axios from "axios";

const getForecasts = (
  setForecasts,
  setLocation,
  setSelectedDate,
  location,
  setErrorMessage,
  setIsLoading
) => {
  const parameter = location ? `?city=${location}` : "";
  const endpoint = `https://mcr-codes-weather.herokuapp.com/forecast${parameter}`;
  axios
    .get(endpoint)
    .then((response) => {
      setForecasts(response.data.forecasts);
      setSelectedDate(response.data.forecasts[0].date);
      setLocation(response.data.location);
      setErrorMessage("");
      setIsLoading(false);
    })
    .catch((error) => {
      const { status } = error.response;
      if (status === 404) {
        setErrorMessage("Couldn't find that location, try again");
        setIsLoading(false);
      }
      if (status === 500) {
        setErrorMessage("There is a server error, please try again later");
        setIsLoading(false);
      }
    });
};

export default getForecasts;
