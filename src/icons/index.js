import React from 'react';
import Pressure from './components/pressure';
import Sunrise from './components/sunrise';
import Sunset from './components/sunset';
import Humidity from './components/humidity';
import WindSpeed from './components/windspeed';
import Uv from './components/uv';
import Moon from './components/moon';
import Sun from './components/sun';
import Clouds from './components/clouds';
import Snow from './components/snow';
import Thunderstorm from './components/thunderstorm';
import SunRain from './components/sunrain';
import SunCloud from './components/suncloud';
import Rain from './components/rain';
import Mist from './components/mist';

const Icon = ({ icon, height, width, className }) => {
  switch (icon) {
    case 'sunrise':
      return <Sunrise height={height} width={width} className={className} />;
    case 'sunset':
      return <Sunset height={height} width={width} className={className} />;
    case 'humidity':
      return <Humidity height={height} width={width} className={className} />;
    case 'windspeed':
      return <WindSpeed height={height} width={width} className={className} />;
    case 'pressure':
      return <Pressure height={height} width={width} className={className} />;
    case 'uv':
      return <Uv height={height} width={width} className={className} />;

    case 'sun':
      return <Sun height={height} width={width} className={className} />;
    case 'moon':
      return <Moon height={height} width={width} className={className} />;
    case 'clouds':
      return <Clouds height={height} width={width} className={className} />;
    case 'snow':
      return <Snow height={height} width={width} className={className} />;
    case 'sunRain':
      return <SunRain height={height} width={width} className={className} />;
    case 'sunCloud':
      return <SunCloud height={height} width={width} className={className} />;
    case 'rain':
      return <Rain height={height} width={width} className={className} />;
    case 'mist':
      return <Mist height={height} width={width} className={className} />;
    case 'thunderstorm':
      return (
        <Thunderstorm height={height} width={width} className={className} />
      );
    default:
      return null;
  }
};

export default Icon;
