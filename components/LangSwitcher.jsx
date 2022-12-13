import exp from "constants";
import Link from "next/link";
import styles from "../styles/LangSwitcher.module.scss"

function LangSwitcher() {
    return (
        <>
            <div className={styles.block}>
                <div className={styles.body}>
                    <Link href="/" locale="en" legacyBehavior>
                        <a className={styles.locale}>En</a>
                    </Link>
                    <Link href="/" locale="ru" legacyBehavior>
                        <a className={styles.locale} href="/" locale="ru">Ru</a>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default LangSwitcher