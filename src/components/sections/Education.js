import React from 'react';
import SectionHeader from './SectionHeader';
import shared from './shared.module.scss';
import Style from './Education.module.scss';
import { info } from '../../info/Info';

export default function Education({ innerRef }) {
    return (
        <section ref={innerRef} id="education" className={shared.section}>
            <div className={shared.container}>
                <SectionHeader
                    label="Education & Courses"
                    heading="Academic background & continuous learning."
                    subheading="From NUML to online certifications — always building my foundation."
                />

                <div className={Style.grid}>
                    {info.education.map((edu, i) => (
                        <div key={i} className={shared.card}>
                            <div className={Style.item}>
                                <h3>{edu.degree}</h3>
                                <div className={Style.school}>{edu.school}</div>
                                <div className={Style.meta}>{edu.period}</div>
                                <div className={Style.detail}>{edu.detail}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={Style.languages}>
                    <h3>Languages</h3>
                    <div className={Style.tags}>
                        {info.languages.map((lang, i) => (
                            <span key={i} className={shared.tag}>{lang}</span>
                        ))}
                    </div>
                </div>

                <div className={Style.courses}>
                    <div className={shared.card}>
                        <h3>Coursera</h3>
                        <ul>
                            {info.courses.coursera.map((course, i) => (
                                <li key={i}>{course}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={shared.card}>
                        <h3>Kaggle</h3>
                        <ul>
                            {info.courses.kaggle.map((course, i) => (
                                <li key={i}>{course}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
