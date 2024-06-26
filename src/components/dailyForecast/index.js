import React from 'react';
import * as S from './styles';
import WeatherIcon from '../../utils/getWeatherIcon';
import { roundNumber } from '../../utils/roundNumber';
import { getDateAndTimeFromTimestamp } from '../../utils/getDateAndTime';

const DailyForecast = ({ forecast }) => {
  const fiveDays = forecast?.daily.slice(1, -2);

  return (
    <S.Container data-testid="dailyforecast">
      <S.Title>5 Days Forecast:</S.Title>
      <S.List>
        {fiveDays?.map((day) => {
          const { date } = getDateAndTimeFromTimestamp(
            day.dt,
            forecast?.timezone_offset
          );

          return (
            <S.Item key={day.dt}>
              <S.Condition>
                <WeatherIcon
                  // 32, 40px
                  width="48px"
                  heigth="48px"
                  weather={day.weather[0]}
                />
              </S.Condition>
              <S.Temp>{roundNumber(day.temp.day)}ºC</S.Temp>
              <S.Day>{date}</S.Day>
            </S.Item>
          );
        })}
      </S.List>
    </S.Container>
  );
};

export default DailyForecast;
