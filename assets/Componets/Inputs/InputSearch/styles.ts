import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 15px;
    display: flex;
    width: 340px;
    height: 45px;
    background: #13051D;
    border: 1px solid #1E0F29;
    border-radius: 4px;
    &:hover{
        outline: auto;
        border: 1px solid;
        
    }  
    
`
export const Input = styled.input`
    width: 100%;
    height: 100%;
    border: hidden;
    background: transparent;
    :focus{
        outline: none 
    }
`
export const Icon = styled.div`
    opacity: 60%;
    &:hover{
        opacity :100% ;
    }
`