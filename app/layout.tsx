import {Analytics} from "@vercel/analytics/react";
import {ReactNode} from "react";

import './globals.css'

export const metadata = {
    title: 'Website',
}

export default function RootLayout({children}: {
    children: ReactNode
}) {
    return (
        <html lang="en">
        <body>
        {children}
        <Analytics/>
        </body>
        </html>
    )
}
