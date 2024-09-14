import Advantages from "../../components/HomePage/Advantages";
import LandingSection from "../../components/HomePage/LandingSection/indesx";
import Services from "../../components/HomePage/Services";
import Layout from "../../components/shared/Layout";

const HomePage = () => {
    return (
        <div className="w-full flex flex-col gap-16">
            <LandingSection />
            <Services />
            <Advantages />
            <div className="h-40"></div>
        </div>
    )
}

export default HomePage;