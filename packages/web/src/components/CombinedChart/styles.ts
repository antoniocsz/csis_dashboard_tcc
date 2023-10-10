import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.DARK_LIGHT};
  padding: 12px;
  gap: 8px;
`;

export const Title = styled.span`
  font-family: 'Titillium Web';
  font-size: 1.25rem;
  font-weight: bold;
  color:  ${({ theme }) => theme.COLORS.WHITE};
`;