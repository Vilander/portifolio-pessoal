import React from 'react';
// import Header from './Header';
import Navbar from './Navbar'
import Footer from './Footer';
import WhatsappButton from './WhatsappButton';
import AccessibilityBar from './AccessibilityBar';
import backgroundImage from '../assets/images/background-bolinhas.webp';


const Layout = ({ children, header }) => {
    // Se a prop 'header' for passada vai ser usada, senão, vai ser usado DefaultHeader.
    const HeaderComponent = header || <Navbar />;

    return (
        <>
            <div
                className="background-image"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>

            {HeaderComponent} {/* Renderiza o header escolhido */}

            <main className="conteudo-principal">
                {children}
            </main>

            <AccessibilityBar />
            <WhatsappButton />

            <Footer />
        </>
    );
};

export default Layout;