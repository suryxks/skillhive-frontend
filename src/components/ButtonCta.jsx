/* eslint-disable react/prop-types */
import styled from 'styled-components'
export const ButtonCta = ({ children ,onClick}) => {
    
    return <Button onClick={onClick}>{children}</Button>
}


const Button=styled.button`
       background: var(--cta);
    padding: 2px 10px;
    color: white;
    font-weight: 400;
    border: 2px solid var(--cta);
    border-radius: 4px;
    cursor: pointer;
    &:hover{
        background-color: var(--btn-hover);
    border:2px solid var(--btn-hover)
    }
    &:active{
        border: 2px solid var(--btn-active); 
    }
`