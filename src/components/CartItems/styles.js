import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  padding: 10px;
  width: max-content;
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  border-bottom: 1px solid #b5b5b5;

  p {
    font-size: 16px;
    line-height: 20px;
    align-items: flex-end;
    justify-content: flex-end;
    color: #9a9a9d;
  }
`

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: max-content;
  grid-gap: 15px 25px;
  padding: 10px;

  p {
    font-size: 16px;
    color: #000000;
    flex-wrap: wrap;
    word-wrap: break;
    flex-direction: column;
  }
  .quantity-container {
    display: flex;
    gap: 20px;
    button {
      height: 30px;
      background: transparent;
      border: none;
      font-size: 24px;
      cursor: pointer;
    }
    p {
      margin-top: 5px;
    }
  }
`
export const EmptyCart = styled.p`
  padding: 20px;
  text-align: center;
  font-weight: bold;
`
export const ProductImage = styled.img`
  border-radius: 10px;
  margin-left: 30px;
  width: 120px;
`
