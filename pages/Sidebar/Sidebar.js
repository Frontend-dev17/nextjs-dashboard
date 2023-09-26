import { useState } from 'react'

import styles from '../../styles/SideBar.module.css';


const Sidebar = () => {

    const [selectedOption, setSelectedOption] = useState('workspace');

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className={styles.sidebar}>
            <div>
                <img src='/Images/logo.png' alt='logo' className={styles.logo} />
            </div>
            <div
                className={`${styles.sidebaroption} ${selectedOption === 'reports' ? styles.active : ''}`}
                onClick={() => handleOptionClick('reports')}
            >
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="12" viewBox="0 0 22 12" fill="none">
                        <path d="M15.6656 0.85L17.2058 2.29L11.9863 7.17L8.46745 3.88C8.05032 3.49 7.37649 3.49 6.95936 3.88L0.541974 9.89C0.124843 10.28 0.124843 10.91 0.541974 11.3C0.959104 11.69 1.63293 11.69 2.05006 11.3L7.70806 6L11.2269 9.29C11.6441 9.68 12.3179 9.68 12.735 9.29L18.7139 3.71L20.2541 5.15C20.5856 5.46 21.1632 5.24 21.1632 4.8V0.5C21.1739 0.22 20.9386 0 20.6391 0H16.0507C15.5694 0 15.3341 0.54 15.6656 0.85Z" fill={`${selectedOption === 'reports' ? '#1B59F8' : 'black'}`} />
                    </svg>
                </span>
                <span>Reports</span>
            </div>
            <div
                className={`${styles.sidebaroption} ${selectedOption === 'workspace' ? styles.active : ''}`}
                onClick={() => handleOptionClick('workspace')}
            >
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="13" viewBox="0 0 17 13" fill="none">
                        <path d="M1 6H4C4.55 6 5 5.55 5 5V1C5 0.45 4.55 0 4 0H1C0.45 0 0 0.45 0 1V5C0 5.55 0.45 6 1 6ZM1 13H4C4.55 13 5 12.55 5 12V8C5 7.45 4.55 7 4 7H1C0.45 7 0 7.45 0 8V12C0 12.55 0.45 13 1 13ZM7 13H10C10.55 13 11 12.55 11 12V8C11 7.45 10.55 7 10 7H7C6.45 7 6 7.45 6 8V12C6 12.55 6.45 13 7 13ZM13 13H16C16.55 13 17 12.55 17 12V8C17 7.45 16.55 7 16 7H13C12.45 7 12 7.45 12 8V12C12 12.55 12.45 13 13 13ZM7 6H10C10.55 6 11 5.55 11 5V1C11 0.45 10.55 0 10 0H7C6.45 0 6 0.45 6 1V5C6 5.55 6.45 6 7 6ZM12 1V5C12 5.55 12.45 6 13 6H16C16.55 6 17 5.55 17 5V1C17 0.45 16.55 0 16 0H13C12.45 0 12 0.45 12 1Z" fill={`${selectedOption === 'workspace' ? '#1B59F8' : 'black'}`} />
                    </svg>
                </span>
                <span>Workspace</span>
            </div>
            <div
                className={`${styles.sidebaroption} ${selectedOption === 'settings' ? styles.active : ''}`}
                onClick={() => handleOptionClick('settings')}
            >
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="24" viewBox="0 0 27 24" fill="none">
                        <path d="M21.5109 12.98C21.5544 12.66 21.587 12.34 21.587 12C21.587 11.66 21.5544 11.34 21.5109 11.02L23.8044 9.37C24.0109 9.22 24.0653 8.95 23.9349 8.73L21.7609 5.27C21.6305 5.05 21.337 4.97 21.0979 5.05L18.3914 6.05C17.8262 5.65 17.2175 5.32 16.5544 5.07L16.1414 2.42C16.1088 2.18 15.8805 2 15.6088 2H11.2609C10.9892 2 10.7609 2.18 10.7283 2.42L10.3153 5.07C9.65225 5.32 9.04355 5.66 8.47834 6.05L5.77181 5.05C5.52181 4.96 5.23921 5.05 5.10877 5.27L2.93486 8.73C2.79355 8.95 2.85877 9.22 3.06529 9.37L5.35877 11.02C5.31529 11.34 5.28268 11.67 5.28268 12C5.28268 12.33 5.31529 12.66 5.35877 12.98L3.06529 14.63C2.85877 14.78 2.80442 15.05 2.93486 15.27L5.10877 18.73C5.23921 18.95 5.53268 19.03 5.77181 18.95L8.47834 17.95C9.04355 18.35 9.65225 18.68 10.3153 18.93L10.7283 21.58C10.7609 21.82 10.9892 22 11.2609 22H15.6088C15.8805 22 16.1088 21.82 16.1414 21.58L16.5544 18.93C17.2175 18.68 17.8262 18.34 18.3914 17.95L21.0979 18.95C21.3479 19.04 21.6305 18.95 21.7609 18.73L23.9349 15.27C24.0653 15.05 24.0109 14.78 23.8044 14.63L21.5109 12.98ZM13.4349 15.5C11.337 15.5 9.63051 13.93 9.63051 12C9.63051 10.07 11.337 8.5 13.4349 8.5C15.5327 8.5 17.2392 10.07 17.2392 12C17.2392 13.93 15.5327 15.5 13.4349 15.5Z" fill={`${selectedOption === 'settings' ? '#1B59F8' : 'black'}`} />
                    </svg>

                </span>
                <span>Settings</span>
            </div>
        </div>
    )
}

export default Sidebar