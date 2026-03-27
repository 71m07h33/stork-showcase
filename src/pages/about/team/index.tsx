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

export const AboutTeam = () => {
    const tilesRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (!tilesRef.current) return;
        const scrollAmount = tilesRef.current.clientWidth * 0.6;
        tilesRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
        });
    };

    return (
        <div className={styles.team}>
            <h1 className={styles.teamTitle}>Our team</h1>
            <div className={styles.content}>
                <div className={styles.tiles} ref={tilesRef}>
                    {Object.values(Members).map((member) => (
                        <div className={styles.tileWrapper} key={member}>
                            <Tile {...membersData[member]} />
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