import { Location, useLocation } from "../../app/providers/locationProvider";
import styles from "./index.module.scss";

import { useState } from "react";
import { Input } from "./input";
import { Button } from "../../components/ui/button";

const contactAddress = "dummy@example.com";

export const Contact = () => {
    const { setLocation } = useLocation();
    setLocation(Location.Contact);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [institution, setInstitution] = useState("");
    const [message, setMessage] = useState("");

    const subject = `Contact from ${firstName} ${lastName}`;
    const body =
`Hello,

${firstName} ${lastName} from ${institution ? `${institution} ` : ""}contacted you via STORK's website form.

Details:
• First name: ${firstName}
• Last name: ${lastName}
• Institution/Company: ${institution || "Not specified"}

Message:
${message}

Feel free to reply directly to this email.
Best regards,
STORK team
`;


    const mailtoHref = `mailto:${contactAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    return (
        <div className={styles.contact}>
            <div className={styles.title}>
                <h1>Contact Us</h1>
                <p>Let's get in touch</p>
            </div>
            <div className={styles.form}>
                <div className={styles.formInput}>
                    <Input label="First name" value={firstName} onChange={setFirstName} />
                    <Input label="Last name" value={lastName} onChange={setLastName} />
                    <Input label="Institution" value={institution} onChange={setInstitution} />
                    <Input label="Message" value={message} onChange={setMessage} height="paragraph"/>
                </div>
                <a href={mailtoHref}>
                    <Button content="Contact us" color="white" />
                </a>
            </div>
        </div>
    );
}