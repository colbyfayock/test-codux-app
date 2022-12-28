import styles from './submit-button.module.scss';

export interface SubmitButtonProps {
    children?: any;
    className?: string;
}

export const SubmitButton = ({ children, className }: SubmitButtonProps) => {
    return <div className={`${styles.root} ${className}`}>
        <button className={styles.button}>{children}</button></div>;
};
