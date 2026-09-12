import HomePageBanner from "../../components/HomePageBanner/HomePageBanner.tsx";
import HomePageContent from "../../components/HomePageContent/HomePageContent.tsx";
import HomePageLastChunk from "../../components/HomePageLastChunk/HomePageLastChunk.tsx";
import {Helmet} from "react-helmet-async";


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
            <HomePageBanner />
            <HomePageContent />
            <HomePageLastChunk />
        </>
    )
}

export default HomePage