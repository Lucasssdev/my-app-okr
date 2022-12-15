import styled from "styled-components";
 
export const Container = styled.div`
    display: grid;
    grid-template-columns: auto 500px ;
    height: 100vh;
    overflow-x: auto ;
    
`
export const WhiteSpacing = styled.div`
    background-color: #221030;
    overflow-x: auto ;
`
export const Content = styled.div`
    background: #190925;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: auto ;
    article{
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: flex-start;
  
    }
   
`