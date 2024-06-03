import React from 'react';
import * as S from './styles';
import Icon from '../../../../icons';
import { roundNumber } from '../../../../utils/roundNumber';
import { getKmPerHour } from '../../../../utils/getKmPerHour';

const Details = ({ forecast }) => {
  return (
    <S.Container>
      <S.Block>
        <Icon icon="humidity" />
        <S.Text>
          {forecast?.current.humidity}%<span>Humidity</span>
        </S.Text>
      </S.Block>

      <S.Block>
        <Icon icon="windspeed" />
        <S.Text>
          {roundNumber(getKmPerHour(forecast?.current.wind_speed))}km/h
          <span>Wind Speed</span>
        </S.Text>
      </S.Block>

      <S.Block>
        <Icon icon="pressure" className="icon-pressure" />
        <S.Text>
          {forecast?.current.pressure}hPa
          <span>Pressure</span>
        </S.Text>
      </S.Block>

      <S.Block>
        <Icon icon="uv" />
        <S.Text>
          {forecast?.current.uvi}
          <span>UV</span>
        </S.Text>
      </S.Block>
    </S.Container>
  );
};

export default Details;
