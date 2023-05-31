
const date = new Date();
const currentYear = date.getFullYear();

function Footer() {
  return (
    <footer>
      <a class="btn" href="mailto:richardjattwell@gmail.com">
        <i class="fa-solid fa-envelope footer-icon"></i>
      </a>

      <a
        class="btn"
        href="https://github.com/RJAttwell"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa-brands fa-github footer-icon"></i>
      </a>

      <a
        class="btn"
        href="https://www.linkedin.com/in/richard-attwell-710570157/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa-brands fa-linkedin footer-icon"></i>
      </a>
      <p className="footerText">Richard Attwell - {currentYear}</p>
    </footer>
  );
}
export default Footer;
