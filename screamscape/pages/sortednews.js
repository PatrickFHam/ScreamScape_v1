import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/TheLatest.module.css';

import ContainerBlock from '../components/ContainerBlock';
import SortedNews from '../components/SortedNews';

export default function sortednews() {

  return (
    <div>
      <ContainerBlock>
        <SortedNews />
      </ContainerBlock>
    </div>
  )
};
