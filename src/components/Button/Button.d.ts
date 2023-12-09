export enum ButtonType {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    TERTIARY = 'tertiary',
}

export interface ButtonProps {
    type?: ButtonType;
    children: React.ReactNode;
}