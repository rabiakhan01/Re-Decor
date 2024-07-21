import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
    return (
        <div className="2xl:max-w-[1440px] 2xl:my-0 2xl:mx-auto">
            <Navbar />
            <div className="min-h-[79vh] ">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;