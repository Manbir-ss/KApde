import { useNavigate } from "react-router-dom";

function Frintoo() {
    const naviagteno = useNavigate();
  const goToContactio=()=>{
      naviagteno("/faq")
  }
    return (
        <div style={{ width: "100%", float: "left" }}>
            
            <div  style={{ marginTop:"60px", paddingTop:"60px" , paddingBottom:"60px" , backgroundColor:"whitesmoke",  display: "flex" }}>
                <div style={{  marginLeft: "20px", textAlign: "left", marginBottom: "60px" }}>
                    <a style={{ marginLeft: "-8px", marginTop: "300px" }} id="hello" >
                        {/* <FontAwesomeIcon className='fixeden' icon={faInfinity} size="1x" /> */}
                        <img className="metass" style={{ height: "20px", width: "40px" }} src="https://1000logos.net/wp-content/uploads/2021/10/logo-Meta.png" />
                    </a>Meta
                    <p id="yell" style={{ marginTop: "30px" }}>Follow Us</p>
                    <div style={{ marginLeft: "-10px" }} >
                        <a><img id="icons" src="https://scontent.fluh1-2.fna.fbcdn.net/v/t39.8562-6/275775241_706660317361134_8955597739986331891_n.png?_nc_cat=1&ccb=1-7&_nc_sid=f537c7&_nc_ohc=xySiXnKgWe4Q7kNvgE32mMJ&_nc_ht=scontent.fluh1-2.fna&oh=00_AfDpZiPGTXTVO089di5_XCNl520UjKJi6ljUh4xJEGTzAg&oe=66353282" alt="" /></a>
                        <a><img id="icons" src="https://scontent.fluh1-1.fna.fbcdn.net/v/t39.8562-6/375968976_3592877074321286_1710176348628188216_n.png?_nc_cat=102&ccb=1-7&_nc_sid=f537c7&_nc_ohc=ZUu3zaUYQwQQ7kNvgGK_X7Z&_nc_ht=scontent.fluh1-1.fna&oh=00_AfDa0QEkkUCmflrg8DH8Q01fpn0tMNaIIcizqd0h_jSxeA&oe=663540C8" alt="" /></a>
                        <a><img id="icons" src="https://scontent.fluh1-1.fna.fbcdn.net/v/t39.8562-6/276079790_239645664974434_7595452976573962628_n.png?_nc_cat=102&ccb=1-7&_nc_sid=f537c7&_nc_ohc=WUd6RlNagVQQ7kNvgGHiRgL&_nc_ht=scontent.fluh1-1.fna&oh=00_AfC7y2SiMD5T_nE0__chbWTcj0heTsP-mOnBTQEBk3WKgw&oe=663525F1" alt="" /></a>
                        <a><img id="icons" src="https://scontent.fluh1-2.fna.fbcdn.net/v/t39.8562-6/276008099_472069827986519_2757774944745661943_n.png?_nc_cat=1&ccb=1-7&_nc_sid=f537c7&_nc_ohc=HpTnOaZLokEQ7kNvgEGXx4j&_nc_ht=scontent.fluh1-2.fna&oh=00_AfAIUBxfCykYOkKmKek9FfDBmd1l64mFkOwLECYOp88xsg&oe=663529E5" alt="" /></a>
                        <a><img id="icons" src="https://scontent.fluh1-3.fna.fbcdn.net/v/t39.8562-6/275949698_3248957128655833_369430323747988984_n.png?_nc_cat=101&ccb=1-7&_nc_sid=f537c7&_nc_ohc=302m61BwwdkQ7kNvgF5cfSk&_nc_ht=scontent.fluh1-3.fna&oh=00_AfCY31Pxf1HfcJPU2ktftatcswQHQZ05578QYrev4hNPGQ&oe=66354B6E" alt="" /></a>
                        <a><img id="icons" src="https://scontent.fluh1-2.fna.fbcdn.net/v/t39.8562-6/434686573_965393648261200_4295680538668886162_n.png?_nc_cat=105&ccb=1-7&_nc_sid=f537c7&_nc_ohc=ccpjBX1mLxoQ7kNvgEKgBI-&_nc_ht=scontent.fluh1-2.fna&oh=00_AfAUAcQSJB9jCILXwoaf3SyQSBSaloJwdKljm_5Hbza77g&oe=66353BE1" alt="" /></a>
                    </div>

                </div>
                <div style={{ paddingTop:"1px" , paddingBottom:"60px" ,  marginLeft: "100px", textAlign: "left" }}>
                    <h6>Virtual Reality</h6>
                    
                    <a id="yell" href="#">Shop Meta quest</a>
                    <br ></br>
                    <a id="yell" href="#">Blog</a>
                    <br></br>
                    <a id="yell" href="#">Forums</a>
                    <br></br>
                    <a id="yell" href="#">Developers</a>
                    <br></br>
                    <a id="yell" href="#">information</a>
                    <br></br>
                    <a id="yell" href="#">Referrals</a>
                    <br></br>
                    <a id="yell" href="#">Creators</a>
                    <br></br>
                    <a id="yell" href="#">VR For Good</a>
                    <br></br>
                </div>
                <div style={{paddingTop:"1px" , paddingBottom:"60px" , marginLeft: "100px", textAlign: "left" }}>
                    <h6>Smart Glasses</h6>
                    
                    <a id="yell" href="#">Shop Ray Ban meta Smart</a>
                    <br></br>
                    <a id="yell" href="#">Glasses</a>
                    <br></br>
                    <a id="yell" href="#">Privacy Information</a>
                    <br></br>
                    <a id="yell" href="#">Supported Countries</a>
                    <br></br>
                    <br></br>
                    <h6>Support</h6>
                    <a id="yell" href="#">Returns</a>
                    <br></br>
                    <a id="yell" href="#">Legal</a>
                    <br></br>
                    <a id="yell" onClick={()=>goToContactio()} href="#">Faq</a>
                    <br></br>
                    <a id="yell" href="#">Insta Help Center</a>
                    <br></br>
                    <a id="yell" href="#">Facebook Help Center</a>
                    <br></br>
                    <a id="yell" href="#">Twitter Help Center</a>
                    <br></br>
                    <a id="yell" href="#">Messenger Help Center</a>
                    <br></br>
                </div>
                <div style={{paddingTop:"1px" , paddingBottom:"60px" , justifyContent:"space-around" , marginLeft: "100px", textAlign: "left" }}>
                    <h6>About Us</h6>
                    <a id="yell" href="#">About Meta</a>
                    <br ></br>
                    <a id="yell" href="#">Media Gallery</a>
                    <br></br>
                    <a id="yell" href="#">Brand Resources</a>
                    <br></br>
                    <a id="yell" href="#">For Investors</a>
                    <br></br>
                    <br></br>
                   
                    <h6>Our Community</h6>
                    <a id="yell" href="#">Support SMB</a>
                    <br></br>
                    <a id="yell" href="#">Giving Together</a>
                    <br></br>
                    <a id="yell" href="#">Social Impact</a>
                    <br></br>
                    <a id="yell" href="#">VR For Good</a>
                    <br></br>
                </div>
            </div>
            <div style={{ display:"flex"}}>
            <a id="scent">@ 2024 Meta</a>
            <a href="#" id="scent">Community Standards</a>
            <a href="#" id="scent">Privacy Policy</a>
            <a href="#" id="scent">Terms</a>
            <a href="#" id="scent">Cokkie Policy</a>
            </div>
        </div>
    )
}

export default Frintoo;