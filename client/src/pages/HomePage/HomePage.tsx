import HomePageBanner from "../../components/HomePageBanner/HomePageBanner.tsx";
import HomePageContent from "../../components/HomePageContent/HomePageContent.tsx";
import HomePageLastChunk from "../../components/HomePageLastChunk/HomePageLastChunk.tsx";
import {Helmet} from "react-helmet-async";


const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>GP IT Solutions - Nowoczesne rozwiązania IT</title>
                <meta
                    name="description"
                    content="Usługi informatyczne, kompleksowa obsługa klientów i nowoczesne rozwiązania IT."
                />
                <link
                    rel="canonical"
                    href="https://gpitsolutions.pl/"
                />
            </Helmet>
            <HomePageBanner />
            <HomePageContent />
            <HomePageLastChunk />
        </>
    )
}

export default HomePage