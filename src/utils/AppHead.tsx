import Head from 'next/head';
import React from 'react';
interface AppHeadProps{
    title?:string;
}

function AppHead({title="Pinterest Video Downloader"}:AppHeadProps) {
  return (
    <Head>
        <title>{title}</title>
    </Head>
  )
}

export default AppHead