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



function Suits() {

    const sectionRef = useRef(null)
    const signalRef = useRef(null)
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {
        const pin = gsap.fromTo(sectionRef.current, {
            translateX: 0,
        },

            {
                translateX: "-300vw",
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: signalRef.current,
                    start: "top top",
                    end: "2000 top",
                    scrub: 0.3,
                    pin: "#width",
                    markers: true,
                    pinSpacing:true,


                }

            })

        return () => {
            pin.kill()
        }
    }, [])
    const carousel = document.querySelector('.scroll-section')
    
         gsap.fromTo(carousel,{
            opacity:1,
        },

            {
                opacity:1,
                toggleAction: "play play none reset",
                scrollTrigger: {
                    trigger: carousel,
                    start: "top top",
                    end: "+=300",
                    pin: true,
                    markers: true,


                }

            })

    
   

    

    return (
        <>
            <section>
                <section className="scroll-section-outer" id="width" style={{ width: "50%", float: 'left' }}>
                    <div ref={signalRef} style={{ width: "50%", float: 'left' }}>
                        <div><img className="htina" src={img4} style={{ height: "400px", width: "300px", marginTop: "110px", position: "absolute", marginLeft: "-50px" }} /></div>
                        <div ref={sectionRef} className="scroll-section-inner " id="hrena" >
                            <div className="scroll-section ">
                                {/* <h1 className="mentall">Section 1</h1> */}
                                <img src={img1} style={{ height: "400px", width: "290px", padding: "-100px" }}></img>
                                <img className="hetro" src={img5} style={{ height: "400px", width: "300px", position: "absolute", marginLeft: "100px" }}></img>
                            </div>
                            <div className="scroll-section">
                                {/* <h1 className="mentali">Section 2</h1> */}
                                <img src={img2} style={{ height: "400px", width: "290px", padding: "-100px" }}></img>
                                <img className="hetro" src={img6} style={{ height: "400px", width: "300px", position: "absolute", marginLeft: "100px" }}></img>
                            </div>
                            <div className="scroll-section" >
                                {/* <h1 className="mentalo">Section 3</h1> */}
                                <img src={img3} style={{ height: "400px", width: "290px", }}></img>
                                <img className="hetro" src={img7} style={{ height: "400px", width: "300px", position: "absolute", marginLeft: "100px" }}></img>
                            </div>
                            {/* <div className="scroll-section">
                        <h1 className="mentalu">Section 4</h1>
                        <img src={img1} style={{height:"90px" , width : "90px"}}></img>
                    </div> */}
                        </div>
                    </div>
                </section >
                <section className="Hello" style={{ width: "40%", flexDirection: "row", flexWrap: "wrap", float: "right", marginLeft: "-40px" }}>
                    <div >
                        <h1 style={{ textAlign: "center", marginBottom: "-500px", marginTop: "100px" }}>Full-Body Tracking Haptic Suit</h1>
                        <p style={{ textAlign: "center" }}>Experience VR like never before with Shockwave -seamless body tracking and lifelike sensations make every Virtual Experience come alive</p>
                        <button style={{ width: "70px", height: "70px" }}>Join Waitlist</button>
                    </div>
                    <div>
                        <h1 style={{ textAlign: "center", marginBottom: "-500px", marginTop: "200px" }}>Full- body tracking systemt</h1>
                        <p style={{ textAlign: "center" }}>Transform into your virtual avatar with Shockwave’s 12 point full-body tracking system.</p>
                        <button style={{ width: "70px", height: "70px" }}>Join Waitlist</button>
                    </div>
                    <div>
                        <h1 style={{ textAlign: "center", marginBottom: "-500px", marginTop: "300px" }}>Haptic Suit</h1>
                        <p style={{ textAlign: "center" }}>Immerse yourself in the future of gaming with Shockwave Haptic Suit—80 haptic motors for an unbeatable, lifelike VR experience. Feel the thrill of VR on your body.</p>
                        <button style={{ width: "70px", height: "70px" }}>Join Waitlist</button>
                    </div>
                </section>
            </section>
            <div>
         


            </div>

        </>

    )
}

export default Suits;
