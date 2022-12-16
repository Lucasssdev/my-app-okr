import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #221030;
    border-radius: 5px;
    display: grid;
    grid-template-columns: 280px auto;
    align-items: center;
    overflow-y: auto;
    
`

export const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh ;
    article{
       display: flex;
       flex-direction: column;
        align-items: center !important;
        width: 100%;
        padding: 30px 25px;
        overflow-y: auto;
        overflow-x: hidden;
    }
   
   
`;
export const Main = styled.div`
    
    display: flex;
    flex-direction: column;
    background-color: #190925;
    
    height: 100%;
    h1{
        text-align: center;
        height: auto;
    }
` 
export const Options = styled.div`
    background-color: #190925;
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-top: 100px;
    justify-content: space-between;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    button{
        padding: 40px 20px;
        margin-bottom: 10px;
        background: transparent;
        border: hidden;
        text-align: start;
        &:hover{
            border-left: solid 5px;
            border-color: #7559F2;
            border-radius: -8px;
            cursor: pointer;
        }
    }
    div{
        display: flex;
        flex-direction: column;
        justify-self: flex-end;
    }
    a{
        padding-left: 30px !important;
        padding: 20px;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        &:hover{
            text-decoration: underline;
            cursor: pointer;
            font-size: 15px;
        }
    }
` 
export const Header = styled.div`

   
    width: calc(100vw - 280px);
    height: 85px !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #190925;
    padding: 40px 30px;


   
` 
export const Search = styled.div`

` 
export const Button = styled.button`
    * {
        transition-duration: 1s;
    }
    
    background: #59F2CD;
    box-shadow: 0px 0px 15px rgba(89, 242, 205, 0.55);
    border-radius: 4px;
    width: 229px;
    height: 45px;
    text-transform: uppercase;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    color: #2A7563;
    
    &:hover{
        svg {
                transform: rotate(360deg);
            }
        background-color: #81FFE1;
        box-shadow: 0px 0px 20px rgba(89, 242, 205, 0.55);
        
    }
`
export const Logo = styled.image`
    padding: 8px;
   
    img{
        border: hidden;
    
    background: transparent;
    }
`