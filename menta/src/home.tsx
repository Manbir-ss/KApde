import Suits from "./suits";
import Frintoo from "./Footer";
import Crousel from "./crousel";
import Infinite from "./infinite_scroll";
import imgs from "./imagess/Hero Background 3.png"
function Home(){
    return(
        <>
        <img className="hentro" src={imgs} />
        <Suits/>
      <Crousel/>
      <Infinite/>
      <Frintoo/>
        </>
    )

}
export default Home;