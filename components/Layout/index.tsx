import Head from "next/head";
import React, {useEffect, useState} from "react";
import Favicon from '/public/image/logo.png'

export default function Layout({children}: { children: React.ReactNode }){
  const [pageLoading, setPageLoading] = useState<boolean>(true)
  useEffect(() => {
      setPageLoading(false)
  }, []);
  return <>
    <div>
      <Head>
        <title>Plutus3</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <meta name="description" content="Design Automation Conference based on web3"/>

        <link rel="shortcut icon" href={Favicon.src} type="image/x-icon"/>
      </Head>
    </div>
    {
      !pageLoading && children
    }
  </>
}
