import { useRef } from 'react';
import styles from './index.module.scss';

import JohnDoePicture from '../../../assets/comittee/mock.jpg';
import { Tile, TileProps } from '../../../components/ui/tile';

enum Members {
    JohnDoe1 = 'JohnDoe1',
    JohnDoe2 = 'JohnDoe2',
    JohnDoe3 = 'JohnDoe3',
    JohnDoe4 = 'JohnDoe4',
    JohnDoe5 = 'JohnDoe5',
}

const membersData: Record<Members, TileProps> = {
    [Members.JohnDoe1]: {
        picture: JohnDoePicture,
        name: 'John Doe',
        academy: 'PH.D',
        role: 'Publication chair',
        linkedin: 'https://www.linkedin.com/',
        twitter: 'https://www.twitter.com/',
    },
    [Members.JohnDoe2]: {
        picture: JohnDoePicture,
        name: 'John Doe',
        academy: 'PH.D',
        role: 'Publication chair',
        linkedin: 'https://www.linkedin.com/',
        twitter: 'https://www.twitter.com/',
    },
    [Members.JohnDoe3]: {
        picture: JohnDoePicture,
        name: 'John Doe',
        academy: 'PH.D',
        role: 'Publication chair',
        linkedin: 'https://www.linkedin.com/',
        twitter: 'https://www.twitter.com/',
    },
    [Members.JohnDoe4]: {
        picture: JohnDoePicture,
        name: 'John Doe',
        academy: 'PH.D',
        role: 'Publication chair',
        linkedin: 'https://www.linkedin.com/',
        twitter: 'https://www.twitter.com/',
    },
    [Members.JohnDoe5]: {
        picture: JohnDoePicture,
        name: 'John Doe',
        academy: 'PH.D',
        role: 'Publication chair',
        linkedin: 'https://www.linkedin.com/',
        twitter: 'https://www.twitter.com/',
    },
};

type AboutTeamProps = {
    isMobile: boolean;
}

export const AboutTeam = ({ isMobile }: AboutTeamProps) => {
    const tileRef = useRef<HTMLDivElement>(null);
    const parentRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (!tileRef.current || !parentRef.current) return;

        const remToPx = (rem: number) => rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
        const scrollAmount = tileRef.current.clientWidth + remToPx(4.6875);

        parentRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
        });
    };

    return (
        <div className={`${styles.team} ${isMobile ? styles.mobile : ''}`}>
            <h1 className={styles.teamTitle}>Our team</h1>
            <div className={styles.content}>
                <div className={`${styles.tiles} ${isMobile ? styles.mobile : ''}`} ref={parentRef}>
                    {Object.values(Members).map((member) => (
                        <div className={styles.tileWrapper} key={member} ref={tileRef}>
                            <Tile {...membersData[member]} isMobile={isMobile} />
                        </div>
                    ))}
                </div>
                <div className={styles.direction}>
                    <button className={styles.button} onClick={() => scroll('left')}>←</button>
                    <button className={styles.button} onClick={() => scroll('right')}>→</button>
                </div>
            </div>
        </div>
    );
}