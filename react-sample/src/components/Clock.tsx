import { useState, useEffect, useLayoutEffect } from "react";
const UPDATE_CYCLE = 1000
const KEY_LOCALE = 'KEY_LOCALE'
enum Locale {
    US = 'en-US',
    KR = 'ko-KR'
}

const getLocaleFromSTring = (text: string) => {
    switch(text) {
        case Locale.US:
            return Locale.US
        case Locale.KR:
            return Locale.KR
        default:
            return Locale.US
    }
}

const Clock = () => {
    const [timestamp, setTimestamp] = useState(new Date())
    const [locale, setLocale] = useState(Locale.US)

    useEffect(()=>{
        const timer = setInterval(() => {
            setTimestamp(new Date())
        },UPDATE_CYCLE)
    
    return () => {
        clearInterval(timer)
    }
    },[])

    useLayoutEffect(() => {
        const savedLocale = localStorage.getItem(KEY_LOCALE)
        if(savedLocale !== null){
            setLocale(getLocaleFromSTring(savedLocale))
        }
    },[])

    useEffect(() => {
        localStorage.setItem(KEY_LOCALE, locale)
    },[Locale])

    return(
        <div>
            <p>
                <span id="current-time-label">현재 시각: </span>
                <span>:{timestamp.toLocaleString(locale)}</span>
                <select
                    value={locale}
                    onChange={(e) => {
                        const selectedLocale = getLocaleFromSTring(e.target.value)
                        setLocale(selectedLocale)
                    }}>
                        <option value={Locale.US}>미국</option>
                        <option value={Locale.KR}>한국</option>
                </select>
            </p>
        </div>
    )
}

export default Clock