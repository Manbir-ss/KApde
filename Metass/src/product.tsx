
import SimpleImageSlider from "react-simple-image-slider";
// import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Nav, NavDropdown } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from "react";
import Frintoo from "./Footer";

function Products() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])



    const [openy, setOpeny] = useState(false);
    const [selectstarcount, setselectstarcount] = useState(0)
    return (
        <>
            <div style={{ display: "flex" }}>
                <div style={{width:"500px"}} id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://scontent.fluh1-2.fna.fbcdn.net/v/t39.8562-6/312460480_498578388853526_7313331565664328989_n.jpg?stp=dst-webp&_nc_cat=105&ccb=1-7&_nc_sid=9a942e&_nc_ohc=nex7kTNWDakAb65TOYr&_nc_ht=scontent.fluh1-2.fna&oh=00_AfCbszmjw304_oDe9gEv1HFRRkSXQhQ71ooY7AmzCPA89g&oe=663283A6" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://scontent.fluh1-1.fna.fbcdn.net/v/t39.8562-6/307437603_1103472866954527_7451113060627274321_n.jpg?stp=dst-webp&_nc_cat=100&ccb=1-7&_nc_sid=9a942e&_nc_ohc=EHBblhuaw_sAb74UXbB&_nc_oc=AdhVE0XzCJbG2oMndyPYpHP4aC_ta4QLb2v4T-Z_8d3UX6uFh8UhkVgPLD82MVmE3iU&_nc_ht=scontent.fluh1-1.fna&oh=00_AfBb-Rm_52sggV1HCnCyhWPWXmRCdhC0E7ArNfBO7Lx_uQ&oe=66328B3D" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://scontent.fluh1-3.fna.fbcdn.net/v/t39.8562-6/309706547_427558039443986_8014194684429889543_n.jpg?stp=dst-webp&_nc_cat=101&ccb=1-7&_nc_sid=9a942e&_nc_ohc=-kzweJH57BYAb4sKQfd&_nc_ht=scontent.fluh1-3.fna&oh=00_AfCavq1WdTVWNhL6ZdOp3zeWZY4qE5CTRaNi8SZeGMe2VQ&oe=663295B8" alt="Third slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://scontent.fluh1-2.fna.fbcdn.net/v/t39.8562-6/309295964_3222861917966301_1136057610757704564_n.jpg?stp=dst-webp&_nc_cat=104&ccb=1-7&_nc_sid=9a942e&_nc_ohc=yLNys1iMwZYAb6ZYed0&_nc_ht=scontent.fluh1-2.fna&oh=00_AfAoXiDMLjG_UdI9UuIZp6WtBfZUkOFlzqUN-P8D7r2tQg&oe=66326E34" alt="Third slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://scontent.fluh1-2.fna.fbcdn.net/v/t39.8562-6/306506184_1158827865067001_1271695763750454699_n.jpg?stp=dst-webp&_nc_cat=105&ccb=1-7&_nc_sid=9a942e&_nc_ohc=uYv_lReNnbsAb5Jd0f6&_nc_ht=scontent.fluh1-2.fna&oh=00_AfDbOY4Fbcu_toRqtlmlKowccZqgElqRPHbaKbbE20zCkQ&oe=6632756F" alt="Third slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://scontent.fluh1-2.fna.fbcdn.net/v/t39.8562-6/307486103_579027463904948_633570515253636741_n.jpg?stp=dst-webp&_nc_cat=106&ccb=1-7&_nc_sid=9a942e&_nc_ohc=R_MNZXRbuLkAb52jj81&_nc_ht=scontent.fluh1-2.fna&oh=00_AfCOGQ-ifB4K7SDu0PBkJHuOboe30CFmlCXlzpfZcw2U1g&oe=66327947" alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                <div className="trio" style={{ marginLeft: "70px", marginTop: "-240px" }} >
                    <h1 style={{ textAlign: "left" }} id="trinko" >Meta Quest Pro </h1>
                    <p id="hentar" style={{ fontWeight: "bold", textAlign: "left", marginTop: "-480px" }}> $199.99 USD</p>
                    <div style={{ textAlign: "left" }}>

                        <div className="stars">
                            {[...Array(5)].map((_, index) => {
                                return <span key={index}
                                    className={`${index + 1 <= selectstarcount ? 'selected' : ''}`}
                                    onClick={() => {
                                        setselectstarcount(index + 1)
                                    }}>&#9733;

                                </span>
                            })}



                        </div>

                    </div>
                    <h4 id="hentar" style={{ textAlign: "left" }}>Features</h4>
                    <p id="hentar" style={{ textAlign: "left" }}>Mixed reality experiences, inclusive of immersive VR</p>
                    <p id="hentar" style={{ textAlign: "left" }}>Highest resolution Infinity Display 25PPD</p>
                    <p id="hentar" style={{ textAlign: "left" }}>Snapdragon® XR2 Gen 2</p>
                    <p id="hentar" style={{ textAlign: "left" }}>Pancake lens</p>
                    <p id="hentar" style={{ textAlign: "left" }}>More customizable and adjustable fit</p>

                    <div id="tyty">
                        <Button
                            onClick={() => setOpeny(!openy)}
                            aria-controls="example-collapse-text"
                            aria-expanded={openy}
                            id="hentroo"
                        >
                            <p>Offers</p>
                        </Button>
                        <Collapse in={openy}>
                            <div id="example-collapse-text">
                                <a id="detailsin">Buy 2 Get 30% Off</a>
                                <br>
                                </br>
                                <br>
                                </br>
                                <a id="detailsin">On SBI card 20% Off</a>
                                <br>
                                </br>
                                <br>
                                </br>
                                <a id="detailsin">On ICIC bank card get 40% Off </a>

                            </div>
                        </Collapse>
                        <div style={{ textAlign: "left" }}>
                            <Button style={{ textAlign: "left" }} id="hellos">Add To Cart</Button>
                        </div>
                    </div>


                </div>

            </div>
            <div>
                <div data-aos="zoom-in" style={{ marginLeft: "20px", marginTop: "100px", textAlign: "left" }}>
                    <img style={{ height: "300px", width: "500px" }} src="https://scontent.fluh1-4.fna.fbcdn.net/v/t15.5256-10/314506206_514114567287269_9075770978752310692_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Pn7Va4mOCXsQ7kNvgH8WbtX&_nc_ht=scontent.fluh1-4.fna&oh=00_AfDyoCvJv66a4kqeaQhVw6JpcWZGmi-_nwXURRfF-vPvfg&oe=66328E6C" alt="" />

                </div>
                <div data-aos="fade-up" style={{ marginLeft: "550px", marginTop: "-300px" }}>
                    <p style={{ fontSize: "xx-large", fontWeight: "lighter" }}>Work in virtual world stay in real world</p>
                    <p>With breakthrough high resolution mixed reality you canengage effortlessly with the virtual worldwhile maintaining presence in your physical space in hi-def color</p>
                </div>
            </div>
            <div>
                <div data-aos="zoom-in" style={{ marginLeft: "490px", marginTop: "150px", textAlign: "left" }}>
                    <img style={{ height: "300px", width: "500px" }} src="https://scontent.fluh2-1.fna.fbcdn.net/v/t15.5256-10/315529779_678327403869175_9179412243099879664_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wTaLCx41nz4Q7kNvgGVvRsb&_nc_ht=scontent.fluh2-1.fna&oh=00_AfDADKGxgG-YNDX--FIsDXicInujcRZdrdIw8oG7esQCcg&oe=6632BEE0" alt="" />

                </div>
                <div data-aos="fade-up" style={{ marginTop: "-300px", marginRight: "610px", marginLeft: "20px" }}>
                    <p style={{ fontSize: "xx-large", fontWeight: "lighter" }}>Collaborate in mixed reality together, apart</p>
                    <p>The path from idea to collaboration has never been easier. Design in mixed reality while anchored in your own physical design space. Invite collaborators around the world to join your space, and work on shared designs in real time.</p>
                </div>
            </div>
            <div>
                <div data-aos="fade-right" style={{ marginTop: "100px" }}>
                    <img style={{ height: "400px" }} src="https://scontent.fluh2-1.fna.fbcdn.net/v/t15.5256-10/308792642_196245752968107_7032865167396021108_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=aX490LGP1ocQ7kNvgFBA_IB&_nc_ht=scontent.fluh2-1.fna&oh=00_AfAYJTkTXq4ODETNaF7Da_dcpOHCcKhkv9Y0w4qFL2ryAg&oe=6632CDE8" alt="" />
                </div>
                <div data-aos="fade-left" style={{ marginLeft: "200px", width: "600px", marginTop: "60px" }}>
                    <p style={{ fontSize: "xx-large", fontWeight: "lighter" }}>Even if you're across the world, it'll feel like you're across the table</p>
                    <p>Authentic avatar expressions mimic your natural facial expressions, so you can be fully present in meetings and gatherings with friends and bring more of your true personality to life in VR.</p>
                </div>
            </div>
            <div>
                <Frintoo/>
            </div>
        </>
    )
}

export default Products;