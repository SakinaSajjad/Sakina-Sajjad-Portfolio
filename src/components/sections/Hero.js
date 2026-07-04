import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Style from './Hero.module.scss';
import shared from './shared.module.scss';
import { info } from '../../info/Info';

const scrollWithOffset = (el) => {
    const y = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y - 80, behavior: 'smooth' });
};

export default function Hero({ innerRef }) {
    return (
        <section ref={innerRef} id="home" className={Style.hero}>
            <div className={Style.inner}>
                <div className={Style.heroGrid}>
                    <div className={Style.content}>
                        <div className={Style.badge}>
                            <span className={Style.dot} />
                            {info.availability}
                        </div>

                        <h1 className={Style.name}>
                            <span className={Style.gradient}>{info.firstName}</span>
                            <br />
                            {info.lastName}
                        </h1>

                        <p className={Style.role}>{info.position}</p>

                        <div className={Style.contactRow}>
                            <span><i className="fa fa-phone" /> {info.phone}</span>
                            <span className={Style.sep}>•</span>
                            <a href={`mailto:${info.email}`}><i className="fa fa-envelope" /> {info.email}</a>
                            <span className={Style.sep}>•</span>
                            <span><i className="fa fa-map-marker" /> {info.location}</span>
                            {info.socials.map((s, i) => (
                                <React.Fragment key={i}>
                                    <span className={Style.sep}>•</span>
                                    <a href={s.link} target="_blank" rel="noopener noreferrer">
                                        <i className={s.icon} /> {s.label}
                                    </a>
                                </React.Fragment>
                            ))}
                        </div>

                        <p className={Style.description}>{info.heroDescription}</p>

                        <div className={Style.actions}>
                            <HashLink to="#contact" scroll={scrollWithOffset} className={shared.btnPrimary}>
                                Get in Touch
                            </HashLink>
                            <HashLink to="#work" scroll={scrollWithOffset} className={shared.btnSecondary}>
                                View Projects
                            </HashLink>
                            <a
                                href="https://github.com/SakinaSajjad"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={shared.btnSecondary}
                            >
                                <i className="fa fa-github" /> GitHub
                            </a>
                        </div>

                        <div className={Style.stats}>
                            {info.heroStats.map((stat, i) => (
                                <div key={i} className={Style.statCard}>
                                    <div className={Style.value}>{stat.value}</div>
                                    <div className={Style.label}>{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <div className={Style.eduBanner}>
                            {info.education[0].degree} · {info.education[0].school} · {info.education[0].detail}
                        </div>
                    </div>

                    <div className={Style.photoWrap}>
                        <img src={info.profileImage} alt={info.fullName} />
                    </div>
                </div>
            </div>
        </section>
    );
}
