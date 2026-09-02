import ContactPageBanner from "../../components/ContactPageBanner/ContactPageBanner.tsx";
import ContactPageContent from "../../components/ContactPageContent/ContactPageContent.tsx";
import ContactPageMap from "../../components/ContactPageMap/ContactPageMap.tsx";


const ContactPage = () => {
    return (
        <>
            <ContactPageBanner />
            <ContactPageContent />
            <ContactPageMap />
        </>
    )
}

export default ContactPage;