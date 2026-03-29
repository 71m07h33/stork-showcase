import { Button } from '../../../components/ui/button';
import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';

interface MissionsHeaderProps {
    isMobile: boolean;
}


export const MissionsHeader = (props: MissionsHeaderProps) => {
    const navigate = useNavigate();

    return (
        <div className={`${styles.header} ${props.isMobile ? styles.mobile : ''}`}>
            <h1>Our Missions</h1>
            <p>STORK unites kinesiologists, movement scientists, sport and exercise scientists, and physical activity experts to elevate research methods across disciplines.<br /><br />Open to all who share our passion for improvement : educators, coaches, practitioners, researchers, students, athletes, and science enthusiasts.<br /><br />As a non-profit, we focus solely on enhancing research quality.</p>
            <Button color="white" onClick={() => navigate("/membership")}>Join us</Button>
        </div>
    )
}