import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import './App.css';
import { HomePage } from './app/containers/HomePage';

const AppContainer = styled.div`
  ${tw`flex flex-col w-full h-full `};
`;

export default function App(): React.ReactElement {
  return (
    <AppContainer>
      <HomePage />
    </AppContainer>
  );
}
