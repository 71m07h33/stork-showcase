import { useState } from 'react';
import style from './index.module.scss';
import { Button } from '../../../components/ui/button';
import { useNavigate } from 'react-router';

enum Items {
    Sportrxiv = 'Sportrxiv',
    CommunicationInKinesiology = 'CommunicationInKinesiology',
    KinesiologyBooks = 'KinesiologyBooks',
    Webinars = 'Webinars',
    Workshops = 'Workshops',
}

const itemsData: Record<Items, { title: string; bootstrap: string; description: string }> = {
    [Items.Sportrxiv]: {
        title: 'Sportrxiv',
        bootstrap: 'Sportrxiv, The first community-led and open access subject repository dedicated to sport, exercise, performance, and health research',
        description: 'Sportrxiv is a platform that allows researchers to share their work and collaborate with others in the field of movement sciences. It is a place where researchers can share their work and collaborate with others in the field of movement sciences.',
    },
    [Items.CommunicationInKinesiology]: {
        title: 'Communication in Kinesiology',
        bootstrap: 'Communication in Kinesiology, Pioneering Open Science in Movement Sciences',
        description: 'The movement sciences community has been at the forefront of open science initiatives, with many researchers embracing the principles of transparency, accessibility, and collaboration. By sharing their work openly, researchers in the movement sciences are helping to advance the field and improve the lives of people around the world.',
    },
    [Items.KinesiologyBooks]: {
        title: 'Kinesiology Books',
        bootstrap: 'Kinesiology Books, Enhancing Research Transparency and Reproducibility',
        description: 'Kinesiology Books offer comprehensive resources that support learning, research, and teaching in the movement sciences. These open-access books promote transparency and reproducibility by making high-quality information freely available to students, educators, and researchers worldwide.',
    },
    [Items.Webinars]: {
        title: 'Webinars',
        bootstrap: 'Webinars, Sharing Knowledge and Building Community in Movement Sciences',
        description: 'Webinars are a powerful tool for sharing knowledge and building community in the movement sciences. They allow researchers to connect with others in the field, share their work, and learn from each other in real-time.',
    },
    [Items.Workshops]: {
        title: 'Workshops',
        bootstrap: 'Workshops, Hands-on Learning and Skill Development in Movement Sciences',
        description: 'Workshops provide an interactive environment for researchers and practitioners to learn new skills, share techniques, and collaborate on projects in the field of movement sciences.',
    },
};

type HomeWhyProps = {
    isMobile: boolean;
}

export const HomeWhy = (props : HomeWhyProps) => {
    const navigate = useNavigate();
    const [item, setItem] = useState<Items>(Items.Sportrxiv);
    
    return (
        <div className={style.why}>
            <h1 className={style.title}>Why ?</h1>

            {props.isMobile ?
                (
                    <div className={style.mobileContent}>
                        <div className={style.mobileMenu}>
                            <div className={style.mobileMenuItems}>
                                {Object.entries(itemsData).map(([key, value]) => (
                                    <button
                                        key={key}
                                        className={`${style.mobileMenuItem} ${item === key ? style.active : ''}`}
                                        onClick={() => setItem(key as Items)}
                                    >
                                        {value.title}
                                        {item === key ? <span className={`${style.mobileRectangle} ${style.selected}`} /> : <span className={`${style.mobileRectangle} ${style.unselected}`} />}
                                    </button>
                                ))}
                            </div>
                            <span className={style.horizontalSeparator} />
                        </div>
                        <div className={style.mobileExplanation}>
                            <h2 className={style.mobileExplanationTitle}>{itemsData[item].bootstrap}</h2>
                            <p className={style.mobileExplanationDescription}>{itemsData[item].description}</p>
                            <Button color="black" onClick={() => navigate('/missions')}>
                                {`Learn more about ${itemsData[item].title}`}
                            </Button>
                        </div>
                    </div>
                )
            :
                (
                    <div className={style.content}>
                        <div className={style.menu}>
                            <div className={style.menuItems}>
                                {Object.entries(itemsData).map(([key, value]) => (
                                    <button
                                        key={key}
                                        className={`${style.menuItem} ${item === key ? style.active : ''}`}
                                        onClick={() => setItem(key as Items)}
                                    >
                                        {value.title}
                                        {item === key ? <span className={`${style.rectangle} ${style.selected}`} /> : <span className={`${style.rectangle} ${style.unselected}`} />}
                                    </button>
                                ))}
                            </div>
                            <span className={style.verticalSeparator} />
                        </div>
                        <div className={style.explanation}>
                            <h2 className={style.explanationTitle}>{itemsData[item].bootstrap}</h2>
                            <p className={style.explanationDescription}>{itemsData[item].description}</p>
                                <Button color="black" onClick={() => navigate('/missions')}>
                                    {`Learn more about ${itemsData[item].title}`}
                                </Button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
