import CircularProgressBar from './../CircularProgressBar/CircularProgressBar';
import ActiveMembers from './../ActiveMembers/ActiveMembers';
import ProgressBar from './../ProgressBar/ProgressBar';
import Header from './../Header/Header';
import Sidebar from './../Sidebar/Sidebar';

import styles from '../../styles/HomePage.module.css';


function HomePage() {
    return (
        <div className={styles.homepagecontainer}>
            <div><Sidebar /></div>
            <div className={styles.rightsidecontainer}>
                <div><Header /></div>
                <hr className={styles.hrstyle} />

                <div className={styles.removeicon}>&minus;</div>
                <div className={styles.progressbarssection}>
                    <div><CircularProgressBar /></div>
                    <div><ProgressBar /></div>
                </div>
                <div>
                    <ActiveMembers />
                </div>
            </div>
        </div>
    )
}

export default HomePage