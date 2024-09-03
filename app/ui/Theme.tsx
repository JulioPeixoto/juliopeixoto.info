"use client";

import React, {
    createContext,
    PropsWithChildren,
    useContext,
    useEffect,
    useState,
} from 'react';

import { FiMoon, FiSun } from 'react-icons/fi';
import styles from '@/app/styles/ui/ThemeSwitch.module.scss';
import useMediaQuery from '../hooks/useMediaQuery';
import clsx from 'clsx';

type Theme = 'light' | 'dark' | undefined;
type ThemeContextType = [Theme, (theme: Theme) => void];

export const ThemeContext = createContext<ThemeContextType>(null as any);

function Theme() {
    const [theme, setTheme] = useContext(ThemeContext);

    return (
        <button
            aria-label='Switch theme'
            className={styles.container}
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
            {theme === 'light' ? <FiSun size='32px' /> : <FiMoon size='32px' />}
        </button>
    );
}

export function ThemeProvider(props: PropsWithChildren) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const [theme, setTheme] = useState<Theme>('dark');

    useEffect(() => {
        setTheme(prefersDarkMode ? 'dark' : 'light');
    }, [prefersDarkMode]);

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            <div className={clsx(theme && `theme--${theme}`)}>{props.children}</div>
        </ThemeContext.Provider>
    );
}

export default Theme;
