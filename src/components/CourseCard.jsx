/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { ButtonCta } from "./ButtonCta";
import styled from "styled-components";
export const CourseCard = ({ course }) => {
    const navigate = useNavigate();
  const { name, description, id } = course;

  return (
    <CardWrapper>
      <TitleContainer >
        <CourseTitle>{name}</CourseTitle>
      </TitleContainer>
      <Content>
        <ButtonCta
          onClick={() => {
            navigate(`/courses/${id}`)          
          }}
        >
          View Course
        </ButtonCta>
      </Content>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  border: 2px solid lightblue;
  border-radius: 4px;
  width: 350px;
`;
const TitleContainer = styled.div`
  background-image: url("https://gstatic.com/classroom/themes/img_bookclub.jpg");
  color: whitesmoke;
  font-weight: 700;
  margin: auto;
  height: 100px;
  padding-top: 1rem;
  background-size: cover;
`;
const CourseTitle = styled.div`
  margin: 0.5rem;
  width: fit-content;
`;

const Content = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`;
