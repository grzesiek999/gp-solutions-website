import AboutUsPageBanner from "../../components/AboutUsPageBanner/AboutUsPageBanner.tsx";
import AboutUsPageContent from "../../components/AboutUsPageContent/AboutUsPageContent.tsx";
import AboutUsPageStrengths from "../../components/AboutUsPageStrengths/AboutUsPageStrengths.tsx";
import AboutUsPageInfo from "../../components/AboutUsPageInfo/AboutUsPageInfo.tsx";
import {Helmet} from "react-helmet-async";


const AboutUsPage = () => {
    return (
        <>
            <Helmet>
                <title>O nas - GP IT Solutions</title>
                <meta
                    name="description"
                    content="Poznaj GP IT Solutions — zapewniamy kompleksową obsługę informatyczną dla małych i średnich firm. Oferujemy wsparcie IT, bezpieczeństwo oraz rozwiązania dopasowane do potrzeb Twojego biznesu."
                />
            </Helmet>
            <AboutUsPageBanner />
            <AboutUsPageContent />
            <AboutUsPageStrengths />
            <AboutUsPageInfo />
        </>
    )
}

export default AboutUsPage