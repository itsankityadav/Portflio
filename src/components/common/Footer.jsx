import { profile } from '../../data/resumeData';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p className="mb-1 footer-title">Copyright 2026 {profile.name} | Frontend &amp; WordPress Portfolio</p>
        <div className="footer-counter">
          <p className="footer-counter-label">{profile.title}</p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <div>
            <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">
              {profile.linkedinLabel}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
