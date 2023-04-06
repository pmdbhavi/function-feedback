import styled from 'styled-components'

export const Con=styled.div`
    margin:1px;
`
export const Container =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-image: linear-gradient(to right, #ffeeee, #ffc0bb);
`
  
export const CardContainer=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 20px;
    width: 40%;
    @media screen and (max-width: 576px){
        width:80%;
    }
`
  
export const ListContainer=styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    padding: 10px;
`
  
export const ItemContainer=styled.li`
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`
  
export const Header=styled.h1`
    text-align: center;
    font-size: 20px;
    font-weight: bold;
`
export const LogoImg=styled.img`
    height: 70px;
    cursor: pointer;
    @media screen and (max-width: 576px) {
      height: 40px;
    }
`
export const Name=styled.p`
    color: #1e293b;
    font-weight: bold;
`
  
export const LoveContainer=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
  
export const Love =styled.img`
    width: 20%;
`
export const ThankYou=styled.h1`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
`
  
export const Support=styled.p`
    color: #1e293b;
    font-size: 15px;
    font-weight: bold;
    text-align: center;
`
  