import React, { useState } from 'react';
import Style from './ContactForm.module.scss';
import shared from './shared.module.scss';
import { info } from '../../info/Info';

export default function ContactForm() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
        const body = encodeURIComponent(
            `Hi Sakina,\n\n${form.message}\n\n---\nFrom: ${form.name}\nReply to: ${form.email}`
        );
        window.location.href = `mailto:${info.email}?subject=${subject}&body=${body}`;
        setStatus('Opening your email app...');
        setTimeout(() => setStatus(''), 3000);
    };

    return (
        <div className={Style.wrapper}>
            <h3 className={Style.heading}>Send me a message</h3>
            <p className={Style.subtext}>
                Fill out the form below and your email client will open with everything ready to send.
            </p>

            <form className={Style.form} onSubmit={handleSubmit}>
                <div className={Style.row}>
                    <label htmlFor="contact-name">Your name</label>
                    <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={form.name}
                        onChange={handleChange}
                    />
                </div>

                <div className={Style.row}>
                    <label htmlFor="contact-email">Your email</label>
                    <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange}
                    />
                </div>

                <div className={Style.row}>
                    <label htmlFor="contact-message">Message</label>
                    <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Hi Sakina, I'd like to discuss..."
                        value={form.message}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className={shared.btnPrimary}>
                    <i className="fa fa-paper-plane" />
                    Send Message
                </button>

                {status && <p className={Style.status}>{status}</p>}
            </form>
        </div>
    );
}
