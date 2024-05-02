import Carousel from "react-multi-carousel";
// import { Carousel } from 'react-responsive-carousel';
import "react-multi-carousel/lib/styles.css";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Crousel() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 1000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 2000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const [open, setOpen] = useState(false);
    const [openi, setOpeni] = useState(false);
    const [openo, setOpeno] = useState(false);
    const [openu, setOpenu] = useState(false);
    const [openy, setOpeny] = useState(false);




    const naviagte = useNavigate();
    const goToContact = () => {
        naviagte("/product")
    }

    return (
        <>
            <div className="tero" style={{ marginBottom: "50px", display: "flex", justifyContent: "space-around", width: "100%", float: "left" }}>
                <img id="imges1" style={{ width: "400px" }} src="https://images.immediate.co.uk/production/volatile/sites/3/2022/12/Marvel-Snap-ae48df0.jpg?quality=90&resize=660,440" alt="" />
                <div>
                    <a style={{ position: "absolute", marginTop: "230px", marginLeft: "-300px", color: "black", textDecoration: "none" }} href="example.com">Learn More</a>
                </div>
                <img style={{ width: "400px" }} src="https://cdn.vox-cdn.com/thumbor/6I-IQtvx29OSQp0nZscVi7Ev9rA=/0x0:1920x1080/1200x675/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/68510166/jbareham_201201_ecl1050_goty_2020_top_50_02.0.jpg" alt="" />
            </div>
            <div className="heros" style={{ width: "100%", float: "left" }}>
                <Carousel responsive={responsive}>

                    <div className="frento">
                        <img id="imhi" src="https://scontent.fluh1-1.fna.fbcdn.net/v/t39.8562-6/307437603_1103472866954527_7451113060627274321_n.jpg?stp=dst-webp&_nc_cat=100&ccb=1-7&_nc_sid=9a942e&_nc_ohc=4R8BPSSdavoQ7kNvgFCIK07&_nc_oc=AdgDfkFWvL9RUUdP6vbG5-OaI5bn3Qkmq7z6On9vlmCZgfMhpdqmrx_4JZPf6jKiq5E&_nc_ht=scontent.fluh1-1.fna&oh=00_AfBXOzvyK8USRmM8kUbFx5vwc-las317rJ2bcXKXHiz2uw&oe=6635667D" style={{ height:"200px", width: "350px" }} alt="image" />
                        <h1 id="helloo">Meta Quest Pro</h1>
                        <p id="yello">Starting at $199.99 USD</p>
                        <div style={{ textAlign: "left" }}>
                            <Button onClick={() => goToContact()} id="hellos">Detail</Button>
                        </div>
                        <div id="tyty">
                            <Button
                                onClick={() => setOpen(!open)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}
                                id="hentroo"
                            >
                                <p>Description</p>
                            </Button>
                            <Collapse in={open}>
                                <div id="example-collapse-text">
                                    <p>Mixed reality experiences, inclusive of immersive VR</p>
                                    <p>Highest resolution Infinity Display 25PPD</p>
                                    <p>Snapdragon® XR2 Gen 2</p>
                                    <p>Pancake lens</p>
                                    <p>More customizable and adjustable fit</p>
                                </div>
                            </Collapse>
                        </div>
                    </div>
                    <div>
                        <img src="https://scontent.fluh1-3.fna.fbcdn.net/v/t39.8562-6/431861267_808058731201126_4890778995840052651_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f537c7&_nc_ohc=i8MvxJjvTKMQ7kNvgGElaNf&_nc_ht=scontent.fluh1-3.fna&oh=00_AfA9tlGsIA9nKKs0O6z8_P1V3eN_mcCV-PPnqUGcOt83tQ&oe=66355FE0" style={{ marginBottom:"-60px", marginTop:"-40px", height:"300px", width: "350px" }} alt="image" />
                        <h1 id="helloo">Meta Quest 3</h1>
                        <p id="yello">Starting at $499.99 USD</p>
                        <div style={{ textAlign: "left" }}>
                            <Button id="hellos">Detail</Button>
                        </div>
                        <div id="tyty">
                            <Button
                                onClick={() => setOpeni(!openi)}
                                aria-controls="example-collapse-text"
                                aria-expanded={openi}
                                id="hentroo"
                            >
                                <p>Description</p>
                            </Button>
                            <Collapse in={openi}>
                                <div id="example-collapse-text">
                                    <p>Mixed reality experiences, inclusive of immersive VR</p>
                                    <p>Highest resolution Infinity Display 25PPD</p>
                                    <p>Snapdragon® XR2 Gen 2</p>
                                    <p>Pancake lens</p>
                                    <p>More customizable and adjustable fit</p>
                                </div>
                            </Collapse>
                        </div>
                    </div>
                    <div>
                        <img src="https://scontent.fluh1-1.fna.fbcdn.net/v/t39.8562-6/353758784_831763108513531_8431478302700963582_n.jpg?stp=dst-webp&_nc_cat=109&ccb=1-7&_nc_sid=9a942e&_nc_ohc=uC8gKBYVErcAb78V0oc&_nc_ht=scontent.fluh1-1.fna&oh=00_AfD_f8Jvfob-km3GIa-NKU24N308K4jgBbWl438KyY2Fww&oe=66353CB7" style={{ height:"200px", width: "350px" }} alt="image" />
                        <h1 id="helloo">Meta Quest 2</h1>
                        <p id="yello">Starting at $999.99 USD</p>
                        <div style={{ textAlign: "left" }}>
                            <Button id="hellos">Detail</Button>
                        </div>
                        <div id="tyty">
                            <Button
                                onClick={() => setOpeno(!openo)}
                                aria-controls="example-collapse-text"
                                aria-expanded={openo}
                                id="hentroo"
                            >
                                <p>Description</p>
                            </Button>
                            <Collapse in={openo}>
                                <div id="example-collapse-text">
                                    <p>Mixed reality experiences, inclusive of immersive VR</p>
                                    <p>Highest resolution Infinity Display 25PPD</p>
                                    <p>Snapdragon® XR2 Gen 2</p>
                                    <p>Pancake lens</p>
                                    <p>More customizable and adjustable fit</p>
                                </div>
                            </Collapse>
                        </div>
                    </div>
                    <div>
                    <img src="https://scontent.fluh1-3.fna.fbcdn.net/v/t39.8562-6/431861267_808058731201126_4890778995840052651_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f537c7&_nc_ohc=i8MvxJjvTKMQ7kNvgGElaNf&_nc_ht=scontent.fluh1-3.fna&oh=00_AfA9tlGsIA9nKKs0O6z8_P1V3eN_mcCV-PPnqUGcOt83tQ&oe=66355FE0" style={{ marginBottom:"-60px", marginTop:"-40px", height:"300px", width: "350px" }} alt="image" />
                        <h1 id="helloo">Meta Quest 3</h1>
                        <p id="yello">Starting at $499.99 USD</p>
                        <div style={{ textAlign: "left" }}>
                            <Button id="hellos">Detail</Button>
                        </div>
                        <div id="tyty">

                            <Button
                                onClick={() => setOpenu(!openu)}
                                aria-controls="example-collapse-text"
                                aria-expanded={openu}
                                id="hentroo"
                            >
                                <p>Description</p>
                            </Button>
                            <Collapse in={openu}>
                                <div id="example-collapse-text">
                                    <p>Mixed reality experiences, inclusive of immersive VR</p>
                                    <p>Highest resolution Infinity Display 25PPD</p>
                                    <p>Snapdragon® XR2 Gen 2</p>
                                    <p>Pancake lens</p>
                                    <p>More customizable and adjustable fit</p>
                                </div>
                            </Collapse>

                        </div>
                    </div>
                    <div>
                    <img src="https://scontent.fluh1-1.fna.fbcdn.net/v/t39.8562-6/307437603_1103472866954527_7451113060627274321_n.jpg?stp=dst-webp&_nc_cat=100&ccb=1-7&_nc_sid=9a942e&_nc_ohc=4R8BPSSdavoQ7kNvgFCIK07&_nc_oc=AdgDfkFWvL9RUUdP6vbG5-OaI5bn3Qkmq7z6On9vlmCZgfMhpdqmrx_4JZPf6jKiq5E&_nc_ht=scontent.fluh1-1.fna&oh=00_AfBXOzvyK8USRmM8kUbFx5vwc-las317rJ2bcXKXHiz2uw&oe=6635667D" style={{ width: "350px" }} alt="image" />
                        <h1 id="helloo">Meta Quest Pro</h1>
                        <p id="yello">Starting at $999.99 USD</p>
                        <div style={{ textAlign: "left" }}>
                            <Button id="hellos">Detail</Button>
                        </div>
                        <div id="tyty">
                            <Button
                                onClick={() => setOpeny(!openy)}
                                aria-controls="example-collapse-text"
                                aria-expanded={openy}
                                id="hentroo"
                            >
                                <p>Description</p>
                            </Button>
                            <Collapse in={openy}>
                                <div id="example-collapse-text">
                                    <p>Mixed reality experiences, inclusive of immersive VR</p>
                                    <p>Highest resolution Infinity Display 25PPD</p>
                                    <p>Snapdragon® XR2 Gen 2</p>
                                    <p>Pancake lens</p>
                                    <p>More customizable and adjustable fit</p>
                                </div>
                            </Collapse>
                        </div>
                    </div>

                </Carousel>
            </div>

        </>
    )
}

export default Crousel;