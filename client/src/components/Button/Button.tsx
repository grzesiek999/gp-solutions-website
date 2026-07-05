import type {ReactNode} from "react";

type ButtonProps = {
    className: string;
    children: ReactNode;
}

const Button = ({className, children} : ButtonProps) => {
    return (
        <button
            className={className}
            onClick={() => {}}
            type="button"
        >
            {children}
        </button>
    )
}

export default Button