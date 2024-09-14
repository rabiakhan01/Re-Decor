import Advantages from "../../components/HomePage/Advantages";
import LandingSection from "../../components/HomePage/LandingSection/indesx";
import Services from "../../components/HomePage/Services";
import Team from "../../components/HomePage/Team";
import Varities from "../../components/HomePage/Varities";

const HomePage = () => {
    return (
        <div className="w-full flex flex-col gap-16">
            <LandingSection />
            <Services />
            <Advantages />
            <Varities />
            <Team />
            <div className="h-40"></div>
        </div>
    )
}

export default HomePage;