import styles from './button.module.scss';

export interface ButtonProps {
    className?: string;
}

export const Button = ({ className }: ButtonProps) => {
    return <div className={`${styles.root} ${className}`}>Button</div>;
};
