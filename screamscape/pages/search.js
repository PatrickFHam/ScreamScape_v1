import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Search.module.css';

import ContainerBlock from '../components/ContainerBlock';
import Search from '../components/Search';

export default function search() {

  return (
    <div>
      <ContainerBlock>
        <Search />
      </ContainerBlock>
    </div>
  )
};
