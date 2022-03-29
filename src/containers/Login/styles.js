import styled from 'styled-components'
// import Logo from '../../assets/login/logo-codeburger'

export const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

export const LoginImage = styled.img`
height:104%;
`

export const ContainerItens = styled.div`
background-color: #373737;
width:100%;
height:100%;
padding: 25px 75px;
flex-direction: column;
display: flex;
justify-content: center;

img {
    width: 338px;
    height: 125px;
}
`
export const H1 = styled.h1`
    font-style: normal;
    font-weight:500;
    font-size:24px;
    line-height:28px;
    color:#ffffff;
    text-align: center;
    margin-top:80px;
`

export const Label = styled.p`
margin-top:17px;
margin-bottom:5px;
margin-left:110px;

font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 14px;

color: #FFFFFF;
`

export const Input = styled.input`
width:390px;
height: 38px;

background: #FFFFFF;
box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
border-radius: 5px;
outline: none;
`

export const Button = styled.button`
width: 182px;
height: 36px;

margin-top: 66px;
margin-left: 104px;

background: #9758A6;
border-radius: 20px;
border:none;

font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
text-align: center;
cursor: pointer;


color: #FFFFFF;
&:hover {
    opacity: 0.5;
}
`
export const CadastrarLink = styled.p`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;

margin-left: 110px;
margin-top:32px;
cursor: pointer;


color: #FFFFFF;
`
