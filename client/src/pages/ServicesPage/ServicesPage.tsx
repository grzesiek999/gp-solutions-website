import ServicesPageBanner from "../../components/ServicesPageBanner/ServicesPageBanner.tsx";
import ServicesPageContent from "../../components/ServicesPageContent/ServicesPageContent.tsx";
import ServicesPageContact from "../../components/ServicesPageContact/ServicesPageContact.tsx";
import {Helmet} from "react-helmet-async";


const ServicesPage = () => {
    return (
        <>
            <Helmet>
                <title>Usługi GP IT Solutions</title>
                <meta
                    name="description"
                    content="Kompleksowa obsługa IT dla firm — opieka informatyczna, cyberbezpieczeństwo, backup danych oraz szkolenia pracowników. Wsparcie stacjonarne i zdalne na terenie całej Polski."
                />
            </Helmet>
            <ServicesPageBanner />
            <ServicesPageContent />
            <ServicesPageContact />
        </>
    )
}

export default ServicesPage