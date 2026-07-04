import React from 'react';
import SectionHeader from './SectionHeader';
import shared from './shared.module.scss';
import Style from './TechStack.module.scss';
import { info } from '../../info/Info';

export default function TechStack() {
    const allTech = [
        ...info.techStack.mobile,
        ...info.techStack.frontend,
        ...info.techStack.backend,
        ...info.techStack.data,
        ...info.techStack.ai,
        ...info.techStack.tools,
    ];
    const doubled = [...allTech, ...allTech];

    const categories = [
        { title: 'Mobile', items: info.techStack.mobile },
        { title: 'Frontend', items: info.techStack.frontend },
        { title: 'Backend', items: info.techStack.backend },
        { title: 'Database', items: info.techStack.data },
        { title: 'AI & ML', items: info.techStack.ai },
        { title: 'Tools', items: info.techStack.tools },
    ];

    return (
        <section id="tech" className={`${shared.section} ${shared.altBg}`}>
            <div className={shared.container}>
                <SectionHeader
                    label="Tech Stack"
                    heading="The tools I build with."
                    subheading="From React Native and React.js to Python ML, ASP.NET Core, and SQL databases."
                    centered
                />

                <div className={Style.marquee}>
                    <div className={Style.track}>
                        {doubled.map((tech, i) => (
                            <span key={i} className={Style.item}>{tech}</span>
                        ))}
                    </div>
                </div>

                <div className={Style.categories}>
                    {categories.map((cat, i) => (
                        <div key={i} className={`${shared.card} ${Style.category}`}>
                            <h3>{cat.title}</h3>
                            <ul>
                                {cat.items.map((item, j) => (
                                    <li key={j}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
