import styled, { css } from 'styled-components';
import { OccurenceType, PriorityType } from '@/dtos/OccurrenceDTO';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #000;
`;

export const Title = styled.span`
  font-family: 'Titillium Web';
  font-size: 1.25rem;
  text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-weight: bold;

  padding: 12px;
`

export const ItemContainer = styled.a`
  border-bottom: 1px solid #c4c4c4;
  color: #FFF;
  text-decoration: none;
  padding: 12px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  

  &:hover {
    background-color: #64ff64;
  }
`

export const ItemContainerHorizontal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ItemContainerVertical= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`


export const ItemTitle = styled.span`
  font-family: 'Titillium Web';
  font-size: 1.25rem;
  font-weight: bold;
`

interface Props {
  type: PriorityType
}

export const ItemSubtitle = styled.span<Props>`
  font-family: 'Titillium Web';
  font-size: 1rem;
  font-weight: bold;

  ${({ theme, type }) => type === 'Alta' && css`
    color: ${theme.COLORS.ATTENTION};
  `}

  ${({ theme, type }) => type === 'Urgente' && css`
    color: ${theme.COLORS.DANGER_LIGHT};
  `}

`

export const DataText = styled.span`
  font-family: 'Titillium Web';
  font-size: 0.75rem;
`