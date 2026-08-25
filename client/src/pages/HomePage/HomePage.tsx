import HomePageBanner from "../../components/HomePageBanner/HomePageBanner.tsx";
import HomePageContent from "../../components/HomePageContent/HomePageContent.tsx";
import HomePageLastChunk from "../../components/HomePageLastChunk/HomePageLastChunk.tsx";


const HomePage = () => {
    return (
        <>
            <HomePageBanner />
            <HomePageContent />
            <HomePageLastChunk />
        </>
    )
}

export default HomePage