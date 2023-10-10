import styled from "styled-components";

export const FilterSection = styled.section`
  align-self: center;
  width: 80%;

  margin: 18px;

  display: flex;
  flex-direction: row;
  gap: 32px;

  justify-content: space-between;

  div {
    width: 30%;
    display: flex;
    gap: 16px;
  }
  
  div.formGroup {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 8px;

    label {
      font-family: 'Titillium Web';
      font-size: 1.25rem;
      font-weight: bold;
    }
  }

  input {
    width: 100%;
    height: 50px;
    border-radius: 6px;

    background-color: transparent;
    border: 2px solid #04ae7b;
    color: #fff;
    padding-left: 8px;
  }

`


export const OccurrenceItemContainer = styled.div`
  align-self: center;
  width: 80%;

  margin: 18px;
`

export const OccurrenceItemTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border: 1px solid #04ae7b;
  
  span {
    font-family: 'Titillium Web';
    padding: 12px 18px;
    font-size: 1.25rem;
  }

  a {
    font-family: 'Titillium Web';
    font-size: 1.25rem;
    background-color: #04ae7b;
    color: #FFF;
    text-decoration: none;
    padding: 12px 18px;

    &:hover {
      opacity: 0.9;
    }
  }
  
`

export const OccurrenceItemDescribeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  min-height: 150px;

  margin-left: 50px;

  border: 1px solid #04ae7b;
  
  span, p {
    font-family: 'Titillium Web';
    padding: 12px 18px;
    font-size: 1.25rem;
  }

  span {
    align-self: flex-end;
    font-size: 0.75rem;
    background-color: #04a675;
  }
  
`