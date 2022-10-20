import github from "../assets/icons/github.svg"
import linkedin from "../assets/icons/linkedin.svg"
import malt from "../assets/icons/malt.svg"

function Footer() {
  return (
    <div className="footer align">
      <a target="_blank" rel="noreferrer" href="https://github.com/Popy49">
        <img
          width={40}
          height={40}
          className="footer__logo"
          src={github}
          alt="Github"
        />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/juliette-poniatowski-a2a78162/"
      >
        <img
          width={40}
          height={40}
          className="footer__logo"
          src={linkedin}
          alt="LinkedIn"
        />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.malt.fr/profile/julietteponiatowski?q=juliette+Poniatowski&searchid=6345a009b642862e35bafaf6"
      >
        <img
          width={40}
          height={40}
          className="footer__logo"
          src={malt}
          alt="Malt"
        />
      </a>
    </div>
  )
}

export default Footer
