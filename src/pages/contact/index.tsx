import { Location, useLocation } from "../../app/providers/locationProvider";
import styles from "./index.module.scss";

import { useState } from "react";
import { Input } from "./input";
import { Button } from "../../components/ui/button";
import { useIsMobileWidth } from "../../hooks/useIsMobileWidth";


const contactAddress = "dummy@example.com";

export const Contact = () => {
    const { setLocation } = useLocation();
    setLocation(Location.Contact);

    const isMobile = useIsMobileWidth();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [institution, setInstitution] = useState("");
    const [message, setMessage] = useState("");

    const subject = `Contact from ${firstName} ${lastName}`;
    const body =
`Hello,

Someone contacted you via STORK's website form.

Details:
• First name: ${firstName}
• Last name: ${lastName}
• Institution/Company: ${institution || "Not specified"}
• Message:
\`\`\`
${message}
\`\`\`


Feel free to reply directly to this email.
Best regards,
STORK team
`;


    const mailtoHref = `mailto:${contactAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    return (
        <div className={`${styles.contact} ${isMobile ? styles.mobile : ""}`}>
            <div className={`${styles.title} ${isMobile ? styles.mobile : ""}`}>
                <h1>Contact Us</h1>
                <p>Let's get in touch</p>
            </div>
            <div className={`${styles.form} ${isMobile ? styles.mobile : ""}`}>
                <div className={`${styles.formInput} ${isMobile ? styles.mobile : ""}`}>
                    <Input label="First name" value={firstName} onChange={setFirstName} isMobile={isMobile}/>
                    <Input label="Last name" value={lastName} onChange={setLastName} isMobile={isMobile}/>
                    <Input label="Institution" value={institution} onChange={setInstitution} isMobile={isMobile}/>
                    <Input label="Message" value={message} onChange={setMessage} height="paragraph" isMobile={isMobile}/>
                </div>
                <a href={mailtoHref}>
                        <Button color="white">Contact us</Button>
                </a>
            </div>
        </div>
    );
}