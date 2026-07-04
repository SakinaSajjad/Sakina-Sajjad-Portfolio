import React from 'react';
import SectionHeader from './SectionHeader';
import shared from './shared.module.scss';
import Style from './Experience.module.scss';
import { info } from '../../info/Info';

export default function Experience({ innerRef }) {
    return (
        <section ref={innerRef} id="experience" className={`${shared.section} ${shared.altBg}`}>
            <div className={shared.container}>
                <SectionHeader
                    label="Experience"
                    heading="Professional experience & internships."
                    subheading="Hands-on learning through university internships and real administrative work."
                />

                <div className={Style.timeline}>
                    {info.experience.map((exp, i) => (
                        <div key={i} className={Style.item}>
                            <h3>{exp.role}</h3>
                            <div className={Style.meta}>
                                <span>{exp.company}</span>
                                <span>{exp.period}</span>
                                <span>{exp.location}</span>
                            </div>
                            <ul>
                                {exp.bullets.map((bullet, j) => (
                                    <li key={j}>{bullet}</li>
                                ))}
                            </ul>
                            <div className={Style.tags}>
                                {exp.tags.map((tag, j) => (
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
