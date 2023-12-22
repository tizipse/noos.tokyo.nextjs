'use client'

import React from "react"
import {AppProgressBar as ProgressBar} from "next-nprogress-bar"


export default function () {

    return (
        <ProgressBar
            color="var(--main-color)"
            options={{
                showSpinner: false,
            }}
            shallowRouting
        />
    )
}