import Twitter from '../images/twitter-logo.png'
import FacebookLogo from '../images/facebook-logo.png'
import InstagramLogo from '../images/instagram-logo.png'
import GithubLogo from '../images/github-logo.png'



export default function Footer() {
    return (
        <div className="footer--section">
            <a href='https://twitter.com/lonka_pardhu' target="_blank">
                <img src={Twitter} alt="twitter-logo" className='foot-image' />
            </a>
            <a href='#'>
                <img src={InstagramLogo} alt="instagram-logo" className='foot-image' />
            </a>
            <a href='#'>
                <img src={FacebookLogo} alt="facebook-logo" className='foot-image' />
            </a>
            <a href='https://github.com/Lonka-Pardhu' target="_blank">
                <img src={GithubLogo} alt="github-logo" className='foot-image' />
            </a>
        </div>
    )
}