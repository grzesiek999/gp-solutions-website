import styles from './ServicesPageBanner.module.scss';

const ServicesPageBanner = () => {
    return (
        <div className={styles.servicesPageBannerDiv}>
            <div className={styles.servicesPageBannerContent}>
                <span>Nasze usługi</span>
                <p>Kompleksowa obsługa IT dopasowana do potrzeb Twojej firmy.</p>
            </div>
        </div>
    )
}

export default ServicesPageBanner