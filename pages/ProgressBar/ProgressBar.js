
import styles from '../../styles/ProgressBar.module.css';

const ProgressBar = () => {


    return (
        <div className={styles.progressbarscontainer}>
            <div className={styles.title}>Stats Overview</div>
            <div className={styles.barsection}>
                <div className={styles.status}>Active</div>
                <div className={styles.progressbarcontainer}>
                    <div className={styles.progressbar}>
                        <div className={styles.progress} style={{ width: "63%" }}>
                        </div>
                    </div>
                </div>
                <div className={styles.percentage}>63%</div>
            </div>

            <div className='bar-section-1'>
                <div className={styles.status}>Inactive</div>
                <div className={styles.progressbarcontainer}>
                    <div className={styles.progressbar}>
                        <div className={styles.one} style={{ width: "80%" }}>
                        </div>
                    </div>
                </div>
                <div className={styles.percentage}>80%</div>
            </div>
        </div>
    );
};

export default ProgressBar;
