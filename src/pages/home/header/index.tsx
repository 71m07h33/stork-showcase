import { Button } from "../../../components/ui/button";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

export const HomeHeader = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.header}>
            <p className={styles.title}>Society for<br/>Transparency,<br/>Openness, and<br/>Replication in<br/>Kinesiology</p>
            <div className={styles.content}>
                <p>Providing a platform to come together to improve methods and practices within our disciplines</p>
                <Button
                    content="Find out more"
                    color="white"
                    onClick={() => navigate('/missions')}
                />
            </div>
        </div>
    );
}