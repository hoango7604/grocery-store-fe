import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

const FirstPost = () => {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>

      <h1>First Post</h1>

      <p>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </p>
      
      <Image
        src="/images/profile.jpeg"
        alt="profile-image"
        width={144}
        height={144}
      />
    </>
  )
}

export default FirstPost
