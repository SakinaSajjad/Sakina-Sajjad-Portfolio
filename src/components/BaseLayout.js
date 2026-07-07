import React, { useState } from 'react';
import Style from './BaseLayout.module.scss';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';
import { singlePage } from '../info/Info';
import MultiPageRoutes from './MultiPageRoutes';
import SinglePageRoutes from './SinglePageRoutes';
import useScrollObserver from '../hooks/useScrollObserver';
import SplashScreen, { shouldShowSplash } from './SplashScreen';

export default function BaseLayout() {
    const location = useLocation();
    const [active, setActive] = useState(
        location.pathname === '/' ? 'home' : location.pathname.slice(1)
    );
    const [splashDone, setSplashDone] = useState(!shouldShowSplash());

    const refHome = useScrollObserver(setActive);
    const refAbout = useScrollObserver(setActive);
    const refServices = useScrollObserver(setActive);
    const refWork = useScrollObserver(setActive);
    const refEducation = useScrollObserver(setActive);
    const refContact = useScrollObserver(setActive);

    return (
        <div className={Style.layout}>
            {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}
            <Navbar active={active} setActive={setActive} />
            <main>
                {singlePage ? (
                    <SinglePageRoutes
                        refs={{
                            refHome,
                            refAbout,
                            refServices,
                            refWork,
                            refEducation,
                            refContact,
                        }}
                    />
                ) : (
                    <MultiPageRoutes />
                )}
            </main>
        </div>
    );
}
