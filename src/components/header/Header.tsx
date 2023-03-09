'use client';
import { header } from '@/constants/header';
import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__left}>
        <div className={styles.header__left__logo}>
          <a href="#">
            <Image src="/img/logo.png" alt="logo img" layout="fill" objectFit="contain" />
          </a>
          <span className="text">Beta</span>
        </div>
      </div>

      <div className={styles.header__solid}></div>

      <div className={styles.header__right}>
        <div className={styles.header__right__side_bar}>
          <div className={styles.side_bar_list}>
            {header?.map((iHead, ide) => (
              <Link href={iHead.path} key={iHead.name + ide}>{iHead.name}</Link>
            ))}
      
          </div>
          <div className={styles.side_bar_btn}>
            <div className={styles.btn_container}></div>
            <span>Login</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
