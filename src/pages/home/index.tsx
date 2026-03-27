import { Location, useLocation } from "../../app/providers/locationProvider";
import { HomeHeader } from "./header";
import { HomeWhom } from "./whom";
import { HomeWhy } from "./why";

export const Home = () => {
    const { setLocation } = useLocation();
    setLocation(Location.Home);
    
    return <div>
        <HomeHeader />
        <HomeWhy />
        <HomeWhom />
    </div>;
}
