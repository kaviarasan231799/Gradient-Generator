import styled from 'styled-components/macro'

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  list-style-type: none;
  margin-bottom: 16px;
  @media screen and(min-width:768px) {
    width: 24%;
  }
`

export const DirectionButton = styled.button`
color:${props => (props.isActive ? '#334155' : '#1e293b')}
  background-color: #ffffff;
  width: 100px;
  height: 49px;
  border-radius: 20px;
  border: none;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  margin-right: 20px;
  outline: none;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  `
