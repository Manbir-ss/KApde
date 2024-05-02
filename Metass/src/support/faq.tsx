import Accordion from 'react-bootstrap/Accordion';
import Frintoo from '../Footer';
function Faq() {
    return (
        <>
            <div style={{ display: "flex" }}>
                <div style={{ textAlign: "left", marginLeft: "40px", marginTop: "100px" }} >
                    <h2 id="changes">Frequently</h2>
                    <h2 id="changes">Asked</h2>
                    <h2 id="changes">Questions</h2>
                    <br></br>
                    <p id="changes">Get a question ? Find the question in our FAQ page</p>
                    <p id="changes">Your question didn't answered use our</p>
                    <a id="changes" href="#">Contact Form</a>
                </div>
                <div>
                    <img style={{ marginTop: "-100px", width: "600px", backgroundColor: "white" }} src="https://lookaside.fbsbx.com/elementpath/media/?media_id=1228044461248249&version=1711702929&transcode_extension=webp" alt="" />
                </div>
            </div>
            <div style={{ marginTop: "100px", border: "none", marginLeft: "40px", marginRight: "40px" }}>
                <div id="spacing">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header id="hollowing" style={{ border: "none" }}> What is your return policy?</Accordion.Header>
                            <Accordion.Body id="hollowing">
                                We have a flexible return policy. If you're not satisfied with your purchase, you can return most items within 30 days for a full refund or exchange. Please review our Return Policy for more details.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div id="spacing">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header id="hollowing" style={{ border: "none" }}> Can I track my order?</Accordion.Header>
                            <Accordion.Body id="hollowing">
                            Yes, you can track your order's status. Once your order is shipped, you will receive a tracking number via email. You can use this tracking number to monitor the progress of your delivery.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div id="spacing">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header id="hollowing" style={{ border: "none" }}>  How long will it take to receive my order?</Accordion.Header>
                            <Accordion.Body id="hollowing">
                            Delivery times may vary depending on your location and the shipping method you choose. Typically, orders are processed and shipped within 1-2 business days. You can check the estimated delivery time during checkout.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div id="spacing">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header id="hollowing" style={{ border: "none" }}>  What payment methods do you accept?</Accordion.Header>
                            <Accordion.Body id="hollowing">
                            We accept a variety of payment methods, including credit cards (Visa, MasterCard, American Express), PayPal, and more. You can choose your preferred payment option during the checkout process.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div id="spacing">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header id="hollowing" style={{ border: "none" }}>  How can I place an order?</Accordion.Header>
                            <Accordion.Body id="hollowing">
                            To place an order, simply browse our online store, add the items you want to your cart, and proceed to checkout. Follow the prompts to enter your shipping information and payment details to complete your purchase.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div id="spacing">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header id="hollowing" style={{ border: "none" }}>  What is the delivery process for furniture purchases?</Accordion.Header>
                            <Accordion.Body id="hollowing">
                            We offer convenient and reliable furniture delivery services. After making your purchase, our team will contact you to schedule a delivery time that suits your availability. Our delivery professionals will assemble and set up the furniture in your desired room. Please refer to our Delivery Information page for more details.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div id="spacing">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header id="hollowing" style={{ border: "none" }}>  Do you provide warranty coverage for furniture items?</Accordion.Header>
                            <Accordion.Body id="hollowing">
                            Yes, many of our furniture items come with manufacturer warranties that cover structural defects and craftsmanship issues. The duration and terms of the warranty may vary by product. You can find warranty information in the product descriptions, or you can contact our customer support team for specific details.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div id="spacing">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header id="hollowing" style={{ border: "none" }}> Can I order both physical books and e-books from your store?</Accordion.Header>
                            <Accordion.Body id="hollowing">
                            Yes, you can choose from a wide selection of physical books and e-books in our store. Simply browse our catalog and select your preferred format for each title. Physical books will be delivered to your address, while e-books can be downloaded instantly upon purchase
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div id="spacing">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header  id="hollowing" style={{ border: "none" }}> What is your return policy?</Accordion.Header>
                            <Accordion.Body id="hollowing">
                                We have a flexible return policy. If you're not satisfied with your purchase, you can return most items within 30 days for a full refund or exchange. Please review our Return Policy for more details.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div id="spacing">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header id="hollowing" style={{ border: "none" }}> What is your return policy?</Accordion.Header>
                            <Accordion.Body id="hollowing">
                                We have a flexible return policy. If you're not satisfied with your purchase, you can return most items within 30 days for a full refund or exchange. Please review our Return Policy for more details.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div >
            </div>
            <Frintoo/>
        </>
    )
}
export default Faq;