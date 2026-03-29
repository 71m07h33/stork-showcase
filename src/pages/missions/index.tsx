import { Location, useLocation } from "../../app/providers/locationProvider";
import { MissionsGoals } from "./goals";
import { MissionsHeader } from "./header";
import { useIsMobileWidth } from "../../hooks/useIsMobileWidth";

export const Missions = () => {
    const { setLocation } = useLocation();
    setLocation(Location.Missions);

    const isMobile = useIsMobileWidth();
    
    return <div>
        <MissionsHeader />
        <MissionsGoals />
    </div>
}
