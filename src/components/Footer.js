import NavBar from './NavBar'
import { AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai';
import { CiTwitter } from 'react-icons/ci';
import '../App.css';

function Footer() {
    return(
        <footer className="bg-dark text-white gap-5 justify-content-start mt-5 d-flex p-3 align-items-center">
            <div>
                <h3 className="text-white">Seguinos en nuestras redes</h3>
                <div className="d-flex justify-content-evenly">
                    <div className="fs-4"><AiOutlineInstagram/></div>
                    <div className="fs-4"><AiOutlineFacebook/></div>
                    <div className="fs-4"><CiTwitter/></div>
                </div>
            </div>
            <NavBar className="NavBarOnFooter"/>
        </footer>
    )
}

export default Footer