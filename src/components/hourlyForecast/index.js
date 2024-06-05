import React from 'react';
import * as S from './styles';
import Icon from '../../icons';
import { getTime } from '../../utils/getTime';
import WeatherIcon from '../../utils/getWeatherIcon';
import { roundNumber } from '../../utils/roundNumber';
import { getKmPerHour } from '../../utils/getKmPerHour';
import { convertTimestampToDate } from '../../utils/getDateAndTime';

const HourlyForecast = ({ forecast }) => {
  // Obter a hora atual
  const currentTime = new Date();

  // Adicionar 3 horas à hora atual
  currentTime.setHours(currentTime.getHours() + 3);

  // Criar um novo array para armazenar os timestamps desejados
  const selectedHours = [];

  // Encontrar os 5 timestamps mais próximos, com intervalo de 3 horas
  for (let i = 0; i < forecast?.hourly.length; i++) {
    const hourlyObjectData = forecast?.hourly[i];

    const date = convertTimestampToDate(
      hourlyObjectData.dt,
      forecast?.timezone_offset
    );

    // Verificar se a hora está dentro do intervalo desejado
    if (date.getHours() % 3 === 0) {
      selectedHours.push(hourlyObjectData);
    }

    /* istanbul ignore next */
    if (selectedHours.length === 5) {
      break;
    }
  }

  return (
    <S.Container data-testid="hourlyforecast">
      <S.Title>Hourly Forecast:</S.Title>
      <S.Content>
        <S.List>
          {selectedHours?.map((hour) => {
            const time = getTime(hour.dt, forecast.timezone_offset);
            return (
              <S.Item key={hour.dt}>
                <S.Time>{time}</S.Time>
                <S.Condition>
                  <WeatherIcon
                    width="48px"
                    heigth="48px"
                    weather={hour.weather[0]}
                  />
                </S.Condition>
                <S.Temp>{roundNumber(hour.temp)}ºC</S.Temp>
                <S.Wind $deg={hour.wind_deg}>
                  <Icon icon="arrow" width="48px" height="48px" />
                </S.Wind>
                <S.Speed>
                  {roundNumber(getKmPerHour(hour.wind_speed))} km/h
                </S.Speed>
              </S.Item>
            );
          })}
        </S.List>
      </S.Content>
    </S.Container>
  );
};

export default HourlyForecast;
