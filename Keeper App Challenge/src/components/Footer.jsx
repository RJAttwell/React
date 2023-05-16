const date = new Date();
const currentYear = date.getFullYear();

function Footer(){
    return <footer>
        <p className="footerText">Richard Attwell - {currentYear}</p>
    </footer>;
};
export default Footer;