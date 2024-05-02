import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
function ContactUs() {
    return (
        <>
            <div style={{display:"flex"}}>
                <div>
                    <img style={{ marginLeft:"40px", marginRight:"40px",width:"500px" , height:"400px"}} src="https://www.medianama.com/wp-content/uploads/2023/01/meta-6946715_1280-1024x576.jpg" alt=""  />
                </div>
                <div>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
                        <Form.Control
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                        />
                    </InputGroup>
                    <br />
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            Default
                        </InputGroup.Text>
                        <Form.Control
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>
                    <br />
                    <InputGroup size="lg">
                        <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
                        <Form.Control
                            aria-label="Large"
                            aria-describedby="inputGroup-sizing-sm"
                        />
                    </InputGroup>
                </div>
            </div>
        </>
    )
}

export default ContactUs;