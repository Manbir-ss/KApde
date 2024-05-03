
import Frintoo from "../Footer";
import imging from "../imagess/icons8-page-100.png"
function Terms_Conditions(){
    return(
        <>
        <img src={imging} alt=""/>
        <div style={{marginBottom:"40px", marginTop:"30px"}}>
        <h2 className="termsin">Terms & condition</h2>
        </div>
        <div style={{display:"flex"}}>
            <div style={{marginLeft:"100px",textAlign:"left"}}>
                <h3>Meta Policies</h3>
                <p>Information About Copyright</p>
                <p>Intellectual property infringement</p>
                <br />
                <h3>Safety</h3>
                <p>What to do if someone posts about suicide or self-injury</p>
                <p>My account was hacked or someone is using it without my permission</p>

            </div>
            <div style={{ marginLeft:"100px",textAlign:"left"}}>
                <h3>Information About Copyright</h3>
                <h4>Copyright</h4>
                <p>The FAQs in this section provide some information about</p>
                <p>copyrights, including how you can protect your own copyrighted</p>
                <p>works and avoid infringing the copyrights of other people when</p>
                <p>posting to Facebook and Instagram, as well 
                    as how Facebook and Instagram addresses 
                    reports of copyright infringement. If you
                     believe someone is using your copyrighted
                      work without your permission, you
                       can fill out <a href="https://www.facebook.com/help/contact/1758255661104383">this form for Facebook</a> . And <a href="https://help.instagram.com/contact/372592039493026">this form
                        for Instagram.</a> </p>
                <br />
                <p>Please note that laws in different countries may vary.
                     For more information on copyright law, you can visit
                      the website of the U.S.<a href="https://www.copyright.gov/">Copyright Office</a> or the 
                     <a href="https://www.wipo.int/portal/en/index.html">World Intellectual Property Organization (WIPO)</a> . 
                      Instagram can't provide you with legal advice, 
                      so you may want to speak with an attorney if you 
                      have more questions about copyright</p>
                <br />
                <br />
                <h3>Intellectual property across Meta platforms</h3>
                <h4>About Intellectual Property</h4>
                <p>Meta is committed to helping people and organizations 
                    protect their intellectual property rights. 
                    The <a href="https://www.facebook.com/legal/terms">Terms of Use</a> do not allow posting content
                     that violates someone else's intellectual 
                     property rights,
                     including copyright and trademark.</p>
                     <br />
                <h4>Copyright</h4>
                <p>Copyright is a legal right that seeks to protect original works of
                     authorship (example: books, music, film, art).</p>
                    <br />
                <p>Generally, copyright protects original expression such as words or images.
                     It does not protect facts and ideas, although it may protect the original 
                     words or images used to describe an idea. Copyright also doesn’t protect
                      things like names, titles and slogans; however, another legal right called
                       a trademark might protect those.</p>
                       <br />
                <p>Learn more about <a href="https://help.instagram.com/126382350847838">reporting copyright violations.</a> reporting copyright violations.</p>
                <br />
                <br />
                <h3>Trademark</h3>
                <p>A trademark is a word, slogan, symbol or design (example: brand name, logo) that distinguishes the products or services offered by one person, 
                    group or company from another. Generally, trademark law seeks to prevent confusion among consumers about who provides or is affiliated with a 
                    product or service.</p>
                    <br />
                 <p>Learn more about <a href="https://help.instagram.com/222826637847963">reporting trademark violations.</a></p>   
                 <br />
                 <br />
                <h3>I'm worried about someone after seeing content they've shared about suicide or self-injury</h3>
                <p>If your friend is in immediate danger, call local emergency services immediately. Don't wait.</p>
                <br />
                <p>It can be very hard to know what to say to someone who's told you that they're considering suicide, or who seems to be thinking about it but may not have told you directly.</p>
                <p>Encouraging your friend to talk about what they're going through can be one of the most helpful things you can do for them. Being a good listener, and giving them the space they need to talk is important, as is following up with them regularly. You also can help by getting them to someone else they can trust, like a health care professional or another friend.</p>
                <p>We've worked with suicide prevention experts to understand the best ways to support a person who's having suicidal thoughts. This list is informed by the work that <a href="https://intheforefront.org/">Forefront: Innovations in Suicide Prevention has done on suicide prevention.</a></p>
                <br />
                <h3>What to do if someone posts about suicide or self-injury</h3>
                <p>If someone you know is in danger, please contact local emergency services immediately for help.</p>
                <p>After you've called emergency services, connect with your friend or call someone who can. Showing that you care matters. Make sure they know that you're there for them and that they aren't alone.</p>
                <p>If the threat of physical danger isn't immediate, use the resources below.</p>
          </div>
        </div>
        <Frintoo/>
        
        </>
    )
}

export default Terms_Conditions;