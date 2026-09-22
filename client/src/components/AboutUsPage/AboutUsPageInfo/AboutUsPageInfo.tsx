import styles from './AboutUsPageInfo.module.scss';


const AboutUsPageInfo = () => {
    return (
        <div className={styles.aboutUsPageInfoDiv}>
            <span>Obsługujemy firmy z całej Polski</span>
            <p>Zgłoszenia realizujemy stacjonarnie lub zdalnie — szybko i niezależnie od lokalizacji.</p>
        </div>
    )
}

export default AboutUsPageInfo