import styled from 'styled-components'
export const Sidebar = () => {
    return (
        <SideBarWrapper>
            <ul>
                <Tab>Home</Tab>
                <Tab>Courses</Tab>
                <li></li>
            </ul>
        </SideBarWrapper>)
}

const SideBarWrapper = styled.nav`
        background-color: var(--sidebar-bg);
    width: 15vw;
    padding: 1rem;
    height:  calc(100vh - 56px);
    grid-area: sidebar;
`;

const Tab=styled.li`
      background-color: var(--sidebar-tab-bg);
    color: white;
    /* width: fit-content; */
    list-style: none;
    margin: auto;
    margin-top: 1rem;
    padding: 0.5rem;
    width: 90%;
    border-radius: 4px;
`