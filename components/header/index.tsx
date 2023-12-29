'use client'

import {useEffect, useState} from "react"
import Link from "next/link";

import styles from "./index.module.scss"
import {useRouter} from "next/navigation";

export default function (props: COMHeader.Props) {

    const router = useRouter();

    const menus: COMHeader.Data[] = [
        {name: 'Menu', uri: '/#menu', key: 'menu'},
        {name: 'Member', uri: '/#member', key: 'member'},
        {name: 'Information', uri: '/#information', key: 'information'},
    ]

    const [collapse, setCollapse] = useState(false)

    const onMobile = (uri: string) => {

        setCollapse(false)

        router.push(uri)
    }

    const onResize = () => {
        if (collapse) {
            setCollapse(false)
        }
    }

    useEffect(() => {

        const body = document.body

        if (collapse) {
            body.classList.add('no-scroll')
        } else {
            body.classList?.remove('no-scroll')
        }

        window.addEventListener('resize', onResize)

        return () => {
            window.removeEventListener('resize', onResize)
        }

    }, [collapse]);


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
                    <div className={styles.logo} onClick={() => onMobile('/')}>
                        <img src={props.logo || '/logo.png'} alt='logo'/>
                    </div>
                    <div
                        onClick={() => setCollapse(!collapse)}
                        className={`${styles.menu} ${collapse ? styles.active : styles.close}`}
                    >
                        <div className={styles.menus}>
                            <div className={`${styles.item} ${styles.top}`}/>
                            <div className={`${styles.item} ${styles.center}`}/>
                            <div className={`${styles.item} ${styles.bottom}`}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.mobile_container} ${collapse ? styles.active : styles.close}`}>
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