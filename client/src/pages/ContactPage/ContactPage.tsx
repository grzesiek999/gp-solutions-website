import ContactPageBanner from "../../components/ContactPageBanner/ContactPageBanner.tsx";
import ContactPageContent from "../../components/ContactPageContent/ContactPageContent.tsx";
import ContactPageMap from "../../components/ContactPageMap/ContactPageMap.tsx";
import {Helmet} from "react-helmet-async";


const ContactPage = () => {
    return (
        <>
            <Helmet>
                <title>Kontakt GP IT Solutions</title>
                <meta
                    name="description"
                    content="Skontaktuj się z GP IT Solutions. Oferujemy kompleksową obsługę IT, cyberbezpieczeństwo i wsparcie informatyczne dla firm z całej Polski, stacjonarnie i zdalnie."
                />
            </Helmet>
            <ContactPageBanner />
            <ContactPageContent />
            <ContactPageMap />
        </>
    )
}

export default ContactPage;