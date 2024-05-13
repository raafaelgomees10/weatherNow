import React from 'react';
import * as S from './styles';
import Icon from '../../icons';
import Details from './components/details';
import { getTime } from '../../utils/getTime';
import { roundNumber } from '../../utils/roundNumber';
import WeatherIcon from '../../utils/getWeatherIcon';

const WeatherDetails = ({ forecast }) => {
  const timezone = forecast?.timezone_offset;
  const sunset = getTime(forecast?.current.sunset, timezone);
  const sunrise = getTime(forecast?.current.sunrise, timezone);

  return (
    <S.Container>
      <S.TempContent>
        <S.Temperature>{roundNumber(forecast?.current.temp)}ºC</S.Temperature>
        <S.Feels>
          Feels like:
          <strong>{roundNumber(forecast?.current.feels_like)}ºC</strong>
        </S.Feels>

        <div>
          <S.SunData>
            <Icon icon="sunrise" width="52px" />
            <S.Sun>
              Sunrise
              <span>{sunrise}</span>
            </S.Sun>
          </S.SunData>

          <S.SunData>
            <Icon icon="sunset" width="52px" />
            <S.Sun>
              Sunset
              <span>{sunset}</span>
            </S.Sun>
          </S.SunData>
        </div>
      </S.TempContent>

      <S.Climate>
        <WeatherIcon weather={forecast?.current.weather[0]} />
        <p>{forecast?.current.weather[0].description}</p>
      </S.Climate>

      <Details forecast={forecast} />
    </S.Container>
  );
};

export default WeatherDetails;
