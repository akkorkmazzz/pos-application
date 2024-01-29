import React from 'react';

export const SeachIcon = ({ color, style }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e7cba9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search" style={style}>
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.3-4.3" fill={color ?? "#8DA47E"} />
        </svg>
    )
}
export const HomePageIcon = ({ color, style }) => {
    return (
        <svg width="24" height="24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" style={style}>
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" fill={color ?? "#41444B"}/>
        </svg>
    )
}
export const ShopIcon = ({ color, style }) => {
    return (
        <svg width="24" height="24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20" style={style}>
            <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" fill={color ?? "#41444B"}/>
        </svg>
    )
}
export const InvoiceIcon = ({ color, style }) => {
    return (
        <svg width="24" height="24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20" style={style}>
            <path d="M7 11H5v1h2v-1Zm4 3H9v1h2v-1Zm-4 0H5v1h2v-1ZM5 5V.13a2.98 2.98 0 0 0-1.293.749L.88 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM13 16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v6Zm-1-8H9a1 1 0 0 1 0-2h3a1 1 0 1 1 0 2Zm0-3H9a1 1 0 0 1 0-2h3a1 1 0 1 1 0 2Z" fill={color ?? "#41444B"}/>
            <path d="M11 11H9v1h2v-1Z"/>
        </svg>    
    )
}
export const UserIcon = ({ color, style }) => {
    return (
        <svg width="24" height="24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 18" style={style}>
            <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" fill={color ?? "#41444B"}/>
        </svg>  
    )
}
export const StatisticsIcon = ({ color, style }) => {
    return (
        <svg width="24" height="24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"fill="none" viewBox="0 0 17 18" style={style}>
            <path stroke="#41444B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 12v5m5-9v9m5-5v5m5-9v9M1 7l5-6 5 6 5-6" fill={color ?? "#41444B"}/>
        </svg>
    )
}
export const LogoutIcon = ({ color, style }) => {
    return (
        <svg width="24" height="24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" style={style}>
            <path stroke="#41444B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3" fill={color ?? "#41444B"}/>
        </svg>
    )
}
export const PlusIcon = ({ color, style }) => {
    return (
        <svg width="12" height="12" className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" style={style}>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" fill={color ?? "#41444B"}/>
        </svg>
    )
}
export const MinusIcon = ({ color, style }) => {
    return (
        <svg width="12" height="12" className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2" style={style}>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" fill={color ?? "#41444B"}/>
        </svg>
    )
}
export const CloseIcon = ({ color, style }) => {
    return (
        <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50" style={style}>
            <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" fill={color ?? "#41444B"}></path>
        </svg>
    )
}


