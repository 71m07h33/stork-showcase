import styles from "./index.module.scss";

import linkedinIcon from '../../../assets/icons/linkedin.svg';
import twitterIcon from '../../../assets/icons/twitter.svg';

export type TileProps = {
    picture: string;
    name: string;
    academy: string;
    role: string;
    linkedin?: string | null;
    twitter?: string | null;
}

export const Tile = (props: TileProps) => {
    return (
        <div className={styles.tile} style={{ backgroundImage: `url(${props.picture})` }}>
            <div className={styles.pill}>
                <div className={styles.content}>
                    <div className={styles.pillTitle}>
                        <h1>{props.name}</h1>
                        <p>{props.academy}</p>
                    </div>
                    <p>{props.role}</p>
                </div>
                <div className={styles.social}>
                    {props.linkedin &&
                        <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
                            <img src={linkedinIcon} alt="LinkedIn" className={styles.icon} />
                        </a>
                    }
                    {props.twitter &&
                        <a href={props.twitter} target="_blank" rel="noopener noreferrer">
                            <img src={twitterIcon} alt="Twitter" className={styles.icon} />
                        </a>
                    }
                </div>
            </div>
        </div>
    )
}