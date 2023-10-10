import styled from "styled-components";

export const BackButton = styled.a`
  margin: 12px 0;

  max-width: 100px;
  text-align: center;

  font-family: 'Titillium Web';
  font-size: 1.25rem;
  background-color: #04ae7b;
  color: #FFF;
  text-decoration: none;
  padding: 12px 18px;

  &:hover {
    opacity: 0.9;
  }
`

export const HorizontalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    padding: 12px 24px;
    font-family: 'Titillium Web';
    font-size: 1.25rem;
  }
`