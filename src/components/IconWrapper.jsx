/* eslint-disable react/prop-types */
import styled from 'styled-components'
export const IconWrapper = ({ children }) => {
    return <StyledIcon  role="img">{ children}</StyledIcon>
}

const StyledIcon=styled.i`
       color: var(--btn-hover);
    font-size:1.5rem;
    font-weight: bolder;
    cursor: pointer;
    padding:0.5rem;
    border-radius: 4px;
    &:hover{
        background-color: var(--sidebar-tab-bg);
    }
`