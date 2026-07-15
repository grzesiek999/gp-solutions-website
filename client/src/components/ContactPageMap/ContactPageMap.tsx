import styles from './ContactPageMap.module.scss';

const ContactPageMap = () => {
    return (
        <div className={styles.contactPageMapMainDiv}>
            <div className={styles.contactPageInfoDiv}>
                <span>Gdzie działamy?</span>
                <p>Obsługujemy firmy z całej Polski.</p>
                <p>Zgłoszenia realizujemy stacjonarnie lub zdalnie — szybko i niezależnie od lokalizacji.</p>
            </div>
            <div className={styles.contactPageMapDiv}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.7634872719614!2d19.768132277463938!3d50.38960737158069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47170375b15addf3%3A0xf5f3c7acf33b474a!2sD%C4%99bowa%2010%2C%2032-340%20Wolbrom!5e0!3m2!1spl!2spl!4v1783685467614!5m2!1spl!2spl"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokalizacja firmy"
                />
            </div>
        </div>
    )
}

export default ContactPageMap;