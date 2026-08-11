import type {ReactNode} from "react";

type ButtonProps = {
    className?: string;
    children: ReactNode;
    onClick?: () => void;
    type: 'button' | 'submit' | 'reset';
    name?: string;
}

const Button = ({className, onClick, type, name, children} : ButtonProps) => {
    return (
        <button
            className={ className }
            onClick={ onClick }
            type={ type }
            name={ name }
        >
            { children }
        </button>
    )
}

export default Button