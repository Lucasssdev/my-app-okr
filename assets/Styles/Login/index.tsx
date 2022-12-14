import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap:100px;
    section{
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        //background-color: aqua;
        justify-content: center;
    }
    
`  
export const Link = styled.div`
    
    margin: 25px 0px;
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    font-weight: 400;
    font-size: 12px;
    
    a{
        text-decoration: underline;
    }
`  