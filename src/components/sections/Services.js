import React from 'react';
import SectionHeader from './SectionHeader';
import shared from './shared.module.scss';
import Style from './Services.module.scss';
import { info } from '../../info/Info';

export default function Services({ innerRef }) {
    return (
        <section ref={innerRef} id="services" className={shared.section}>
            <div className={shared.container}>
                <SectionHeader
                    label="Services"
                    heading="Everything you need to bring an idea to life."
                    subheading="From polished frontends to full-stack builds — focused, clean, and ready to ship."
                />

                <div className={Style.grid}>
                    {info.services.map((service, i) => (
                        <div key={i} className={`${shared.card} ${Style.card}`}>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <div className={Style.tags}>
                                {service.tags.map((tag, j) => (
                                    <span key={j} className={shared.tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
