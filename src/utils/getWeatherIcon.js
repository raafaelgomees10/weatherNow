import Icon from '../icons';

const WeatherIcon = ({ weather, height, width }) => {
  const isDayTime = weather?.icon.includes('d') ? 'sun' : 'moon';

  switch (weather?.main.toLowerCase()) {
    case 'clouds':
      switch (weather?.description.toLowerCase()) {
        case 'few clouds':
          return <Icon height={height} width={width} icon="sunCloud" />;
        default:
          return <Icon height={height} width={width} icon="clouds" />;
      }

    case 'rain':
      switch (weather?.description.toLowerCase()) {
        case 'light rain':
        case 'moderate rain':
          return <Icon height={height} width={width} icon="sunRain" />;
        default:
          return <Icon height={height} width={width} icon="rain" />;
      }

    case 'snow':
      return <Icon height={height} width={width} icon="snow" />;

    case 'drizzle':
      return <Icon height={height} width={width} icon="rain" />;

    case 'clear':
      return <Icon height={height} width={width} icon={isDayTime} />;

    case 'thunderstorm':
      return <Icon height={height} width={width} icon="thunderstorm" />;

    default:
      return <Icon height={height} width={width} icon="mist" />;
  }
};

export default WeatherIcon;
