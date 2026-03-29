import styles from './index.module.scss';

import ribbonIcon from '../../../assets/icons/ribbon.svg';
import glassesIcon from '../../../assets/icons/glasses.svg';
import bookIcon from '../../../assets/icons/book.svg';
import discussionIcon from '../../../assets/icons/discussion.svg';
import scienceIcon from '../../../assets/icons/science.svg';

enum Items {
    Quality = 'Quality',
    Transparency = 'Transparency',
    Publishing = 'Publishing',
    Connection = 'Connection',
    Metascience = 'Metascience',
}

const itemsData: Record<Items, { icon: string; title: string; description: string }> = {
    [Items.Quality]: {
        icon: ribbonIcon,
        title: "Prioritize Quality Over Quantity",
        description: "We empower researchers to embrace rigorous practices like pre-registration, replication, open data sharing, and preprints. \n\nThrough workshops with universities and funders, we tackle questionable practices in incentivized publishing systems and promote practical solutions."
    },
    [Items.Transparency]: {
        icon: glassesIcon,
        title: "Boost Transparency",
        description: "We champion open sharing of code, data, materials, and working documents.\n\nOur Open Science Framework partnership and SportRxiv repository provide the infrastructure."
    },
    [Items.Publishing]: {
        icon: bookIcon,
        title: "Revolutionize Publishing",
        description: "We support cost-free, community-driven open-access models.\n\nSTORK members enjoy free access to our upcoming journal, funded by membership fees to overcome organizational and financial hurdles."
    },
    [Items.Connection]: {
        icon: discussionIcon,
        title: "Connect Researchers and Practitioners",
        description: "We bridge the gap with forums for dialogue, plus global meetings and workshops to share results inclusively and affordably."
    },
    [Items.Metascience]: {
        icon: scienceIcon,
        title: "Advance Metascience",
        description: "We foster critical evaluations of kinesiology research practices.\n\nTrue self-correction in science demands scrutiny of methods, guiding future progress."
    },
};

type MissionsGoalsProps = {
    isMobile: boolean;
}

export const MissionsGoals = (props : MissionsGoalsProps) => {
    return (
        <div className={`${styles.goals} ${props.isMobile ? styles.mobile : ''}`}>
            <h2>Our core goals</h2>
            <div className={styles.container}>
                <div className={styles.content}>
                    {Object.entries(itemsData).map(([key, { icon, title, description }]) => (
                        <div key={key} className={`${styles.item} ${props.isMobile ? styles.mobile : ''}`}>
                            <div className={styles.itemTitle}>
                                <img src={icon} alt={`${title} icon`} />
                                <h3>{title}</h3>
                            </div>
                            <p>{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>  
    )
}