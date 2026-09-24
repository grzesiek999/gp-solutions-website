import {Helmet} from "react-helmet-async";
import Banner from "../../components/Banner/Banner.tsx";
import styles from "../HomePage/HomePage.module.scss";
import Button from "../../components/Button/Button.tsx";
import {useNavigate} from "react-router-dom";
import ServicesWebsitesContent from "../../components/ServicesPage/ServicesKindContents/ServicesWebsitesContent.tsx";

const ServicesWebsitesPageBannerContent =() => {
    const navigate = useNavigate();

    const contactButtonIconPath = '/icons/white-phone-icon.png';

    return (
        <>
            <h1>Strony internetowe</h1>
            <h2>Nowoczesne i responsywne strony, które budują wizerunek Twojej firmy i przyciągają klientów.</h2>
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

const ServicesWebsitesPage = () => {
    return (
        <>
            <Helmet>
                <title>Usługi GP IT Solutions</title>
                <meta
                    name="description"
                    content="Projektujemy nowoczesne i responsywne strony internetowe dla firm. Szybkie, bezpieczne i dopasowane do Twojej marki oraz potrzeb klientów."
                />
                <link
                    rel="canonical"
                    href="https://gpitsolutions.pl/services/websites"
                />
            </Helmet>
            <Banner
                backgroundImgPath={`url("/images/websites_banner.webp")`}
                content={<ServicesWebsitesPageBannerContent />}
            />
            <ServicesWebsitesContent />
        </>
    )
}

export default ServicesWebsitesPage