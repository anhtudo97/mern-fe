import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const PageContainer = styled.div`
  ${tw`flex flex-col items-center w-full h-full overflow-x-hidden `}
`;

export const HomePage = (): React.ReactElement => {
  return <PageContainer>helloworld</PageContainer>;
};
