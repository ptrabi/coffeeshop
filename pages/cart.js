import Head from 'next/head'
import Additional from './components/Additional'
import Display from './components/Display'
import { ChevronLeftIcon } from '@heroicons/react/solid'
import { useRouter } from "next/router"
import Carthead from './components/Carthead'
import Thumbnail from './components/Thumbnail'
import Cartlist from './components/Cartlist'
export default function cart(){
    const router = useRouter()
    return <div className="container ">
         <Head>
            <title>Coffee Shop</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Carthead/>
        <Cartlist/>
      </div>
      
    }