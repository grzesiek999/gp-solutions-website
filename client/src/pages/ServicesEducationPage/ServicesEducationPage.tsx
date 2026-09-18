import {Helmet} from "react-helmet-async";
import Banner from "../../components/Banner/Banner.tsx";
import {useNavigate} from "react-router-dom";
import Button from "../../components/Button/Button.tsx";
import styles from "../HomePage/HomePage.module.scss";

const ServicesEducationPageBannerContent =() => {
    const navigate = useNavigate();

    const contactButtonIconPath = '/icons/white-phone-icon.png';

    return (
        <>
            <h1>Szkolenia pracowników</h1>
            <h2>Praktyczna wiedza, która zwiększa bezpieczeństwo i efektywność w Twojej firmie.</h2>
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

const ServicesEducationPage = () => {
    return (
        <>
            <Helmet>
                <title>Szkolenia GP IT Solutions</title>
                <meta
                    name="description"
                    content="Szkolenia pracowników dla firm. Przekazujemy praktyczną wiedzę z zakresu cyberbezpieczeństwa, dobrych praktyk IT i bezpiecznego korzystania z technologii."
                />
                <link
                    rel="canonical"
                    href="https://gpitsolutions.pl/services/education"
                />
            </Helmet>
            <Banner
                backgroundImgPath={`url("/images/education_banner.webp")`}
                content={<ServicesEducationPageBannerContent />}
            />
        </>
    )
}

export default ServicesEducationPage