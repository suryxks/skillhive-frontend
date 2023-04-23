/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { ButtonCta, ButtonOutlined } from "./index";
// import { useLogin, useSignup } from '@/hooks'
import { loginService } from "../services/AuthService";
export const AuthForm = ({ pageName }) => {
  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const [userCredentials, setUserCredentials] = useState(initialFormState);
  let loginMutation 
  let signupMutation 
  const testCredentials = {
    firstName: "Surya",
    lastName: "K S",
    email: "surya@gmail.com",
    password: "123004250",
  };
  const onFirstNameChange = (event) => {
    setUserCredentials((prev) => ({ ...prev, firstName: event.target.value }));
  };
  const onLastNameChange = (event) => {
    setUserCredentials((prev) => ({ ...prev, lastName: event.target.value }));
  };
  const onEmailChange = (event) => {
    setUserCredentials((prev) => ({ ...prev, email: event.target.value }));
  };
  const onPasswordChange = (event) => {
    setUserCredentials((prev) => ({ ...prev, password: event.target.value }));
  };
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <InputsWrapper>
        {pageName !== "Login" ? (
          <>
            <Label htmlFor="firstname">Firstname</Label>
            <Input
              type="text"
              id="firstname"
              onChange={onFirstNameChange}
              value={userCredentials.firstName}
            />
            <Label htmlFor="lastname">lastname</Label>
            <Input
              type="text"
              id="lastname"
              value={userCredentials.lastName}
              onChange={onLastNameChange}
            />
          </>
        ) : null}
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          value={userCredentials.email}
          onChange={onEmailChange}
        />
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          value={userCredentials.password}
          onChange={onPasswordChange}
        />
      </InputsWrapper>

      <ButtonCta
        onClick={() => {
          if (pageName === "Login") {
            loginMutation.mutate(userCredentials);
            setUserCredentials(initialFormState);
          } else {
            signupMutation.mutate(userCredentials);
            setUserCredentials(initialFormState);
          }
        }}
      >
        {pageName === "Login" ? "Login" : "Signup"}
      </ButtonCta>
      {pageName === "Login" ? (
        <ButtonOutlined
          onClick={() => {
            setUserCredentials(testCredentials);
            loginMutation.mutate(userCredentials);
            setUserCredentials(initialFormState);
          }}
        >
          Use test credentials
        </ButtonOutlined>
      ) : null}
      <LinkWrapper>
        {pageName === "Login"
          ? "Dont have an account ? "
          : "Already have an account ? "}
        <StyledLinlk to={pageName === "Login" ? "/Signup" : "/Login"}>
          {pageName === "Login" ? "Signup" : "Login"}
        </StyledLinlk>
      </LinkWrapper>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 2px solid #e2e8f0;
  background-color: #edf2f7;
  border-radius: 4px;
  padding: 1rem;
  position: absolute;
  inset: 0;
  margin: auto;
  height: fit-content;
  gap: 1rem;
`;
const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const Input = styled.input`
  background-color: var(--white-bg);
  border: 1px solid silver;
  border-radius: 4px;
  outline: none;
  color: black;
  padding: 4px;
  &:focus {
    outline: 2px solid var(--cta);
    border: none;
  }
`;

const Label = styled.label`
  font-weight: bold;
`;
const StyledLinlk = styled(Link)`
  color: var(--cta);
  font-weight: bold;
  text-align: center;
`;

const LinkWrapper = styled.div`
  font-weight: bold;
  text-align: center;
`;
