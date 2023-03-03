import type { NextComponentType, NextPageContext } from "next";
import Footer from "./footer";
import Header from "./header";


const Layout: NextComponentType<NextPageContext, any, any> = ({ children }) => {
    return (
        <>
            <Header />
            <main className="mt-[70px]">
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
