import { useState } from 'react';
import { Button } from '../../../components/ui/button';
import styles from './index.module.scss';

const stripeLink = 'https://www.google.com'; // TODO: replace with real link

enum Items {
    Students = 'Students',
    Emerging = 'Emerging Professionals',
    Senior = 'Senior Professionals',
}

const itemsData: Record<Items, { annualPriceInCAD: number }> = {
    [Items.Students]: {
        annualPriceInCAD: 18,
    },
    [Items.Emerging]: {
        annualPriceInCAD: 30,
    },
    [Items.Senior]: {
        annualPriceInCAD: 48,
    },
};

type MembershipPricesProps = {
    isMobile: boolean;
};

export const MembershipPrices = (props: MembershipPricesProps) => {
    const [item, setItem] = useState<Items>(Items.Students);
    
    return (
        <div className={styles.prices}>
            <h1>Membership</h1>
            <div className={`${styles.content} ${props.isMobile ? styles.mobile : ''}`}>
                <div>
                    <p>Grant you access to</p>
                    <ul>
                        <li>Members area</li>
                        <li>Webinars</li>
                        <li>Workshops</li>
                    </ul>
                    <br />
                    <br />
                    <p>Submit your work to</p>
                    <ul>
                        <li>SportRxiv</li>
                        <li>Communication in Kinesiology</li>
                        <li>Kinesiology Books</li>
                    </ul>
                </div>
                <div className={styles.pricing}>
                    <div className={styles.menu}>
                        <div className={`${styles.menuItems} ${props.isMobile ? styles.mobile : ''}`}>
                            {Object.entries(itemsData).map(([key, value]) => (
                                <button
                                    key={key}
                                    className={`${styles.menuItem} ${item === key ? styles.active : ''}`}
                                    onClick={() => setItem(key as Items)}
                                >
                                    {key}
                                    {item === key ? <span className={`${styles.rectangle} ${styles.selected}`} /> : <span className={`${styles.rectangle} ${styles.unselected}`} />}
                                </button>
                            ))}
                        </div>
                        <span className={styles.horizontalSeparator} />
                    </div>
                    <div className={styles.explanation}>
                        <h2 className={styles.explanationTitle}><b>${itemsData[item].annualPriceInCAD} CAD</b> per year</h2>
                        <p className={styles.explanationDescription}>Membership fee for {item}</p>
                    </div>
                    <a href={stripeLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                            <Button color="black">Join us</Button>
                    </a>
                </div>
             </div>
        </div>
    )
}