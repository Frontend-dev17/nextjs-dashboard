import styles from '../../styles/ActiveMembers.module.css';

import CUSTOMER_DATA from '../data/data';
import { useState } from "react";

const ActiveMembers = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const data = CUSTOMER_DATA;
    const tableHeaders = Object.keys(data[0]);

    if (data.length === 0) {
        return <div>No data available.</div>;
    }

    //pagination codes
    const itemsPerPage = 8;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);


    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className={styles.activememberscontianer}>
            <div className={styles.firstrowsection}>
                <div className={styles.searchsection}>
                    <span>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.4669 19.564C16.0221 19.564 19.7148 15.9046 19.7148 11.3905C19.7148 6.87634 16.0221 3.21691 11.4669 3.21691C6.91169 3.21691 3.21896 6.87634 3.21896 11.3905C3.21896 15.9046 6.91169 19.564 11.4669 19.564Z" stroke="#7E7E7E" strokeWidth="2.04339" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21.7768 21.6074L17.292 17.1631" stroke="#7E7E7E" strokeWidth="2.04339" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                    <input type="search" placeholder="Search" className={styles.inputfield} />
                </div>
                <div className={styles.dropdownsection}>
                    <span className={styles.title}>Sort by : </span>
                    <select className={styles.dropdownselect} defaultValue="Newest">
                        <option className={styles.options}>Newest</option>
                        <option className={styles.options}>Oldest</option>
                        <option className={styles.options}>Past 24hours</option>
                    </select>
                </div>

            </div>
            <div className={styles.titlename}>Active Members</div>
            <div className={styles.tabeldatasection}>
                <table className={styles.customtable}>
                    <thead>
                        <tr>
                            {tableHeaders.map((header) => (
                                <th key={header}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((row, index) => (
                            <tr key={index}>
                                {tableHeaders.map((header) => (
                                    <td key={header} className={header === 'status' ? row[header].toLowerCase() : ''}>
                                        {header === 'status' ? (
                                            <span className={row[header].toLowerCase() === 'active' ? styles.active : styles.inactive}>
                                                {row[header]}
                                            </span>
                                        ) : (
                                            row[header]
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className={styles.downpartsection}>

                <div className={styles.entrycount}>
                    Showing data 1 to {currentItems.length} of {data.length} entries
                </div>
                <div className={styles.pagination}>
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={styles.actions}
                    >
                        &lt;
                    </button>
                    {pageNumbers.map((pageNumber) => (
                        <button
                            key={pageNumber}
                            onClick={() => handlePageChange(pageNumber)}
                            className={currentPage === pageNumber ? styles.activenum : styles.inactivenum}
                        >
                            {pageNumber}
                        </button>
                    ))}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={styles.actions}
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ActiveMembers