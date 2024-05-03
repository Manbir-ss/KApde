import Marquee from "react-fast-marquee"
import imagi1 from "./imagess/2024 Ford Mustang Car aesthetic _ Cool cars _ car wallpapers.jpg"
import imagi2 from "./imagess/Aluminati.jpg"
import imagi3 from "./imagess/BMW Logo - PNG Logo Vector Brand Downloads (SVG, EPS).jpg"
import imagi4 from "./imagess/Cummins Logo.jpg"
import imagi5 from "./imagess/Download Jaguar logo for free.jpg"
import imagi6 from "./imagess/Mini Logo [BMW Mini Cooper] - PNG Logo Vector Brand Downloads (SVG, EPS).jpg"
import imagi7 from "./imagess/Technical Support Engineer at TCS, [Apply Now].jpg"
import imagi8 from "./imagess/Tesla Round Logo PNG Images (Transparent HD Photo Clipart).jpg"
import imagi9 from "./imagess/amazon wallpaper by wallpaperstand - Download on ZEDGE™ _ 1b81.jpg"

function Infinite() {
    return (
        <>
            <div style={{width:"100%" , float:"left"}}>
                <div style={{marginTop:"-100px"}}>
                    <h1>Our Technology Partners</h1>
                </div>
                <div style={{marginTop:"-250px"}}>
                    <Marquee>
                        <div >
                        <img style={{height:"150px", width:"150px", marginLeft:"40px"}} src={imagi1} alt="" />
                        </div>
                        <div >
                        <img style={{height:"150px", width:"150px" , marginLeft:"40px"}}src={imagi2} alt="" />
                        </div >
                        <div >
                        <img style={{height:"150px", width:"150px" , marginLeft:"40px"}}src={imagi3} alt="" />
                        </div>
                        <div >
                        <img style={{height:"150px", width:"150px" , marginLeft:"40px"}} src={imagi4} alt="" />
                        </div>
                        <div >
                        <img style={{height:"150px", width:"150px" , marginLeft:"40px"}}src={imagi5} alt="" />
                        </div>
                        <div>
                        <img style={{height:"150px", width:"150px", marginLeft:"40px"}}src={imagi6} alt="" />
                        </div>
                        <div >
                        <img style={{height:"150px", width:"150px", marginLeft:"40px"}}src={imagi7} alt="" />
                        </div>
                        <div >
                        <img style={{height:"150px", width:"150px" , marginLeft:"40px"}}src={imagi8} alt="" />
                        </div>
                        <div >
                        <img style={{height:"150px", width:"150px" , marginLeft:"40px"}}src={imagi9} alt="" />
                        </div>
                    </Marquee>
                </div>
                
            </div>
        </>
    )
}

export default Infinite