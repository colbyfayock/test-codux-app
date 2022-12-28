import styles from './label.module.scss';

export interface LabelProps {
    className?: string;
    children?: any;
}

export const Label = ({ children, className }: LabelProps) => {
    return <div className={`${styles.root} ${className}`}>
        <label className={styles.label}>
            {children}</label></div>;
};
