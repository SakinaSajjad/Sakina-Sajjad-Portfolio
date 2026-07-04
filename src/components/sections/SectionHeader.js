import React from 'react';
import Style from './shared.module.scss';

export default function SectionHeader({ label, heading, subheading, centered = false }) {
    return (
        <div className={Style.sectionHeader} style={{ textAlign: centered ? 'center' : 'left', margin: centered ? '0 auto 3rem' : '0 0 3rem' }}>
            {label && <span className={Style.label}>{label}</span>}
            {heading && <h2 className={Style.heading}>{heading}</h2>}
            {subheading && <p className={Style.subheading} style={{ margin: centered ? '0 auto' : undefined }}>{subheading}</p>}
        </div>
    );
}
