'use client'

import {useEffect} from "react"
import {useRouter} from "next/navigation"
import {CloseOutlined, MenuOutlined} from "@ant-design/icons"
import Link from "next/link"

import styles from "./index.module.scss"

export default function (props: COMHeader.Props) {

    const router = useRouter();

    const menus: COMHeader.Data[] = [
        {name: 'Menu', uri: '/#menu', key: 'menu'},
        {name: 'Member', uri: '/#member', key: 'member'},
        {name: 'Information', uri: '/#information', key: 'information'},
        {name: 'Recruit', uri: '/#recruit', key: 'recruit'},
        {name: 'Original', uri: '/#original', key: 'original'},
        {name: 'About us', uri: '/#about', key: 'about'},
    ]

    const onActivated = (container: HTMLElement | null, btn: HTMLElement | null, body?: HTMLElement) => {

        if (!container) {
            container = document.getElementById('mobile_container')
        }

        if (!btn) {
            btn = document.getElementById('mobile_button')
        }

        if (!body) {
            body = document.body
        }

        body.classList.add('no-scroll')

        if (container && btn) {

            container.classList.remove('close')
            container.classList.add('active')

            btn.classList.remove('close')
            btn.classList.add('active')
        }
    }

    const onClosed = (container?: HTMLElement | null, btn?: HTMLElement | null, body?: HTMLElement) => {

        if (!container) {
            container = document.getElementById('mobile_container')
        }

        if (!btn) {
            btn = document.getElementById('mobile_button')
        }

        if (!body) {
            body = document.body
        }

        body.classList.remove('no-scroll')

        if (container && btn) {

            container.classList.remove('active')
            container.classList.add('close')

            btn.classList.remove('active')
            btn.classList.add('close')
        }
    }

    const onCollapse = () => {

        const body = document.body
        const container = document.getElementById('mobile_container')
        const btn = document.getElementById('mobile_button')

        if (container && btn) {

            if (body.classList.contains('no-scroll')) {
                onClosed(container, btn, body)
            } else {
                onActivated(container, btn, body)
            }
        }
    }

    const onMobile = (uri: string) => {
        onClosed()
        router.push(uri)
    }

    useEffect(() => {

        window.addEventListener('resize', () => onClosed())

        return () => {
            window.removeEventListener('resize', () => onClosed())
        }

    }, []);

    return (
        <>
            <div className={styles.header}>
                <div className={styles.pc}>
                    <Link href='/' className={styles.logo}>
                        <img src={props.logo || '/logo.png'} alt='logo'/>
                    </Link>
                    <ul>
                        {
                            menus.map(item => (
                                <li key={item.key}>
                                    <Link href={item.uri}>{item.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className={styles.mobile}>
                    <div id='mobile_button' onClick={onCollapse} className={`${styles.menu} close`}>
                        <MenuOutlined className='activated'/>
                        <CloseOutlined className='closed'/>
                    </div>
                </div>
            </div>
            <div id='mobile_container' className={`${styles.mobile_container}`}>
                <ul>
                    {
                        menus.map(item => (
                            <li key={item.key} onClick={() => onMobile(item.uri)}>
                                {item.name}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}