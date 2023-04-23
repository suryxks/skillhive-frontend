/* eslint-disable react/prop-types */
import { MdPerson } from 'react-icons/md'
import { ButtonCta } from "./ButtonCta"
import { IconWrapper } from './IconWrapper'
import { useNavigate, Link } from 'react-router-dom'
import styled from 'styled-components'
export const AppBar = ({ isLoggedIn }) => {
   const navigate=useNavigate()
    const navigateTologin = () => {
      navigate('/Login')
    }
    return (
        <AppBarWrapper >
            <Cta to='/' >SkillHive</Cta>
            <ActionsWrapper>
                <ButtonCta onClick={navigateTologin}>{isLoggedIn?"Logout":"Login" }</ButtonCta>
                <IconWrapper>
                    <Link to='/'>
                        <MdPerson />
                    </Link>
                </IconWrapper>
            </ActionsWrapper>
        </AppBarWrapper>)
}


const AppBarWrapper = styled.nav`
        padding: 0.5rem 1rem;
    background-color: var(--sidebar-bg);
    /* margin: 1rem; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap:8px;
    max-height: 56px;
    position: sticky;
    top:0;
    right: 0;
    left: 0;
    width: 100vw;
    grid-area: appbar;
`;

const Cta=styled(Link)`
    color: var(--cta);
    font-size: 2rem;
    font-weight: bold;
`

const ActionsWrapper=styled.div`
     display: flex;
    gap:8px;
    justify-content: flex-end;
    align-items: center;
`