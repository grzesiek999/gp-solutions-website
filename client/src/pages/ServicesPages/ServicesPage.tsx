import {Helmet} from "react-helmet-async";
import Banner from "../../components/Banner/Banner.tsx";
import ServicesPageContent from "../../components/ServicesPage/ServicesPageContent/ServicesPageContent.tsx";
import ServicesPageContact from "../../components/ServicesPage/ServicesPageContact/ServicesPageContact.tsx";

const ServicesPageBannerContent =(
    <>
        <h1>Nasze usługi</h1>
        <h2>Kompleksowa obsługa IT dopasowana do potrzeb Twojej firmy.</h2>
    </>
)

const ServicesPage = () => {
    return (
        <>
            <Helmet>
                <title>Usługi GP IT Solutions</title>
                <meta
                    name="description"
                    content="Kompleksowa obsługa IT dla firm — opieka informatyczna, cyberbezpieczeństwo, backup danych oraz szkolenia pracowników. Wsparcie stacjonarne i zdalne na terenie całej Polski."
                />
                <link
                    rel="canonical"
                    href="https://gpitsolutions.pl/services"
                />
            </Helmet>
            <Banner
                backgroundImgPath={`url("/images/services_banner.webp")`}
                content={ServicesPageBannerContent}
            />
            <ServicesPageContent />
            <ServicesPageContact />
        </>
    )
}

export default ServicesPage