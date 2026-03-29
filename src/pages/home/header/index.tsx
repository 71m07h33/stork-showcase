import { Button } from "../../../components/ui/button";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

type HomeHeaderProps = {
    isMobile: boolean;
}

export const HomeHeader = (props: HomeHeaderProps) => {
    const navigate = useNavigate();

    return (
        <div className={`${styles.header} ${props.isMobile ? styles.mobile : ''}`} >
            <p className={`${styles.title} ${props.isMobile ? styles.mobile : ''}`}>Society for<br/>Transparency,<br/>Openness, and<br/>Replication in<br/>Kinesiology</p>
            <div className={`${styles.content} ${props.isMobile ? styles.mobile : ''}`}>
                <p>Providing a platform to come together to improve methods and practices within our disciplines</p>
                <Button
                    color="white"
                    onClick={() => navigate('/missions')}
                >
                    Find out more
                </Button>
            </div>
        </div>
    );
}