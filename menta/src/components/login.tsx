import imgesk from "../imagess/Download man sitting icy the table with laptop for free.jpg"
import insta from "../imagess/instagram-logo-5744708_640.png"
import face from "../imagess/facebook-3000954_640.png"
import twitt from "../imagess/twitter-3000965_640.png"
import Button from 'react-bootstrap/Button';
function Login() {
    return (
        <>
            <div style={{display:"flex"}}>
                <div>
                    <img style={{marginLeft:"50px",height:"650px",width:"500px"}} src={imgesk} alt="" />
                </div>
                <div style={{marginLeft:"50px",marginTop:"170px"}}>
                    <h2>Login Form</h2>
                    <input type="email" placeholder="Email" id="fname" name="fname" />
                    <br />
                    <input type="password" placeholder="Password" id="fname" name="fname" />
                    <br />
                    <div className="subs">
                    <Button style={{ marginBottom:"40px", marginTop: "20px" }} type="submit">Submit</Button>
                    </div>
                    <p style={{textAlign:"left"}}>Or Login With :</p>
                    <div style={{display:"flex"}}>
                        <a href="https://www.instagram.com/"><img style={{height:"40px", width:"40px"}} src={insta} alt=""/></a>
                        <a href="https://twitter.com/?lang=en"><img style={{ marginLeft:"10px",height:"40px", width:"40px"}} src={twitt} alt=""/></a>
                        <a href="https://www.facebook.com/"><img style={{height:"40px", width:"40px"}} src={face} alt=""/></a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login;