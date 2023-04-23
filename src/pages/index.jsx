import { Sidebar, AppBar, ButtonCta ,PageWrapper} from '../components'
import { useAuth } from '../contexts/AuthContext'
import  { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { getUser } from '../utils/userUtils'
import { CourseCard } from '../components/CourseCard'
import styled from 'styled-components'


export default function Home() {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const { user, isAuthenticated, token } = auth;
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('token')) {
      const user = getUser();
      if (user) {
        setAuth({
          user: user,
          isAuthenticated: true,
          token: localStorage.getItem('token')
        })
      }
    } else {
     navigate('/Login')
    }
  }, [])

  if (!isAuthenticated) {
    return <div>Loading...</div>
  }

  return (
    <HomeWrapper>
        <PageWrapper>
          <AppBar isLoggedIn={isAuthenticated} />
          <Sidebar />
          <CourseContent >
            <CourseContentHeader>
              <h1>Your courses</h1>
           <ButtonCta onClick={()=>{}}>Create/join Course</ButtonCta>
            </CourseContentHeader>
            <div>
              {user.courses.map((course) => {
                return <CourseCard course={course.course} key={course.id} />
              })}
            </div>
          </CourseContent>
        </PageWrapper>
    </HomeWrapper>
  )
}

const HomeWrapper=styled.div`
   display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
`
const CourseContent=styled.div`
  grid-area: course;
  overflow-y: auto;
  margin: 2rem;
`
const CourseContentHeader=styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  &>button{
    width: fit-content;
  }
`