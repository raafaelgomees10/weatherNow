import React from 'react';
import * as S from './styles';
import Icon from '../../icons';
import Details from './components/details';
import { getTime } from '../../utils/getTime';
import WeatherIcon from '../../utils/getWeatherIcon';
import { roundNumber } from '../../utils/roundNumber';

const WeatherDetails = ({ forecast }) => {
  const timezone = forecast?.timezone_offset;
  const sunset = getTime(forecast?.current.sunset, timezone);
  const sunrise = getTime(forecast?.current.sunrise, timezone);

  return (
    <S.Container data-testid="weather-details">
      <S.TempContent>
        <S.Temperature>{roundNumber(forecast?.current.temp)}ºC</S.Temperature>
        <S.Feels>
          Feels like:
          <strong>{roundNumber(forecast?.current.feels_like)}ºC</strong>
        </S.Feels>

        <S.SunDetails>
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
        </S.SunDetails>
      </S.TempContent>

      <S.Climate>
        <WeatherIcon
          width="180px"
          height="180px"
          weather={forecast?.current.weather[0]}
        />
        <p data-testid="desc">{forecast?.current.weather[0].description}</p>
      </S.Climate>

      <Details forecast={forecast} />
    </S.Container>
  );
};

export default WeatherDetails;
