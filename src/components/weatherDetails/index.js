import React from 'react';
import * as S from './styles';
import { ReactComponent as SunriseIcon } from '../../assets/sunrise.svg';
import { ReactComponent as SunsetIcon } from '../../assets/sunset.svg';
import { ReactComponent as SunIcon } from '../../assets/sun.svg';
import { ReactComponent as HumidityIcon } from '../../assets/humidity.svg';
import { ReactComponent as UVIcon } from '../../assets/uv.svg';
import { ReactComponent as PressureIcon } from '../../assets/pressure.svg';
import { ReactComponent as WindIcon } from '../../assets/wind.svg';
import { getTime } from '../utils/getTime';
import { roundNumber } from '../utils/roundNumber';
import { getKmPerHour } from '../utils/getKmPerHour';

const WeatherDetails = ({ forecast }) => {
  const timezone = forecast?.timezone_offset;
  const sunset = getTime(forecast?.current.sunset, timezone);
  const sunrise = getTime(forecast?.current.sunrise, timezone);

  return (
    <S.Container>
      <S.Column>
        <S.Temperature>{roundNumber(forecast?.current.temp)}ºC</S.Temperature>
        <S.Feels>
          Feels like:
          <strong>{roundNumber(forecast?.current.feels_like)}ºC</strong>
        </S.Feels>
        <div>
          <S.Details>
            <SunriseIcon />
            <S.Sun>
              Sunrise
              <span>{sunrise}</span>
            </S.Sun>
          </S.Details>
          <S.Details>
            <SunsetIcon />
            <S.Sun>
              Sunset
              <span>{sunset}</span>
            </S.Sun>
          </S.Details>
        </div>
      </S.Column>
      <S.Column>
        <SunIcon />
        Sunny
      </S.Column>
      <S.Column>
        <div>
          <HumidityIcon />
          <S.Block>
            {forecast?.current.humidity}%<span>Humidity</span>
          </S.Block>
        </div>
        <div>
          <WindIcon />
          <S.Block>
            {roundNumber(getKmPerHour(forecast?.current.wind_speed))}km/h
            <span>Wind Speed</span>
          </S.Block>
        </div>
        <div>
          <PressureIcon />
          <S.Block>
            {forecast?.current.pressure}hPa
            <span>Pressure</span>
          </S.Block>
        </div>
        <div>
          <UVIcon />
          <S.Block>
            {forecast?.current.uvi}
            <span>UV</span>
          </S.Block>
        </div>
      </S.Column>
    </S.Container>
  );
};

export default WeatherDetails;
