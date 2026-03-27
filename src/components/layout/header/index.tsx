import { Button } from "../../ui/button";
import { Navigation } from "./navigation";
import styles from './index.module.scss';
import { Location, useLocation } from "../../../app/providers/locationProvider";
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const { location } = useLocation();
    const navigate = useNavigate();
    
    return (
        <header className={styles.header}>
            <button className={styles.logo}
                    onClick={() => navigate('/')}
            >
                STORK
            </button>
            <nav className={styles.navigation}>
                <Navigation
                    content="Missions"
                    selected={location === Location.Missions}
                    onClick={() => navigate('/missions')}
                />
                <Navigation
                    content="About us"
                    selected={location === Location.About}
                    onClick={() => navigate('/about-us')}
                />
                <Navigation
                    content="Contact us"
                    selected={location === Location.Contact}
                    onClick={() => navigate('/contact-us')}
                />
                <Button
                    content="Join us"
                    selected={location === Location.Membership}
                    color="black"
                    size={1}
                    onClick={() => navigate('/membership')}
                />
            </nav>
        </header>
    );
}