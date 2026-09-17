import {Helmet} from "react-helmet-async";
import Banner from "../../components/Banner/Banner.tsx";
import {useNavigate} from "react-router-dom";
import Button from "../../components/Button/Button.tsx";
import styles from "../HomePage/HomePage.module.scss";

const ServicesBackupsPageBannerContent =() => {
    const navigate = useNavigate();

    const contactButtonIconPath = '/icons/white-phone-icon.png';

    return (
        <>
            <h1>Ochrona danych</h1>
            <h6>Regularne kopie zapasowe i skuteczne mechanizmy odzyskiwania danych.</h6>
            <Button
                className={styles.homePageBannerContactButton}
                type={"button"}
                onClick={() => navigate('/contact')}
            >
                <div className={styles.homePageBannerButtonDiv}>
                    <img
                        src={contactButtonIconPath}
                        alt='white phone icon error'
                        className={styles.homePageBannerButtonImg}
                    />
                    <span className={styles.homePageBannerButtonsSpan}>Skontaktuj się</span>
                </div>
            </Button>
        </>
    )
}

const ServicesBackupsPage = () => {
    return (
        <>
            <Helmet>
                <title>Ochrona danych GP IT Solutions</title>
                <meta
                    name="description"
                    content="Ochrona danych dla firm. Tworzymy kopie zapasowe, zabezpieczamy najważniejsze informacje i wdrażamy skuteczne mechanizmy odzyskiwania danych."
                />
                <link
                    rel="canonical"
                    href="https://gpitsolutions.pl/services/backups"
                />
            </Helmet>
            <Banner
                backgroundImgPath={`url("/images/data_banner.webp")`}
                content={<ServicesBackupsPageBannerContent />}
            />
        </>
    )
}

export default ServicesBackupsPage