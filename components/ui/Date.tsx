"use client"

import { format, parseISO } from "date-fns"

export const Date = ({ date, className = "block mb-2 text-xs" }: { date: string, className?: string }) => {
    return (
        <time dateTime={date} className={className}>
             {format(parseISO(date), "LLLL d, yyyy")}
        </time>
    )
}