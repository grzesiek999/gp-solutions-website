import {Helmet} from "react-helmet-async";
import Banner from "../../components/Banner/Banner.tsx";
import ContactPageContent from "../../components/ContactPage/ContactPageContent/ContactPageContent.tsx";
import ContactPageMap from "../../components/ContactPage/ContactPageMap/ContactPageMap.tsx";

const ContactPageBannerContent = (
    <>
        <h1>Kontakt</h1>
        <h2>Skontaktuj się z nami - chętnie odpowiemy na Twoje pytania.</h2>
    </>
)

const ContactPage = () => {
    return (
        <>
            <Helmet>
                <title>Kontakt GP IT Solutions</title>
                <meta
                    name="description"
                    content="Skontaktuj się z GP IT Solutions. Oferujemy kompleksową obsługę IT, cyberbezpieczeństwo i wsparcie informatyczne dla firm z całej Polski, stacjonarnie i zdalnie."
                />
                <link
                    rel="canonical"
                    href="https://gpitsolutions.pl/contact"
                />
            </Helmet>
            <Banner
                backgroundImgPath={`url("/images/contact_banner.webp")`}
                content={ContactPageBannerContent}
            />
            <ContactPageContent />
            <ContactPageMap />
        </>
    )
}

export default ContactPage;