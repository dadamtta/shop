import React from 'react';
import styles from './styles.module.css';

function PageFooter() {
    return (
        <footer className={styles['ddt-footer']}>
            <div className={styles['ddt-f-head']}>
                <h1>다담따</h1>
                <span>초대장에 온 마음을 다 담다.</span>
            </div>
            <div className={styles['ddt-f-body']}>
                <div className={styles['ddt-f-body-left']}>
                    <h3>고객센터</h3>
                    <span>평일 18:00 - 21:00</span>
                    <span>주말 09:00 - 12:00</span>
                    <button>톡문의</button>
                </div>
                <div className={styles['ddt-f-body-right']}>
                    <div>
                        <span>책임자 정채환</span>
                    </div>
                </div>
            </div>
            <div className={styles['ddt-f-foot']}>
                <span>Copyright dadamtta all rights reserved</span>
            </div>
        </footer>
    );
}

export default PageFooter;