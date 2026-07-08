import styles from "./ContactPageBanner.module.scss"


const ContactPageBanner = () => {
    return (
        <div className={styles.contactPageBannerDiv}>
            <div className={styles.contactPageBannerContent}>
                <span>Kontakt</span>
                <p>Skontaktuj się z nami - chętnie odpowiemy na Twoje pytania.</p>
            </div>
        </div>
    )
}

export default ContactPageBanner;