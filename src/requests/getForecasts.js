import axios from "axios";

const getForecasts = (setForecasts, setLocation, setSelectedDate) => {
  const endpoint = "https://mcr-codes-weather.herokuapp.com/forecast";
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
