import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img1 from "../images/img1.svg";


const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Wrapper>
      <div className="container">
        <img src={img1} alt="github user" />
        <h1>Github User</h1>
        <Link to="/" className="btn" onClick={loginWithRedirect} >
          Sign in/ Sign up
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
   min-height: 100vh;
   /* display: grid;
   place-items: center; */
   display: flex;
   align-items: center;
   justify-content: center;
   .container {
       width : 90vw;
       max-width: 600px;
       text-align: center;
   }
   img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;

export default Login;
