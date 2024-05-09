import React from 'react';
import * as S from './styles';
import { getDateAndTimeFromTimestamp } from '../utils/getDateAndTime';

const LocalTime = ({ cityName, forecast }) => {
  const timestamp = forecast?.current?.dt;
  const timezone = forecast?.timezone_offset;

  const { date, time } = getDateAndTimeFromTimestamp(timestamp, timezone);

  return (
    <S.Container data-testid="localime">
      <S.City>{cityName}</S.City>
      <S.Content>
        <S.Time>{time}</S.Time>
        <S.Day>{date}</S.Day>
      </S.Content>
    </S.Container>
  );
};

export default LocalTime;
