import React, { useEffect, useState } from 'react';
import Style from './SplashScreen.module.scss';
import ThemeToggle from './ThemeToggle';
import { info } from '../info/Info';

const CODE_LINES = [
    { text: 'const portfolio = {', delay: 0 },
    { text: '  owner: "Syeda Sakina Sajjad",', delay: 400 },
    { text: '  role: "Software Developer",', delay: 800 },
    { text: '  tagline: "Computer Science Student | Aspiring Mobile Developer | AI Enthusiast",', delay: 1200 },
    { text: '};', delay: 1600 },
    { text: '', delay: 1800 },
    { text: 'portfolio.launch();', delay: 2000, highlight: true },
];

const SPLASH_KEY = 'portfolioSplashSeen';

export default function SplashScreen({ onComplete }) {
    const [visible, setVisible] = useState(true);
    const [exiting, setExiting] = useState(false);
    const [linesShown, setLinesShown] = useState(0);
    const [launching, setLaunching] = useState(false);
    const [copied, setCopied] = useState(false);
    const [canEnter, setCanEnter] = useState(false);

    useEffect(() => {
        const timers = CODE_LINES.map((line, index) =>
            setTimeout(() => {
                setLinesShown(index + 1);
                if (line.highlight) setLaunching(true);
            }, line.delay)
        );

        const enterTimer = setTimeout(() => setCanEnter(true), 3200);

        return () => {
            timers.forEach(clearTimeout);
            clearTimeout(enterTimer);
        };
    }, []);

    const dismiss = () => {
        if (!canEnter) return;
        setExiting(true);
        sessionStorage.setItem(SPLASH_KEY, 'true');
        setTimeout(() => {
            setVisible(false);
            onComplete?.();
        }, 600);
    };

    const copyWhatsApp = async () => {
        const number = info.whatsappNumber;
        try {
            await navigator.clipboard.writeText(number);
        } catch {
            const el = document.createElement('textarea');
            el.value = number;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
        }
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    if (!visible) return null;

    return (
        <div className={`${Style.overlay} ${exiting ? Style.exiting : ''}`}>
            <div className={Style.topBar}>
                <ThemeToggle />
            </div>

            <div className={Style.content}>
                <div className={Style.terminal}>
                    <div className={Style.terminalBar}>
                        <span className={Style.dot} data-color="red" />
                        <span className={Style.dot} data-color="yellow" />
                        <span className={Style.dot} data-color="green" />
                        <span className={Style.terminalTitle}>portfolio.js</span>
                    </div>
                    <pre className={Style.code}>
                        {CODE_LINES.slice(0, linesShown).map((line, i) => (
                            <div
                                key={i}
                                className={`${Style.line} ${line.highlight ? Style.highlight : ''} ${Style.visible}`}
                            >
                                <span className={Style.prompt}>{'> '}</span>
                                {line.text}
                                {i === linesShown - 1 && !exiting && (
                                    <span className={Style.cursor}>|</span>
                                )}
                            </div>
                        ))}
                    </pre>
                </div>

                {launching && (
                    <div className={Style.launchStatus}>
                        <div className={Style.loader}>
                            <span /><span /><span />
                        </div>
                        <p>Launching portfolio...</p>
                    </div>
                )}

                <p className={Style.availability}>{info.availability}</p>

                <div className={Style.actions}>
                    <button
                        type="button"
                        className={Style.contactBtn}
                        onClick={copyWhatsApp}
                    >
                        <i className="fa fa-whatsapp" />
                        {copied ? 'Number copied!' : 'Contact Me on WhatsApp'}
                    </button>

                    <button
                        type="button"
                        className={`${Style.enterBtn} ${canEnter ? Style.ready : ''}`}
                        onClick={dismiss}
                        disabled={!canEnter}
                    >
                        Enter Portfolio
                        <i className="fa fa-arrow-right" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export function shouldShowSplash() {
    return sessionStorage.getItem(SPLASH_KEY) !== 'true';
}
