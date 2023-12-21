import styles from './index.module.scss'

export default function (props: COMFooter.Props) {

    return (
        <div className={styles.footer}>
            {
                props.copyright &&
                <div className={styles.copyright}>&copy; {props.copyright}</div>
            }
        </div>
    )
}