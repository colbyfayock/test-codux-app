import styles from './form-row.module.scss';

export interface FormRowProps {
    children?: any;
    className?: string;
}

export const FormRow = ({ children, className }: FormRowProps) => {
    return <div className={`${styles.root} ${className}`}>{ children }</div>;
};
