import React from 'react';
import * as S from './styles';
import useMedia from '../../Hooks/useMedia';

const Loading = () => {
  const tablet = useMedia('(min-width:768px) and (max-width:1199px)');

  return (
    <S.Container>
      <S.Content $height="255px">
        <S.Text $width="30%" className="title" />
        <S.Text $width="35%" />
        <S.Text $width="80%" />
        <S.Text $width="75%" />
        <S.Text $width="50%" />
        <S.Text $width="20%" />
      </S.Content>
      <S.Content $height="255px">
        <S.Text $width="40%" />
        <S.Text $width="40%" />
        <S.Text $width="75%" />
        <S.Text $width="60%" />
        <S.Text $width="30%" />
        <S.Text $width="20%" />
        {tablet && (
          <>
            <S.Text $width="40%" />
            <S.Text $width="40%" />
            <S.Text $width="75%" />
            <S.Text $width="60%" />
            <S.Text $width="30%" />
            <S.Text $width="20%" />
            <S.Text $width="40%" />
            <S.Text $width="40%" />
            <S.Text $width="75%" />
            <S.Text $width="60%" />
            <S.Text $width="30%" />
            <S.Text $width="20%" />
          </>
        )}
      </S.Content>
      <S.Content $height="300px">
        <S.Text $width="40%" className="title" />
        <S.Text $width="30%" />
        <S.Text $width="80%" />
        <S.Text $width="80%" />
        <S.Text $width="60%" />
        <S.Text $width="25%" />
        <S.Text $width="45%" />
      </S.Content>
      <S.Content $height="300px">
        <S.Text $width="55%" className="title" />
        <S.Text $width="40%" />
        <S.Text $width="40%" />
        <S.Text $width="60%" />
        <S.Text $width="30%" />
        <S.Text $width="55%" />
        <S.Text $width="25%" />
      </S.Content>
    </S.Container>
  );
};

export default Loading;
