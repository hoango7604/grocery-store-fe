import React from 'react'
import Head from 'next/head';
import Link from 'next/link'
import styled from 'styled-components';

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
