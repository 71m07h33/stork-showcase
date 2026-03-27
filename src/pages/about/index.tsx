import { Location, useLocation } from "../../app/providers/locationProvider";
import { AboutHeader } from "./header";
import { AboutTeam } from "./team";

export const About = () => {
    const { setLocation } = useLocation();
    setLocation(Location.About);
    
    return (
        <div>
            <AboutHeader />
            <AboutTeam />
        </div>
    );
}
