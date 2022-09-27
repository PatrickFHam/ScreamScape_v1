import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import ContainerBlock from '../components/ContainerBlock';
import Hero from '../components/Hero';

export default function Home() {

  return (
    <div>
      <ContainerBlock>
        <Hero />
      </ContainerBlock>
    </div>
  )
}
