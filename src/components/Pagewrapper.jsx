/* eslint-disable react/prop-types */
import styled from 'styled-components'

export const PageWrapper = ({children}) => {
    return <Page>{children }</Page>
}

const Page=styled.div`
     display: grid;
    grid-template-columns: 15vw 1fr;
    grid-template-rows: 56px 1fr;
    grid-template-areas: 
    "appbar appbar"
    "sidebar course";
      
`