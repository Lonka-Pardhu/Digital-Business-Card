import MailLogo from '../images/mail--logo.png';
import LinkedinLogo from '../images/linkedin--logo.png';
import ProfilePic from '../images/profile-pic.jpg'

// function link() {
//     return window.open('https://www.linkedin.com/in/lonka-pardhu99/', '_blank')
// }
export default function Info() {
    return (

        <div className='head--section'>

            <img className="head-profile" src={ProfilePic} alt="profile-pic" />

            <div className="head--info">
                <h3 className="head--name">Lonka Pardhu</h3>
                <h4 className="head--prof">Frontend Developer</h4>
                <p className="head--site">lonkapardhu.site</p>
            </div>

            <div className="buttons">
                <button className='button-email'>
                    <img src={MailLogo} alt="email-logo" className='Email-Logo' />
                    Email</button>

                <button className='button-linkedin' onClick={() => window.open('https://www.linkedin.com/in/lonka-pardhu99/', '_blank')}>
                    {/* <button className='button-linkedin' onClick={link}> */}
                    <img src={LinkedinLogo} alt="linkedin-logo" className='Linkedin-Logo' />
                    LinkedIn</button>
            </div>
        </div >
    )
}