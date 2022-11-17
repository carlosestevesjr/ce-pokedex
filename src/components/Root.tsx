
import { AplicationProvider } from "../provider/aplication";
import { GlobalStyle } from "../styles/globals";
import Rota from "./Routes";

const Root = () => {
    return(
        <>
            <AplicationProvider >
                <GlobalStyle/>
                <Rota/> 
            </AplicationProvider>
        </>
    )
} 

export default Root