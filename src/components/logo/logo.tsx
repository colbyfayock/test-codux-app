import styles from './logo.module.scss';

export interface LogoProps {
    className?: string;
}

export const Logo = ({ className }: LogoProps) => {
    return <div className={`${styles.root} ${className}`}>Logo</div>;
};
