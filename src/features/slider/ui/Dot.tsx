import styles from './Slider.module.scss';

export const Dot = (props: any) => {
    const { onClick, active } = props;

    const className = `${styles.dot} ${active ? styles.active : styles.inactive}`;
    return <button className={className} onClick={() => onClick()}></button>;
};
