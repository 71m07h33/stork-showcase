import { Location, useLocation } from "../../app/providers/locationProvider";
import { MissionsGoals } from "./goals";
import { MissionsHeader } from "./header";

export const Missions = () => {
    const { setLocation } = useLocation();
    setLocation(Location.Missions);
    
    return <div>
        <MissionsHeader />
        <MissionsGoals />
    </div>
}
