import ContactPageBanner from "../../components/ContactPageBanner/ContactPageBanner.tsx";
import ContactPageContent from "../../components/ContactPageContent/ContactPageContent.tsx";
import ContactPageMap from "../../components/ContactPageMap/ContactPageMap.tsx";


const ContactPage = () => {
    return (
        <main>
            <ContactPageBanner />
            <ContactPageContent />
            <ContactPageMap />
        </main>
    )
}

export default ContactPage;