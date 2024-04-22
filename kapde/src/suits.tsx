import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useRef, useEffect } from "react"
import img1 from "./imagess/Product 1.png"
import img2 from "./imagess/Product 2.png"
import img3 from "./imagess/Product 3.png"
import img4 from "./imagess/Base layer.jpg"
import img5 from "./imagess/Image 1.png"
import img6 from "./imagess/Image 2.png"
import img7 from "./imagess/Image 3.png"
type x = number;
function Suits() {
    const sectionRef = useRef(null)
    const signalRef = useRef(null)
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {
        const pin = gsap.fromTo(sectionRef.current, {
            translateX: 0
        }, 
        {
            translateX: "-300vw",
            ease: "none",
            duration: 1,
            scrollTrigger: {
                trigger: signalRef.current,
                start: "top top",
                end: "2000 top",
                scrub: 3,
                pin:"#width",
                // markers:true

            }
        })

        return () => {
            pin.kill()
        }
    }, [])
    let tl=gsap.to(".scroll-section-inner",{
        x:-800,
    })


    return (
        <section>
            <section className="scroll-section-outer" id="width"  style={{ width: "50%", float: 'left' }}>
                <div ref={signalRef} style={{ width: "50%", float: 'left' }}>
                    <div><img src={img4} style={{ height: "400px", width: "300px", marginTop: "140px", position: "absolute", marginLeft: "-140px" }} /></div>
                    <div ref={sectionRef} className="scroll-section-inner " id="hrena" >
                        <div className="scroll-section ">
                            {/* <h1 className="mentall">Section 1</h1> */}
                            <img src={img1} style={{ height: "400px", width: "300px", padding: "-100px" }}></img>
                            {/* <img className="hetro" src={img5} style={{height:"400px" , width : "300px",  position:"absolute"}}></img> */}
                        </div>
                        <div className="scroll-section">
                            {/* <h1 className="mentali">Section 2</h1> */}
                            <img src={img2} style={{ height: "400px", width: "300px", padding: "-100px" }}></img>
                            {/* <img className="hetro" src={img6} style={{height:"400px" , width : "300px", position:"absolute"}}></img> */}
                        </div>
                        <div className="scroll-section" >
                            {/* <h1 className="mentalo">Section 3</h1> */}
                            <img src={img3} style={{ height: "400px", width: "300px", }}></img>
                        </div>
                        {/* <div className="scroll-section">
                        <h1 className="mentalu">Section 4</h1>
                        <img src={img1} style={{height:"90px" , width : "90px"}}></img>
                    </div> */}
                    </div>
                </div>
            </section >
            <section className="Hello" style={{ width: "50%", float: 'right' }}>
                <div>
                    <h1 style={{ marginBottom: "-500px", marginTop: "100px" }}>Full-Body Tracking Haptic Suit</h1>
                    <p>Experience VR like never before with Shockwave -seamless body tracking and lifelike sensations make every Virtual Experience come alive</p>
                    <button style={{ width: "100px", height: "100px" }}>Join Waitlist</button>
                </div>
                <div>
                    <h1 style={{ marginBottom: "-500px", marginTop: "200px" }}>Full- body tracking systemt</h1>
                    <p>Transform into your virtual avatar with Shockwave’s 12 point full-body tracking system.</p>
                    <button style={{ width: "100px", height: "100px" }}>Join Waitlist</button>
                </div>
                <div>
                    <h1 style={{ marginBottom: "-500px", marginTop: "300px" }}>Haptic Suit</h1>
                    <p>Immerse yourself in the future of gaming with Shockwave Haptic Suit—80 haptic motors for an unbeatable, lifelike VR experience. Feel the thrill of VR on your body.</p>
                    <button style={{ width: "100px", height: "100px" }}>Join Waitlist</button>
                </div>
            </section>
        </section>
    )
}

export default Suits;
