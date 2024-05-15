import React from 'react';
import * as S from './styles';
import { getDateAndTimeFromTimestamp } from '../../utils/getDateAndTime';
import { useSelector } from 'react-redux';

const LocalTime = ({ cityName, forecast }) => {
  const timestamp = forecast?.current?.dt;
  const timezone = forecast?.timezone_offset;
  const country = useSelector(
    (state) => state.weatherForecast.data.weather?.sys.country
  );
  const { date, time } = getDateAndTimeFromTimestamp(timestamp, timezone);
  return (
    <S.Container data-testid="localime">
      <S.City>
        {cityName}
        <img
          src={`https://flagsapi.com/${country}/flat/32.png`}
          alt={`${country} flag`}
        />
      </S.City>
      <S.Content>
        <S.Time>{time}</S.Time>
        <S.Day>{date}</S.Day>
      </S.Content>
    </S.Container>
  );
};

export default LocalTime;
