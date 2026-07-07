import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Style from './Footer.module.scss';
import { info } from '../../info/Info';

const scrollWithOffset = (el) => {
    const y = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y - 80, behavior: 'smooth' });
};

const navLinks = [
    { label: 'About', to: 'about' },
    { label: 'Services', to: 'services' },
    { label: 'Work', to: 'work' },
    { label: 'Education', to: 'education' },
    { label: 'Contact', to: 'contact' },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className={Style.footer}>
            <div className={Style.inner}>
                <div className={Style.top}>
                    <div className={Style.brand}>
                        <h3>{info.fullName}</h3>
                        <p>
                            Aspiring Mobile Developer & AI Enthusiast — building cross-platform apps
                            with React Native, web experiences with React.js, and ML-powered solutions.
                        </p>
                    </div>

                    <div className={Style.col}>
                        <h4>Navigate</h4>
                        <ul>
                            {navLinks.map((link) => (
                                <li key={link.to}>
                                    <HashLink to={`#${link.to}`} scroll={scrollWithOffset}>
                                        {link.label}
                                    </HashLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={Style.col}>
                        <h4>Get in touch</h4>
                        <ul>
                            <li>
                                <a href={`mailto:${info.email}`}>{info.email}</a>
                            </li>
                            {info.socials.map((social, i) => (
                                <li key={i}>
                                    <a href={social.link} target="_blank" rel="noopener noreferrer">
                                        {social.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className={Style.bottom}>
                    <p>© {year} {info.fullName}. Designed & built from scratch.</p>
                    <HashLink to="#home" scroll={scrollWithOffset}>Back to top ↑</HashLink>
                </div>
            </div>
        </footer>
    );
}
