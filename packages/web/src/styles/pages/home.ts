import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100vw;
  height: 100vh; 
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`

export const SectionKPI = styled.section`
  display: flex;
  flex-direction: row;
  gap: 16px;
`