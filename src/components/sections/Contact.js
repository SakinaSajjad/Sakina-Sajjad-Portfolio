import React from 'react';
import SectionHeader from './SectionHeader';
import shared from './shared.module.scss';
import Style from './Contact.module.scss';
import { info } from '../../info/Info';

export default function Contact({ innerRef }) {
    return (
        <section ref={innerRef} id="contact" className={shared.section}>
            <div className={shared.container}>
                <SectionHeader
                    label="Contact"
                    heading="Let's build something together."
                    subheading="Have a project in mind or want to connect? Reach out directly — this is my personal developer portfolio."
                />

                <div className={Style.cards}>
                    <a href={`mailto:${info.email}`} className={`${shared.card} ${Style.card}`}>
                        <i className="fa fa-envelope" />
                        <h3>Email me</h3>
                        <p>{info.email}</p>
                    </a>

                    <a href={`tel:${info.phone.replace(/\s/g, '')}`} className={`${shared.card} ${Style.card}`}>
                        <i className="fa fa-phone" />
                        <h3>Call / WhatsApp</h3>
                        <p>{info.phone}</p>
                    </a>

                    <div className={`${shared.card} ${Style.card} ${Style.static}`}>
                        <i className="fa fa-map-marker" />
                        <h3>Location</h3>
                        <p>{info.location}</p>
                    </div>

                    {info.socials.map((social, i) => (
                        <a
                            key={i}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${shared.card} ${Style.card}`}
                        >
                            <i className={social.icon} />
                            <h3>{social.label}</h3>
                            <p>Connect on {social.label}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
