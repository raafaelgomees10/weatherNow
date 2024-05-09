import React from 'react';
import Pressure from './components/pressure';
import Sunrise from './components/sunrise';
import Sunset from './components/sunset';
import Humidity from './components/humidity';
import WindSpeed from './components/windspeed';
import Uv from './components/uv';

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

    default:
      return null;
  }
};

export default Icon;
