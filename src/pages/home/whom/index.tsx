import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import style from './index.module.scss';

import studentIcon from '../../../assets/icons/student.svg';
import kinesiologistIcon from '../../../assets/icons/kinesiologist.svg';
import movementIcon from '../../../assets/icons/movement-scientist.svg';
import sportIcon from '../../../assets/icons/sport-scientist.svg';
import healthIcon from '../../../assets/icons/health-scientist.svg';

enum Whom {
    Students = 'Students',
    Kinesiologists = 'Kinesiologists',
    MovementScientists = 'MovementScientists',
    SportScientists = 'SportScientists',
    HealthScientists = 'HealthScientists',
}

const whomData: Record<Whom, { icon: string; title: string }> = {
    [Whom.Students]: {
        icon: studentIcon,
        title: 'Students',
    },
    [Whom.Kinesiologists]: {
        icon: kinesiologistIcon,
        title: 'Kinesiologists',
    },
    [Whom.MovementScientists]: {
        icon: movementIcon,
        title: 'Movement Scientists',
    },
    [Whom.SportScientists]: {
        icon: sportIcon,
        title: 'Sport and Exercise\nScientists',
    },
    [Whom.HealthScientists]: {
        icon: healthIcon,
        title: 'Physical activity & Health\nScientists',
    },
};


export const HomeWhom = () => {
    const navigate = useNavigate();

    return (
        <div className={style.whom}>
            <h1 className={style.title}>For whom ?</h1>
            <div className={style.content}>

                {Object.entries(whomData).map(([key, { icon, title }]) => (
                        <div key={key} className={style.role}>
                            <img src={icon} alt={`${title} Icon`} className={style.icon} />
                            <p className={style.roleTitle}>{title}</p>
                        </div>
                    ))}
            </div>
            <Button
                content='Join us'
                color='white'
                onClick={() => navigate('/membership') }
            />
        </div>
    );
}