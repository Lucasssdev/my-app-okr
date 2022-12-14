import styled from "styled-components";
 
export const Container = styled.div`
    display: grid;
    grid-template-columns: auto 500px ;
    
`
export const WhiteSpacing = styled.div`
    background-color: #221030;
`
export const Content = styled.div`
    background: #190925;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    article{
        display: flex;
        flex-direction: column;
        height: 100%;
        //background-color: blue;
        justify-content: flex-start;
  
    }
   
`