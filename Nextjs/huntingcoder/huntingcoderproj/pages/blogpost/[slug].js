import React from 'react'
import {useRouter} from 'next/router'
import styles from '../../styles/BlogPost.module.css'
const slug = () => {
    const router = useRouter();
    const {slug}= router.query;
  return (
      
    <div className={styles.container}>
      <main className={styles.main}>
      <h1>Title of the page {slug}</h1>
      <p>This is afsaf dfd gsgafldjl jljjeijuoeiwujrj jdsljfldoifujoiajfjlfjldjfla ldjflsjdfljsdfj ljdsfljsladjf; dsfjaalj judufojsdljfla much more easier than I ever thought It would be
      </p>
      </main>
    </div>
  )
}

export default slug