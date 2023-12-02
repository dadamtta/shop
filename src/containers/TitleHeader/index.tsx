import { Button } from "@mui/material"
import styles from './styles.module.css'
import Link from "next/link"

function TitleHeader() {
    return (
        <header className={styles.header}>
            <div className={styles["header-inner"]}>
                <div className={styles["header-i-title"]}>
                    <Link href="/">
                        <h1>다담따</h1>
                    </Link>                    
                </div>
                <div className={styles["header-i-nav"]}>
                    {/* MENUS */}
                </div>
                <div className={styles["header-i-action"]}>
                    <Link href={"/signin"}>
                        <Button>로그인</Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default TitleHeader