import styles from './ServicesList.module.scss'

const ServicesList = () => {
    return (
        <ul className={styles.servicesList}>
            <li>
                <img src='/src/assets/icons/it-care-icon.png' alt='it-care-icon error' />
                <div>
                    <span></span>
                    <p></p>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </li>
            <li>
                <img src='/src/assets/icons/cybersecurity-icon.png' alt='cybersecurity icon error' />
                <div>
                    <span></span>
                    <p></p>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </li>
            <li>
                <img src='/src/assets/icons/backup-icon.png' alt='backup icon error' />
                <div>
                    <span></span>
                    <p></p>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </li>
            <li>
                <img src='/src/assets/icons/education-icon.png' alt='education icon error' />
                <div>
                    <span></span>
                    <p></p>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </li>
        </ul>
    )
}

export default ServicesList;