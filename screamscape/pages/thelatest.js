// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/TheLatest.module.css';

import ContainerBlock from '../components/ContainerBlock';
import TheLatest from '../components/TheLatest';
import { connectToDatabase } from '../util/mongodb';

export default function thelatest( { news } ) {
  
  return (
    <div>
      <ContainerBlock>
        <TheLatest props={news} />
      </ContainerBlock>
    </div>
  )
};

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();
  const data = await db.collection('news').find({}).toArray();
  const news = JSON.parse(JSON.stringify(data));

  return {
    props: { news }
  }
};