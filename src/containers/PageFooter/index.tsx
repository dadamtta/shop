import React from 'react'
import styles from './styles.module.css'

function PageFooter() {
    return (
        <footer className={styles['footer']}>
            <div className={styles['footer-head']}>
                <h1>다담따</h1>
                <span>초대장에 온 마음을 다 담다.</span>
            </div>
            <div className={styles['footer-body']}>
                {/* <div className={styles['footer-b-btns']}>
                    <Button></Button>
                    <Button></Button>
                    <Button></Button>
                </div> */}
            </div>
            <div className={styles['footer-foot']}>
                <span>Copyright dadamtta all rights reserved</span>
            </div>
        </footer>
    );
}

export default PageFooter;