import axios from "axios";

const getForecasts = (setForecasts, setLocation, setSelectedDate, location) => {
  const parameter = location ? `?city=${location}` : "";
  const endpoint = `https://mcr-codes-weather.herokuapp.com/forecast${parameter}`;
  axios.get(endpoint).then(
    (response) => {
      setForecasts(response.data.forecasts);
      setSelectedDate(response.data.forecasts[0].date);
      setLocation(response.data.location);
    },
    (error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  );
};

export default getForecasts;
