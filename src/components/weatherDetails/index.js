import React from 'react';
import * as S from './styles';
import { ReactComponent as SunriseIcon } from '../../assets/sunrise.svg';
import { ReactComponent as SunsetIcon } from '../../assets/sunset.svg';
import { ReactComponent as SunIcon } from '../../assets/sun.svg';
import { ReactComponent as HumidityIcon } from '../../assets/humidity.svg';
import { ReactComponent as UVIcon } from '../../assets/uv.svg';
import { ReactComponent as PressureIcon } from '../../assets/pressure.svg';
import { ReactComponent as WindIcon } from '../../assets/wind.svg';

const WeatherDetails = () => {
  return (
    <S.Container>
      <S.Column>
        <S.Temperature>24ªC</S.Temperature>
        <S.Feels>
          Feels like: <strong>22ºC</strong>
        </S.Feels>
        <div>
          <S.Details>
            <SunriseIcon />
            <S.Sun>
              Sunrise
              <span>06:37 AM</span>
            </S.Sun>
          </S.Details>
          <S.Details>
            <SunsetIcon />
            <S.Sun>
              Sunset
              <span>06:37 AM</span>
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
            41%
            <span>Humidity</span>
          </S.Block>
        </div>
        <div>
          <WindIcon />
          <S.Block>
            2km/h
            <span>Wind Speed</span>
          </S.Block>
        </div>
        <div>
          <PressureIcon />
          <S.Block>
            997hPa
            <span>Pressure</span>
          </S.Block>
        </div>
        <div>
          <UVIcon />
          <S.Block>
            8<span>UV</span>
          </S.Block>
        </div>
      </S.Column>
    </S.Container>
  );
};

export default WeatherDetails;
