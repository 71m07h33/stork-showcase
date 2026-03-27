import { Links } from "./links";
import { Social } from "./social";
import styles from "./index.module.scss";

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <Social />
            <Links />
        </div>
    )
}