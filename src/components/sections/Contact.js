import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import shared from './shared.module.scss';
import Style from './Contact.module.scss';
import { info } from '../../info/Info';

export default function Contact({ innerRef }) {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
        const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
        window.location.href = `mailto:${info.email}?subject=${subject}&body=${body}`;
    };

    return (
        <section ref={innerRef} id="contact" className={shared.section}>
            <div className={shared.container}>
                <SectionHeader
                    label="Contact"
                    heading="Let's build something together."
                    subheading="Have a project in mind or want to connect? I'd love to hear from you."
                />

                <div className={Style.layout}>
                    <div className={Style.infoBlock}>
                        <h3>Email</h3>
                        <a href={`mailto:${info.email}`}>{info.email}</a>

                        <h3>Phone</h3>
                        <a href={`tel:${info.phone.replace(/\s/g, '')}`}>{info.phone}</a>

                        <h3>Location</h3>
                        <p>{info.location}</p>

                        <h3>Social</h3>
                        <div className={Style.socials}>
                            {info.socials.map((social, i) => (
                                <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                                    <i className={social.icon} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <form className={Style.form} onSubmit={handleSubmit}>
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Your name"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            required
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="you@email.com"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            required
                        />
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            placeholder="Tell me about your project..."
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            required
                        />
                        <button type="submit" className={shared.btnPrimary}>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
