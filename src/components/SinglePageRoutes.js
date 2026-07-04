import React from 'react';
import Hero from './sections/Hero';
import AboutSection from './sections/AboutSection';
import Services from './sections/Services';
import Work from './sections/Work';
import TechStack from './sections/TechStack';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function SinglePageRoutes({ refs }) {
    return (
        <>
            <Hero innerRef={refs.refHome} />
            <AboutSection innerRef={refs.refAbout} />
            <Services innerRef={refs.refServices} />
            <Work innerRef={refs.refWork} />
            <TechStack />
            <Education innerRef={refs.refEducation} />
            <Contact innerRef={refs.refContact} />
            <Footer />
        </>
    );
}
