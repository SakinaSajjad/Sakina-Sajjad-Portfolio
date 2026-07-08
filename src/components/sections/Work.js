import React from 'react';
import SectionHeader from './SectionHeader';
import shared from './shared.module.scss';
import Style from './Work.module.scss';
import { info } from '../../info/Info';

export default function Work({ innerRef }) {
    const projects = info.portfolio || [];

    return (
        <section ref={innerRef} id="work" className={`${shared.section} ${shared.altBg}`}>
            <div className={shared.container}>
                <SectionHeader
                    label="Selected Work"
                    heading="Academic & practice projects I've built."
                    subheading="From Final Year Project to React apps and ML models — real work across mobile, web, and AI."
                />

                <div className={Style.grid}>
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className={`${shared.card} ${Style.projectCard} ${project.featured ? Style.featured : ''}`}
                        >
                            <div className={Style.imageWrap}>
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className={Style.content}>
                                <div className={Style.topRow}>
                                    {project.badge && <span className={Style.badge}>{project.badge}</span>}
                                    {project.status && <span className={Style.status}>{project.status}</span>}
                                </div>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                {project.tags && (
                                    <div className={Style.tags}>
                                        {project.tags.map((tag, j) => (
                                            <span key={j} className={Style.tag}>{tag}</span>
                                        ))}
                                    </div>
                                )}
                                <div className={Style.links}>
                                    {project.live && (
                                        project.live.startsWith('http') ? (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={Style.link}
                                            >
                                                Live Demo →
                                            </a>
                                        ) : (
                                            <a href={project.live} className={Style.link}>
                                                Live Demo →
                                            </a>
                                        )
                                    )}
                                    {project.source && (
                                        <a href={project.source} target="_blank" rel="noopener noreferrer" className={Style.linkSecondary}>
                                            Source Code →
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <a
                    href="https://github.com/SakinaSajjad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={Style.githubLink}
                >
                    <i className="fa fa-github" /> More on GitHub →
                </a>
            </div>
        </section>
    );
}
