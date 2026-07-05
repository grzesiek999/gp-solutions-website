import styles from "./HomePageBanner.module.scss"
import Button from "../Button/Button.tsx";

const HomePageBanner = () => {
    return (
        <div className={styles.homePageBannerDiv}>
            <div className={styles.hamePageBannerContent}>
                <span>Kompleksowa opieka IT dla firm</span>
                <p>Bezpieczeństwo. Niezawodność. Wsparcie. Skup się na swoim biznesie - <br/> my zajmiemy się IT.</p>
                <div className={styles.homePageBannerButtonsDiv}>
                    <Button className={styles.homePageBannerContactButton}>
                        <div>
                            <img src={'src/assets/icons/phone-icon.png'} alt='err' />
                            <span>Skontaktuj się</span>
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HomePageBanner