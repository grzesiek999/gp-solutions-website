import ServicesPageBanner from "../../components/ServicesPageBanner/ServicesPageBanner.tsx";
import ServicesPageContent from "../../components/ServicesPageContent/ServicesPageContent.tsx";
import ServicesPageContact from "../../components/ServicesPageContact/ServicesPageContact.tsx";


const ServicesPage = () => {
    return (
        <>
            <ServicesPageBanner />
            <ServicesPageContent />
            <ServicesPageContact />
        </>
    )
}

export default ServicesPage