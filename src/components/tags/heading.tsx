export interface HeadingProps {
    /**
     * HTML Element to be used
     */
    element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

    /**
     * child element(s)
     */
    children?: string | React.ReactNode;

    /**
     * accompanying classes to be appended
     */
    className?: string;

    /**
     * accompanying styles to be appended
     */
    style?: object;
}

/**
 * Heading component for displaying Headings in pages
 */
export const Heading = ({ children, element = "h3", className = "", style, ...props }: HeadingProps) => {
    const Heading = element;

    return (
        <Heading {...props} className={`${className}`} style={{ ...style }}>
            {children}
        </Heading>
    );
};
