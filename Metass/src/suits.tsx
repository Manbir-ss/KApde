import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useRef, useEffect } from "react"
import img1 from "./imagess/Product 1.png"
import img2 from "./imagess/Product 2.png"
import img3 from "./imagess/Product 3.png"
import img4 from "./imagess/Base layer.jpg"



function Suits() {

    const sectionRef = useRef(null)
    const signalRef = useRef(null)
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {
        const pin = gsap.fromTo(sectionRef.current, {
            translateX: 0,
        },

            {
                translateX: "-250vw",
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: signalRef.current,
                    start: "top top",
                    end: "2000 top",
                    scrub: 0.3,
                    pin: "#width",
                    pinSpacing: true,


                }

            })

        return () => {
            pin.kill()
        }
    }, [])
   






    return (
        <>
            <section>
                <section className="scroll-section-outer" id="width" style={{ width: "50%", float: 'left' }}>
                    <div ref={signalRef} style={{ width: "50%", float: 'left' }}>
                        <div><img className="htina" src={img4} style={{ height: "400px", width: "300px", marginTop: "110px", position: "absolute", marginLeft: "-90px" }} /></div>
                        <div ref={sectionRef} className="scroll-section-inner " id="hrena" >
                            <div className="scroll-section ">

                                <img  className="s1" src={img1} style={{ height: "400px", width: "290px" }}></img>

                            </div>
                            <div className="scroll-section">

                                <img className="s1" src={img2} style={{ height: "400px", width: "290px"}}></img>

                            </div>
                            <div className="scroll-section" >

                                <img className="s1" src={img3} style={{ height: "400px", width: "290px", }}></img>

                            </div>
                        </div>
                    </div>
                </section >
                <section className="Hello" style={{ width: "40%", flexDirection: "row", flexWrap: "wrap", float: "right", marginLeft: "-40px" }}>
                    <div >
                        <h1 style={{ color:"black" , textAlign: "left", marginBottom: "-500px", marginTop: "170px" }}>Full-Body Tracking Haptic Suit</h1>
                        <p style={{ color:"black", textAlign: "left" }}>Experience VR like never before with Shockwave -seamless body tracking and lifelike sensations make every Virtual Experience come alive</p>
                        <button className="btnies" style={{ border:"none", color:"black", width: "140px", height: "40px" }}>Join Waitlist</button>
                    </div>
                    <div>
                        <h1 style={{ color:"black" , textAlign: "left", marginBottom: "-500px", marginTop: "330px" }}>Full- body tracking systemt</h1>
                        <p style={{ textAlign: "left" }}>Transform into your virtual avatar with Shockwave’s 12 point full-body tracking system.</p>
                        <button className="btnies"  style={{ border:"none", color:"black", width: "140px", height: "40px" }}>Join Waitlist</button>
                    </div>
                    <div className="haptic">
                        <h1 style={{ color:"black" , textAlign: "left", marginBottom: "-500px", marginTop: "470px" }}>Haptic Suit</h1>
                        <p style={{ textAlign: "left" }}>Immerse yourself in the future of gaming with Shockwave Haptic Suit—80 haptic motors for an unbeatable, lifelike VR experience. Feel the thrill of VR on your body.</p>
                        <button className="btnies"  style={{border:"none", color:"black",width: "140px", height: "40px" }}>Join Waitlist</button>
                    </div>
                </section>
            </section>
            <div>
            </div>

        </>

    )
}

export default Suits;
