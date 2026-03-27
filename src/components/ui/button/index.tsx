import { CSSProperties } from 'react';
import styles from './index.module.scss';

/**
 * Styled button supporting color, selection, and size.
 *
 * @param content Text displayed inside the button
 * @param selected Enables the "selected" style (inverted background)
 * @param color Main color of the button ('black' or 'white')
 * @param size Text size (in rem)
 * @param onClick Function called on click
 *
 * @example
 * <Button
 *   content="Click me"
 *   selected={true}
 *   color="white"
 *   size={1.5}
 *   onClick={() => alert('Button clicked!')}
 * />
 */
type ButtonProps = {
    content: string;
    selected?: boolean;
    color: 'black' | 'white';
    size?: number;
    onClick?: () => void; // Optional click handler, in case the button is used for navigation (e.g., wrapped in an <a> tag)
}

/**
 * Reusable button component.
 */
export const Button = (props: ButtonProps) => {
    const className = `${styles.button} ${styles[props.color]} ${props.selected ? styles.selected : ''}`;

    return (
        <button
            className={className}
            style={{ '--button-size': `${props.size ?? 1}rem` } as CSSProperties}
            onClick={props.onClick}
        >
            {props.content}
        </button>
    );
}