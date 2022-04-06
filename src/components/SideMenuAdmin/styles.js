import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.div`
  background-color: #3c3c3c;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);
  width: 19vw;
  margin-top: 0;
  margin-left: 0;

  hr {
    margin: 50px 15px;
  }
`
export const ItemContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  background: #565656;
  border-radius: 2px;
  margin: 8px;
  padding-left: 20px;
  .icon {
    color: #ffff;
  }
`

export const ListLink = styled(Link)`
  font-weight: 400;
  font-size: 17px;
  line-height: 19px;
  color: #ffffff;
  text-decoration: none;
  padding-left:15px ;
`
