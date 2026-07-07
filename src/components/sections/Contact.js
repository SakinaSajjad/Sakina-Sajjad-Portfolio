import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import shared from './shared.module.scss';
import Style from './Contact.module.scss';
import ContactForm from './ContactForm';
import { info } from '../../info/Info';

export default function Contact({ innerRef }) {
    const [copied, setCopied] = useState(false);

    const copyWhatsApp = async () => {
        const number = info.whatsappNumber;
        try {
            await navigator.clipboard.writeText(number);
        } catch {
            const el = document.createElement('textarea');
            el.value = number;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
        }
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

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

                    <button
                        type="button"
                        className={`${shared.card} ${Style.card} ${Style.whatsappBtn}`}
                        onClick={copyWhatsApp}
                    >
                        <i className="fa fa-whatsapp" />
                        <h3>WhatsApp</h3>
                        <p>{copied ? 'Number copied to clipboard!' : 'Click to copy my WhatsApp number'}</p>
                    </button>

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

                <ContactForm />
            </div>
        </section>
    );
}
