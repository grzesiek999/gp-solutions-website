import HomePageContent from "../../components/HomePageContent/HomePageContent.tsx";
import HomePageLastChunk from "../../components/HomePageLastChunk/HomePageLastChunk.tsx";
import {Helmet} from "react-helmet-async";
import Banner from "../../components/Banner/Banner.tsx";
import Button from "../../components/Button/Button.tsx";
import {useNavigate} from "react-router-dom";
import {useMedia} from "use-media";
import styles from "./HomePage.module.scss";


const HomePageBannerContent = () => {
    const navigate = useNavigate();
    const isMobile = useMedia({ maxWidth: 768 });

    const contactButtonIconPath = '/icons/white-phone-icon.png';
    const checkServicesButtonIconPath = '/icons/white-mail-icon.png';

    return (
        <>
            <h1>Kompleksowa opieka IT dla firm</h1>
            {isMobile ?
                <>
                    <h2>Bezpieczeństwo. Niezawodność. Wsparcie. <br/>Skup się na swoim biznesie - <br/> my zajmiemy się IT.</h2>
                </>:
                <h2>Bezpieczeństwo. Niezawodność. Wsparcie. <br /> Skup się na swoim biznesie - <br/> my zajmiemy się IT.</h2>
            }
            <div className={styles.homePageBannerButtonsDiv}>
                <Button
                    className={styles.homePageBannerContactButton}
                    type={"button"}
                    onClick={()=> navigate('/contact')}
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
                <Button
                    className={styles.homePageBannerCheckServicesButton}
                    type={"button"}
                    onClick={()=> navigate('/services')}
                >
                    <div className={styles.homePageBannerButtonDiv}>
                        <img
                            src={checkServicesButtonIconPath}
                            alt='white mail icon error'
                            className={styles.homePageBannerButtonImg}
                        />
                        <span className={styles.homePageBannerButtonsSpan}>Sprawdź usługi</span>
                    </div>
                </Button>
            </div>
        </>
    )
}

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>GP IT Solutions - Nowoczesne rozwiązania IT</title>
                <meta
                    name="description"
                    content="Usługi informatyczne, kompleksowa obsługa klientów i nowoczesne rozwiązania IT."
                />
                <link
                    rel="canonical"
                    href="https://gpitsolutions.pl/"
                />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "GP IT Solutions",
                        "url": "https://gpitsolutions.pl/",
                        "telephone": "+48608158611",
                        "email": "grzegorz.pasich@o2.pl",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Dębowa 10",
                            "postalCode": "32-340",
                            "addressLocality": "Wolbrom",
                            "addressRegion": "małopolskie",
                            "addressCountry": "PL"
                        },
                        "areaServed": [
                            { "@type": "City", "name": "Wolbrom" },
                            { "@type": "City", "name": "Olkusz" },
                            { "@type": "City", "name": "Kraków" },
                            { "@type": "City", "name": "Miechów" },
                            { "@type": "City", "name": "Skała" },
                            { "@type": "City", "name": "Trzebinia" },
                            { "@type": "City", "name": "Kielce" },
                            { "@type": "City", "name": "Jędrzejów" },
                            { "@type": "City", "name": "Sędziszów" },
                            { "@type": "City", "name": "Katowice" },
                            { "@type": "City", "name": "Gliwice" },
                            { "@type": "City", "name": "Tychy" },
                            { "@type": "City", "name": "Dąbrowa Górnicza" },
                            { "@type": "City", "name": "Sosnowiec" },
                            { "@type": "City", "name": "Sławków" },
                            { "@type": "AdministrativeArea", "name": "Małopolskie" },
                            { "@type": "AdministrativeArea", "name": "Śląskie" },
                            { "@type": "AdministrativeArea", "name": "Świętokrzyskie" },
                            { "@type": "Country", "name": "Polska" }
                        ]
                    })}
                </script>
            </Helmet>
            <Banner
                backgroundImgPath={`url("/images/home_banner.webp")`}
                content={<HomePageBannerContent />}
            />
            <HomePageContent />
            <HomePageLastChunk />
        </>
    )
}

export default HomePage