import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 5;
  gap: 16px;
  padding: 8px 16px;
  justify-content: space-between;
  flex-direction: column;

  overflow-y: auto;
  
  scroll-behavior: smooth;
`;
