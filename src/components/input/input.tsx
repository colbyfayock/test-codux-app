import styles from './input.module.scss';

export interface InputProps {
    className?: string;
    name?: string;
    id?: string;
    required?: boolean;
}

export const Input = ({ className, id, name, required }: InputProps) => {
    return <div className={`${styles.root} ${className}`}>
        <input id={id} name={name} className={styles.input} required /></div>;
};
