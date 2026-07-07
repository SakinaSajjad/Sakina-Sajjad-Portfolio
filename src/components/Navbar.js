import React, { useState } from 'react';
import Style from './Navbar.module.scss';
import { HashLink } from 'react-router-hash-link';
import { info } from '../info/Info';
import ThemeToggle from './ThemeToggle';

const scrollWithOffset = (el) => {
    const y = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y - 80, behavior: 'smooth' });
};

const links = [
    { name: 'About', to: 'about', active: 'about' },
    { name: 'Services', to: 'services', active: 'services' },
    { name: 'Work', to: 'work', active: 'work' },
    { name: 'Education', to: 'education', active: 'education' },
    { name: 'Contact', to: 'contact', active: 'contact' },
];

export default function Navbar({ active, setActive }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = (linkActive) => {
        setActive(linkActive);
        setMenuOpen(false);
    };

    return (
        <>
            <nav className={Style.nav}>
                <div className={Style.inner}>
                    <HashLink
                        to="#home"
                        scroll={scrollWithOffset}
                        className={Style.logo}
                        onClick={() => handleClick('home')}
                    >
                        {info.initials}
                    </HashLink>

                    <div className={Style.links}>
                        {links.map((link) => (
                            <HashLink
                                key={link.to}
                                to={`#${link.to}`}
                                scroll={scrollWithOffset}
                                className={`${Style.link} ${active === link.active ? Style.active : ''}`}
                                onClick={() => handleClick(link.active)}
                            >
                                {link.name}
                            </HashLink>
                        ))}
                    </div>

                    <div className={Style.actions}>
                        <ThemeToggle />
                        <HashLink
                            to="#contact"
                            scroll={scrollWithOffset}
                            className={Style.cta}
                            onClick={() => handleClick('contact')}
                        >
                            Get in Touch
                        </HashLink>
                    </div>

                    <button
                        className={Style.mobileToggle}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <i className={menuOpen ? 'fa fa-times' : 'fa fa-bars'} />
                    </button>
                </div>
            </nav>

            <div className={`${Style.mobileMenu} ${menuOpen ? Style.open : ''}`}>
                {links.map((link) => (
                    <HashLink
                        key={link.to}
                        to={`#${link.to}`}
                        scroll={scrollWithOffset}
                        className={`${Style.link} ${active === link.active ? Style.active : ''}`}
                        onClick={() => handleClick(link.active)}
                    >
                        {link.name}
                    </HashLink>
                ))}
                <div className={Style.mobileActions}>
                    <ThemeToggle />
                    <HashLink
                        to="#contact"
                        scroll={scrollWithOffset}
                        className={Style.cta}
                        onClick={() => handleClick('contact')}
                    >
                        Get in Touch
                    </HashLink>
                </div>
            </div>
        </>
    );
}
