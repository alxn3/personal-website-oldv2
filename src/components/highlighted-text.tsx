import { ReactNode } from "react";

type Props = {
    children?: ReactNode;
}

const HighlightedText = ({children}: Props) => {
    return <span className="text-primary-300 dark:text-primary-300">{children}</span>
}

export default HighlightedText;