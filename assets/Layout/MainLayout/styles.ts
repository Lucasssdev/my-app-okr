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
    
    height: 100vh;
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
    span{
        padding: 20px;
        
    }
    div{
        display: flex;
        flex-direction: column;
        justify-self: flex-end;
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
   
    display: flex;
    width: 340px;
    height: 45px;
    background: #13051D;
    border: 1px solid #1E0F29;
    border-radius: 4px; 
    button{
        background: transparent;
        border: hidden;
    }  
    
` 
export const InputSearch = styled.input`

    background-color: transparent;
    border: hidden;
    color: #fff;
    height: 100%;
    width: 100%;
    
    
    :placeholder{ 
        color: #fff;
        opacity: 70%;
    }
` 
export const Button = styled.button`
    display: flex;
    background: #59F2CD;
    box-shadow: 0px 0px 15px rgba(89, 242, 205, 0.55);
    border-radius: 4px;
    width: 229px;
    height: 45px;
    text-transform: uppercase;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #2A7563;
`
