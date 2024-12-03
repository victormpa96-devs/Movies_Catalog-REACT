import { CgSpinnerTwo } from 'react-icons/cg';
import styles from "./loader.module.css";

export function Loader() {
    return (
        <div className={styles.loader}>
            <CgSpinnerTwo className={styles.spinning} size={60}/>
        </div>
    )
}
