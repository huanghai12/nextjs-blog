import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import cn from 'classnames';
import styles from '../styles/alert.module.css';
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link';
import Date from '../components/date';

// import useSWR from 'swr';
export async function getStaticProps(){
  // const { data, error } = useSWR('/api/user', fetch);
  const allPostsData = getSortedPostsData();
    // const res = await fetch(' http://localhost:3000/task/session');
  // const getData = await res.json();
  try {
    // const res = await fetch(' http://localhost:3000/task/session');
    // const getData = await res.json();
    // return getData.map((post) => {
    //   return {
    //     params: {
    //       id: post.id
    //     }
    //   }
    // })
  } catch (error) {
    
  }
  
  return {
    props: {allPostsData},
    revalidate: 10
  };
}
export default function Home({allPostsData,getData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {
            allPostsData.map(({id,date,title})=>(
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br></br>
                <small className={utilStyles.lightText}>
                  <Date dateString={date}></Date>
                </small>
                {/* <p>{date}</p>
                <p>{title}</p> */}
              </li>
            ))
          }
        </ul>
      </section>
      <Alert type="error">123</Alert>
    </Layout>
  );
}
function Alert({children,type}){
  return (
    <div className={cn({
      [styles.success]: type === "success",
      [styles.error]: type === "error"
    })}>{children}</div>
  )
}