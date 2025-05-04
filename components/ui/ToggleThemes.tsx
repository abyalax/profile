'use client'

import { useMounted } from '@/hooks/use-mounted'
import { useTheme } from 'next-themes'
import { useEffect } from 'react'

export default function ToggleTheme() {

    const { theme, themes, setTheme } = useTheme()

    const mounted = useMounted()
    useEffect(() => {
        console.log('Curent theme: ', theme);
        console.log('Curent themes: ', themes);
        return () => { };
    }, [theme, themes]);
    if (!mounted) return null
    return (
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='text-3xl'>
            {theme === 'dark' ? '🌞' : '🌙'}
        </button>
    )
}