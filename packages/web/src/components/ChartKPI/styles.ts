import styled, { css } from 'styled-components';

type Props = {
  color?: string
}

export const Container = styled.div<Props>`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-height: 120px;
  padding: 16px;
 
  background-color: #22971c;

  ${({ color }) => color && css`
    background-color: ${color};
  `}

  box-shadow: rgba(255, 255, 255, 0.24) 0px 3px 8px;
  border-radius: 8px;
`;

export const Title = styled.span`
  font-family: 'Titillium Web';
  font-size: 1.0rem;
  text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export const Subtitle = styled.span<Props>`
  font-family: 'Titillium Web';
  font-size: 3.25rem;
  text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: column;
`