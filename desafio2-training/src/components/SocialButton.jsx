import { FaFacebook, FaGithub , FaLinkedinIn } from "react-icons/fa";
const SocialButton = ({facebookicon,giticon,linkedinicon}) => {
  return (
    <section>

    <div className="icons">
      <a className="fa" href="https://web.facebook.com/" target="_blank" ><FaFacebook  className='iconsi-Face' >{facebookicon}</FaFacebook> </a>
     <a className="gi" href="https://github.com/" target="_blank"><FaGithub className='iconsi-git' >{giticon} </FaGithub></a>
     <a className="li" href="https://www.linkedin.com/feed/" target="_blank"><FaLinkedinIn className='iconsi-linke' > {linkedinicon}</FaLinkedinIn></a>
    
    </div>
    </section>
  );
}

export default SocialButton