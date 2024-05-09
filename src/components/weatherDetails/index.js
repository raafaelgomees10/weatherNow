import React from 'react';
import * as S from './styles';
import { ReactComponent as SunIcon } from '../../assets/sun.svg';
import { getTime } from '../../utils/getTime';
import { roundNumber } from '../../utils/roundNumber';
import { getKmPerHour } from '../../utils/getKmPerHour';
import Icon from '../../icons';

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
            <Icon icon="sunrise" width="52px" />
            <S.Sun>
              Sunrise
              <span>{sunrise}</span>
            </S.Sun>
          </S.Details>
          <S.Details>
            <Icon icon="sunset" width="52px" />
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
          <Icon icon="humidity" />
          <S.Block>
            {forecast?.current.humidity}%<span>Humidity</span>
          </S.Block>
        </div>
        <div>
          {/* <WindIcon /> */}
          <Icon icon="windspeed" />
          <S.Block>
            {roundNumber(getKmPerHour(forecast?.current.wind_speed))}km/h
            <span>Wind Speed</span>
          </S.Block>
        </div>
        <div>
          <Icon icon="pressure" className="pressure" />
          <S.Block>
            {forecast?.current.pressure}hPa
            <span>Pressure</span>
          </S.Block>
        </div>
        <div>
          {/* <UVIcon /> */}
          <Icon icon="uv" />
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
