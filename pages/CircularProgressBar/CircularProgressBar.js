import styles from "../../styles/CircularProgressBar.module.css";
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const DoughnutChart = () => {
    const Chart1Data = {
        labels: [],
        datasets: [
            {
                data: [80, 20],
                backgroundColor: ['#5F27CD', 'white'],
                borderWidth: 12,
            },
        ],
    };
    const Chart2Data = {
        labels: [],
        datasets: [
            {
                data: [66, 34],
                backgroundColor: ['rgba(22, 192, 152, 0.38)', 'white'],
                borderWidth: 12,

            },
        ],
    };
    const Chart3Data = {
        labels: [],
        datasets: [
            {
                data: [90, 10],
                backgroundColor: ['#FF6B6B', 'white'],
                borderWidth: 12,



            },
        ],
    };
    const Chart4Data = {
        labels: [],
        datasets: [
            {
                data: [30, 70],
                backgroundColor: ['#FFC5C5', 'white'],
                borderWidth: 12,
            },
        ],
    };

    const options = {
        responsive: true,
        legend: {
            display: false,
        },
        tooltips: {
            enabled: false,
        },
        hover: {
            mode: null,
        },
        plugins: {
            datalabels: {
                display: false,
            },
        },
    }

    return (
        <div className={styles.chartcontainersection}>
            <div className={styles.charttitle}>All Customers</div>
            <div className={styles.chartcontainer}>
                <div style={{ width: '90px', height: '90px' }} className={styles.chartsection}>
                    <div className={styles.percentage}>80<span>%</span></div>
                    <Doughnut data={Chart1Data} options={options} />
                    <div className={styles.subtitle}>Current Customers</div>
                </div >
                <div style={{ width: '90px', height: '90px' }} className={styles.chartsection}>
                    <div className={styles.percentageone}>66<span>%</span></div>
                    <Doughnut data={Chart2Data} options={options} />
                    <div className={styles.subtitle}>New Customers</div>
                </div>
                <div style={{ width: '90px', height: '90px' }} className={styles.chartsection}>
                    <div className={styles.percentagetwo}>90<span>%</span></div>
                    <Doughnut data={Chart3Data} options={options} />
                    <div className={styles.subtitle}>Target Customers</div>
                </div>
                <div style={{ width: '90px', height: '90px' }} className={styles.chartsection}>
                    <div className={styles.percentagethree}>30<span>%</span></div>
                    <Doughnut data={Chart4Data} options={options} />
                    <div className={styles.subtitle}>Retarget Customers</div>
                </div>
            </div>
        </div>
    );
};

export default DoughnutChart;
