import Head from 'next/head'

import Header from './components/Header'
import Login from './components/Login'

import Search from './components/Search'
import Thumbnail from './components/Thumbnail'


export default function Home() {
  return (
   
      <div className="container ">
         <Head>
            <title>Coffee Shop</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header/>
        <Login/>
        <Search/>
        <Thumbnail/>
      
      </div>
      
  )
}
