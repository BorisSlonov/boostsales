import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (

        <div>
            <div className="Layout">
                <Header />
                {children}
                <Footer />
            </div>
        </div>

    )
}

export default Layout;