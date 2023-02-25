import MailLogo from '../images/mail--logo.png';
import LinkedinLogo from '../images/linkedin--logo.png';
import ProfilePic from '../images/profile-pic.jpg'


export default function Info() {
    return (
        <div className='head--section'>

            <img className="head-profile" src={ProfilePic} alt="profilepic" />

            <div className="head--info">
                <h3 className="head--name">Lonka Pardhu</h3>
                <h4 className="head--prof">Frontend Developer</h4>
                <p className="head--site">lonkapardhu.site</p>
            </div>

            <div className="buttons">
                <button className='button-email'>
                    <img src={MailLogo} alt="email-logo" className='Email-Logo' />
                    Email</button>
                <button className='button-linkedin'>
                    <img src={LinkedinLogo} alt="linkedin-logo" className='Linkedin-Logo' />
                    LinkedIn</button>
            </div>

        </div>
    )
}