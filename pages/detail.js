import Head from 'next/head'
import Additional from './components/Additional'
import Display from './components/Display'

export default function detail(){
    return <div className="container max-w-lg ">
         <Head>
            <title>Coffee Shop</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Display/>
        <Additional/>
      </div>
      
    }