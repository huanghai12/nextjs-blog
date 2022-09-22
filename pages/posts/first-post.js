// import React from "react";
import Link from 'next/link';
import Layout from '../../components/layout';
import Head from 'next/head';
import { getSortedPostsData } from '../../lib/posts'

// export async function getStaticProps(obj){
//     const postData = getPostData(obj.params.id);
//     return {
//         props: {
//             postData,
//         }
//     }
// }
export async function getStaticProps(obj){
  const allPostsData = getSortedPostsData();
  return {
    props: {allPostsData}
  }
}
export default function Frist({allPostsData}){
    return ( <Layout>
                <Head>
                    <title>First post</title>
                </Head>
                <h1>First post</h1>
                <h2>
                    <Link href="/">Back to home</Link>
                </h2>
                <img src="/favicon.ico" alt="Your Name" />
                <ul >
                    {
                        allPostsData.map(({id,date,title})=>(
                        <li key={id}>
                            <p>{id}</p>
                            <p>{date}</p>
                            <p>{title}</p>
                        </li>
                        ))
                    }
                    </ul>
            </Layout>)
    
}