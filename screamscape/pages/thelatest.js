import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/TheLatest.module.css';

import ContainerBlock from '../components/ContainerBlock';
import TheLatest from '../components/TheLatest';

export default function thelatest() {

  return (
    <div>
      <ContainerBlock>
        <TheLatest />
      </ContainerBlock>
    </div>
  )
};
