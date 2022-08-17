import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function MainHead(props){

return(
    <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"/>

        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,300;1,300&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <title>{props.titulo}</title>
    </Head>
)

}