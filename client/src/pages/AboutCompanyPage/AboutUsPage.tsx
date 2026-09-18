import AboutUsPageContent from "../../components/AboutUsPageContent/AboutUsPageContent.tsx";
import AboutUsPageStrengths from "../../components/AboutUsPageStrengths/AboutUsPageStrengths.tsx";
import AboutUsPageInfo from "../../components/AboutUsPageInfo/AboutUsPageInfo.tsx";
import {Helmet} from "react-helmet-async";
import Banner from "../../components/Banner/Banner.tsx";

const AboutUsPageBannerContent =(
    <>
        <h1>O nas</h1>
        <h2>Poznaj GP IT Solutions</h2>
    </>
)

const AboutUsPage = () => {
    return (
        <>
            <Helmet>
                <title>O nas - GP IT Solutions</title>
                <meta
                    name="description"
                    content="Poznaj GP IT Solutions — zapewniamy kompleksową obsługę informatyczną dla małych i średnich firm. Oferujemy wsparcie IT, bezpieczeństwo oraz rozwiązania dopasowane do potrzeb Twojego biznesu."
                />
                <link
                    rel="canonical"
                    href="https://gpitsolutions.pl/about_us"
                />
            </Helmet>
            <Banner
                backgroundImgPath={`url("/images/about_us_banner.webp")`}
                content={AboutUsPageBannerContent}
            />
            <AboutUsPageContent />
            <AboutUsPageStrengths />
            <AboutUsPageInfo />
        </>
    )
}

export default AboutUsPage