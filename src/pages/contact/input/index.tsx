import styles from "./index.module.scss";

type inputProps = {
    label: string;
    value?: string;
    height?: "line" | "paragraph";
    onChange: (value: string) => void;
}

export const Input = (props: inputProps) => {
    const value = props.value || "";
    return (
        <div className={styles.input}>
            <label>{props.label}</label>
            {props.height === "paragraph" ? (
                <textarea
                    placeholder={`Enter your ${props.label.toLowerCase()}`}
                    value={value}
                    onChange={(e) => {
                        props.onChange(e.target.value);
                    }}
                    rows={3}
                />
            ) : (
                <input
                    type="text"
                    placeholder={`Enter your ${props.label.toLowerCase()}`}
                    value={value}
                    onChange={(e) => {
                        props.onChange(e.target.value);
                    }}
                />
            )}
        </div>
    );
}