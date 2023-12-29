import React from "react"
import type {Metadata} from 'next'
import {doSetting} from "@/service/setting"

import './layout.scss'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Progress from "@/components/progress"

export const revalidate = 600

export const metadata: Metadata = {
    title: 'NOOS Omotesando',
    description: '',
}

export default async function RootLayout({children}: { children: React.ReactNode }) {

    const setting = await doSetting()

    return (
        <html lang="en">
        <body>
        <Progress/>
        <Header/>
        {children}
        <Footer copyright={setting.copyright}/>
        </body>
        </html>
    )
}
