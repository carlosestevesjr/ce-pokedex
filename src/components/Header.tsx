import { useNavigate } from "react-router-dom";
import { HeaderWrapper } from "../styles/globals"
import { useLocation, Link } from 'react-router-dom';

export interface IHeaderProps {
}

export function Header(props: IHeaderProps) {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            <h1>
                <img width="150px" src="https://seeklogo.com/images/P/Pokemon-logo-0EAFBD7E4E-seeklogo.com.png" alt="Pokemon" />
            </h1>
            <HeaderWrapper>
                <div>
                    <nav className="nav nav1">
                        <Link to="#" onClick={() => navigate("/")} className={`nav-item ${(location.pathname) === '/' && 'active'}`} data-color="#663399">Home</Link>
                        <Link to="#" onClick={() => navigate("/sobre")} className={`nav-item ${(location.pathname) === '/sobre' && 'active'}`} data-color="#446A46">Sobre</Link>
                        <span className="nav-indicator"></span>
                    </nav>
                </div>

            </HeaderWrapper>
        </>
    );
}
