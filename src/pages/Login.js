import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img1 from "../images/img1.svg";

const Login = () => {
  return (
    <Wrapper>
      <div className="container">
        <img src={img1} alt="github user" />
        <h1>Github User</h1>
        <Link to="/" className="btn">
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
