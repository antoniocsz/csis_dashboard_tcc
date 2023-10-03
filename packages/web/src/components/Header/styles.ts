import styled, { css } from 'styled-components';

export const Container = styled.header`
  width: 100%;
  padding: 1.5rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MenuList = styled.nav`
  display: flex;
  gap: 24px;
`

type MenuItemProps = {
  isActive?: boolean;
}

export const MenuItem = styled.a<MenuItemProps>`
  display: flex;
  align-items: center;
  color: #FFF;
  line-height: 1.6;
  font-size: 1.5rem;
  font-family: 'Titillium Web';
  /* font-weight: bold; */
  text-decoration: none;
  gap: 8px;
  padding: 8px 12px;
  

  ${({ isActive }) => isActive && css`
    /* border-bottom: 4px solid  #64ff64; */
    color: #64ff64;
    /* border-radius: 8px; */
  ` }

  &:hover {
    opacity: 0.5;

    transition: all 0.2s;
  }
`

