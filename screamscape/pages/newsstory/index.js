// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/TheLatest.module.css';

import ContainerBlock from '../../components/ContainerBlock';
import NewsStoryLandingError from '../../components/NewsStoryLandingError';
// import { connectToDatabase } from '../../util/mongodb';

export default function newsstory( { news } ) {
  
  return (
    <div>
      <ContainerBlock>
        <NewsStoryLandingError />
      </ContainerBlock>
    </div>
  )
};


// SO FAR, THIS IS UN-NEEDED FOR THE ERROR PAGE

// export async function getServerSideProps(context) {
//   const { db } = await connectToDatabase();
//   const data = await db.collection('news').find({}).toArray();
//   const news = JSON.parse(JSON.stringify(data));

//   return {
//     props: { news }
//   }
// };