import { Location, useLocation } from "../../app/providers/locationProvider";
import { MembershipExplanation } from "./explanation";
import { MembershipHeader } from "./header";
import { MembershipPrices } from "./prices";

export const Membership = () => {
    const { setLocation } = useLocation();
    setLocation(Location.Membership);
    
    return (
        <div>
            <MembershipHeader />
            <MembershipPrices />
            <MembershipExplanation />
        </div>
    );
}
