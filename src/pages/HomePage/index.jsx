import Advantages from "../../components/HomePage/Advantages";
import ContactUS from "../../components/HomePage/ContactUS";
import LandingSection from "../../components/HomePage/LandingSection";
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
            <ContactUS />
            <div className="h-16"></div>
        </div>
    )
}

export default HomePage;