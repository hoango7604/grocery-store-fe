import React from 'react'
import Head from 'next/head';
import Link from 'next/link'
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    word-wrap: break-word;
  }

  body {
    font-family: Arial, Helvetica, Verdana, sans-serif;
    font-size: 16px;
    font-weight: normal;
    letter-spacing: .03rem;
    margin: 0 auto;
  }

  h1 {
    font-size: 4rem;
  }

  a {
    color: #bf9e5f;
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    text-decoration: underline;
  }

  img {
    border: 0px;
    width: 100%;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  text-align: center;
`;

const Home = () => {
  return (
    <>
      <Head>
        <title>SSR styled-components with Next.js Starter</title>
      </Head>
      <Container>
        <GlobalStyle />
        <h1>Hello, world!</h1>

        <p>
          Read{' '}

          <Link href="/posts/first-post">
            <a>this page!</a>
          </Link>
        </p>
      </Container>
    </>
  );
}

export default Home
