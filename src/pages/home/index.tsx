import { Location, useLocation } from "../../app/providers/locationProvider";
import { useIsMobileWidth } from "../../hooks/useIsMobileWidth";
import { HomeHeader } from "./header";
import { HomeWhom } from "./whom";
import { HomeWhy } from "./why";

export const Home = () => {
    const { setLocation } = useLocation();
    setLocation(Location.Home);

    const isMobile = useIsMobileWidth();

    return <div>
        <HomeHeader isMobile={isMobile} />
        <HomeWhy isMobile={isMobile} />
        <HomeWhom />
    </div>;
}
