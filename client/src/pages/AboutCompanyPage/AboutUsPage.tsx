import AboutUsPageBanner from "../../components/AboutUsPageBanner/AboutUsPageBanner.tsx";
import AboutUsPageContent from "../../components/AboutUsPageContent/AboutUsPageContent.tsx";
import AboutUsPageStrengths from "../../components/AboutUsPageStrengths/AboutUsPageStrengths.tsx";
import AboutUsPageInfo from "../../components/AboutUsPageInfo/AboutUsPageInfo.tsx";


const AboutUsPage = () => {
    return (
        <>
            <AboutUsPageBanner />
            <AboutUsPageContent />
            <AboutUsPageStrengths />
            <AboutUsPageInfo />
        </>
    )
}

export default AboutUsPage