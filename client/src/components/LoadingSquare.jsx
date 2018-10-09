import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingKeyframe = keyframes`
  0% {
    height: 140px;
    width: 140px;
  }
  50% {
    height: 120px;
    width: 120px;
  }
  100% {
    height: 140px;
    width: 140px;
  }
`;

const LoadingSquareContainer = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
`;

const AnimatedSquare = styled.div`
  text-align: center;
  border: 18px solid navy;
  border-radius: 35px;
  width: 120px;
  height: 120px;
  animation: ${LoadingKeyframe} 2s linear infinite;
`;

const LoadingSquare = () => (<LoadingSquareContainer><AnimatedSquare /></LoadingSquareContainer>);

export default LoadingSquare;
