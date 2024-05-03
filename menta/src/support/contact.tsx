import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Frintoo from '../Footer';
import Button from 'react-bootstrap/Button';
import imges from "../imagess/Vr Interface Vector Art PNG, Purple Gradient User Interface Technology Vr Illustration, Purple, Gradient, Technology Vr Illustration PNG Image For Free Download.jpg"
function ContactUs() {
    return (
        <>
            <div style={{ backgroundImage:"linear-gradient(white,skyblue,white)", display: "flex" }}>
                <div>
                    <img style={{ marginTop:"70px", borderRadius: "20px", marginLeft: "40px", marginRight: "40px", width: "500px", height: "400px" }} src="https://roadtovrlive-5ea0.kxcdn.com/wp-content/uploads/2023/06/apple-vision-pro-vs-meta-quest-3-2-1-1021x580.jpg" alt="" />
                </div>
                <div>
                    <h2 style={{ fontWeight: "bolder", marginBottom: "30px", fontFamily: "sans-serif" }}>Send Us A Messege</h2>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            Name
                        </InputGroup.Text>
                        <Form.Control
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>
                    <br />
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            Email
                        </InputGroup.Text>
                        <Form.Control
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>
                    <br />
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            Phone Number
                        </InputGroup.Text>
                        <Form.Control
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>
                    <br />
                    <textarea id="subject" name="subject" placeholder="Messege.." style={{height:"200px"}}></textarea>
                    <Button style={{ marginBottom:"40px", marginTop: "20px" }} type="submit">Submit</Button>
                </div>
            </div>
            <Frintoo />
        </>
    )
}

export default ContactUs;