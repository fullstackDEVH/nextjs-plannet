import Image from 'next/image';
import Link from 'next/link';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__top}>
          <div className={styles.footer__top_row}>
            <div className={`${styles.footer__top_col} ${styles.col_3}`}>
              <a href="#">
                <Image
                  src="/img/logo.png"
                  alt="logo img"
                  width={250}
                  height={60}
                  objectFit="contain"
                />
              </a>
            </div>
            <div className={`${styles.footer__top_col} ${styles.col_9}`}>
              <Link href="/" >
                White paper
              </Link>
              <Link href="/" >
                For Business
              </Link>
              <Link href="/" >
                Pitch deck
              </Link>
              <Link href="/" >
                Follow Us
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.footer__bottom}>
            <span>Copyright © 2022 Open Lab. All rights reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
