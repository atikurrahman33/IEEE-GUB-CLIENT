import About from "../../../About/about";
import Banner from "../../../Banner/Banner";
import AllEvent from "../../../Events/AllEvent";
import Design from "../../../Events/Design";
import Extra from "../../../Extra/Extra";
import Feature from "../../../Feature/Feature";
import AllPhoto from "../../../Gallery/AllPhoto";
import Gallery from "../../../Gallery/PhotoCard";
import IEEEnum from "../../../IEEENu/IEEEnum";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <IEEEnum></IEEEnum>
            <AllPhoto></AllPhoto>
            <Feature></Feature>           
            <AllEvent></AllEvent>          
            <Extra></Extra>
            <Design></Design>
            
            
        </div>
    );
};

export default Home;