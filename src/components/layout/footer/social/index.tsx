import styles from './index.module.scss';
import linkedinIcon from '../../../../assets/icons/linkedin.svg';
import twitterIcon from '../../../../assets/icons/twitter.svg';
import youtubeIcon from '../../../../assets/icons/youtube.svg';

export const Social = () => {
    return (
        <div className={styles.social}>
            <h1 className={styles.title}>STORK</h1>
            <div className={styles.contentContainer}>
                <div className={styles.content}>
                    <h2 className={styles.subtitle}>A question ?</h2>
                    <a className={styles.button} href="/contact-us">Contact Us</a>
                </div>
                <div className={styles.content}>
                    <h2 className={styles.subtitle}>Follow us</h2>
                    <div className={styles.iconsContainer}>
                        <a href="https://www.google.com" target="_blank" rel="noreferrer">
                            <img src={linkedinIcon} alt="LinkedIn" className={styles.icon} />
                        </a>
                        <a href="https://www.google.com" target="_blank" rel="noreferrer">
                            <img src={twitterIcon} alt="Twitter" className={styles.icon} />
                        </a>
                        <a href="https://www.google.com" target="_blank" rel="noreferrer">
                            <img src={youtubeIcon} alt="YouTube" className={styles.icon} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}