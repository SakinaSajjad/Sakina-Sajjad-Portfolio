import React from 'react';
import SectionHeader from './SectionHeader';
import shared from './shared.module.scss';
import Style from './AboutSection.module.scss';
import { info } from '../../info/Info';

export default function AboutSection({ innerRef }) {
    return (
        <section ref={innerRef} id="about" className={`${shared.section} ${shared.altBg}`}>
            <div className={shared.container}>
                <SectionHeader label="About" heading={info.aboutHeading} />

                <div className={Style.grid}>
                    <div className={Style.textBlock}>
                        {info.aboutText.map((para, i) => (
                            <p key={i}>{para}</p>
                        ))}

                        <div className={Style.statsRow}>
                            {info.heroStats.map((stat, i) => (
                                <div key={i} className={Style.miniStat}>
                                    <div className={Style.value}>{stat.value}</div>
                                    <div className={Style.label}>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={Style.whatIDo}>
                        <h3>What I do</h3>
                        <ul>
                            {info.whatIDo.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
