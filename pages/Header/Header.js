import styles from "../../styles/Header.module.css"

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.title}>Orders</div>
            <button className={styles.buttonstyle} type="button">
                <i>+</i>
                <span>Add Order</span>
            </button>
        </div>
    )
}

export default Header