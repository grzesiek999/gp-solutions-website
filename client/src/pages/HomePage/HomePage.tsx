import HomePageBanner from "../../components/HomePageBanner/HomePageBanner.tsx";
import HomePageContent from "../../components/HomePageContent/HomePageContent.tsx";
import HomePageLastChunk from "../../components/HomePageLastChunk/HomePageLastChunk.tsx";


const HomePage = () => {
    return (
        <main>
            <HomePageBanner />
            <HomePageContent />
            <HomePageLastChunk />
        </main>
    )
}

export default HomePage