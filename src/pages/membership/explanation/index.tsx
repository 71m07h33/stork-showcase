import styles from './index.module.scss';

import priceIcon from '../../../assets/icons/price.svg';
import studentIcon from '../../../assets/icons/student.svg';
import bookIcon from '../../../assets/icons/book.svg';

enum Items {
    Pricing = 'Pricing',
    LowIncome = 'LowIncome',
    Senior = 'Senior',
}

const itemsData: Record<Items, { icon: string; title: string; description: string }> = {
    [Items.Pricing]: {
        icon: priceIcon,
        title: "Fair\nPricing Philosophy",
        description: "We prioritize support for students, researchers from low-income countries, and those underemployed.\n\nThese groups get the lowest rates with maximum benefits."
    },
    [Items.LowIncome]: {
        icon: studentIcon,
        title: "Student &\nLow-Income Tiers",
        description: "Student and low-income memberships cost the least, yet offer unlimited submissions to SportRxiv and CIK.\n\nThis flips traditional models to empower emerging talent."
    },
    [Items.Senior]: {
        icon: bookIcon,
        title: "Senior\nContribution",
        description: "We invite senior colleagues in full-time roles to pay slightly more.\n\nYour extra support funds our mission while sharing your expertise with the community."
    },
};

export const MembershipExplanation = () => {
    return (
        <div className={styles.explanation}>
            <h2>We do things differently</h2>
                <div className={styles.content}>
                    {Object.entries(itemsData).map(([key, { icon, title, description }]) => (
                        <div key={key} className={styles.item}>
                            <div className={styles.itemTitle}>
                                <img src={icon} alt={`${title} icon`} />
                                <h3>{title}</h3>
                            </div>
                            <p>{description}</p>
                        </div>
                    ))}
             </div>
        </div>
    )
}