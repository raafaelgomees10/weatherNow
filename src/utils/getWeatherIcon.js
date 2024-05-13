import Icon from '../icons';

const WeatherIcon = ({ weather }) => {
  const isDayTime = weather?.icon.includes('d') ? 'sun' : 'moon';

  switch (weather?.main.toLowerCase()) {
    case 'clouds':
      switch (weather?.description.toLowerCase()) {
        case 'few clouds':
          return <Icon icon="sunCloud" />;
        default:
          return <Icon icon="clouds" />;
      }

    case 'rain':
      switch (weather?.description.toLowerCase()) {
        case 'light rain':
        case 'moderate rain':
          return <Icon icon="sunRain" />;
        default:
          return <Icon icon="rain" />;
      }

    case 'snow':
      return <Icon icon="snow" />;

    case 'drizzle':
      return <Icon icon="rain" />;

    case 'clear':
      return <Icon icon={isDayTime} />;

    case 'thunderstorm':
      return <Icon icon="thunderstorm" />;

    default:
      return <Icon icon="mist" />;
  }
};

export default WeatherIcon;
