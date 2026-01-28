// import logo from "../assets/kevinRushLogo.png";
import logo from "../assets/VarnikLogo.jpg";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // or FaSquareXTwitter if you want the square one



const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo"/>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin/>
        <FaXTwitter/>
        <FaInstagram/>
        <FaGithub/>
    </div>
    </nav>
  )
}

export default Navbar