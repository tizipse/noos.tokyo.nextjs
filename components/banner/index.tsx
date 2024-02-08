'use client'

import React from "react"
import Link from "next/link"
import {Swiper, SwiperSlide} from "swiper/react"
import {Autoplay} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/autoplay'

import styles from './index.module.scss'

export default function (props: COMBanner.Props) {

    const pc_banner = props.sources.filter(item => item.client == 'pc')
    const mobile_banner = props.sources.filter(item => item.client == 'mobile')

    const onCollapse = () => {

        const body = document.body
        const container = document.getElementById('mobile_container')
        const button = document.getElementById('mobile_button')

        if (container && button) {

            body.classList.add('no-scroll')

            container.classList.remove('close')
            container.classList.add('active')

            button.classList.remove('close')
            button.classList.add('active')
        }
    }

    return (
        <div className={styles.banner}>
            {
                pc_banner &&
                <div className={styles.pc}>
                    <Swiper
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        loop
                        speed={500}
                        modules={[Autoplay]}
                    >
                        {
                            pc_banner.map(item => {

                                let child = (
                                    <img src={item.picture} alt={item.name}/>
                                )

                                if (item.url) {
                                    child = (
                                        <Link href={item.url} target={item.target}>{child}</Link>
                                    )
                                }

                                return (
                                    <SwiperSlide key={item.id} className={styles.slide}>{child}</SwiperSlide>)
                            })
                        }
                    </Swiper>
                </div>
            }

            {
                mobile_banner &&
                <div className={styles.mobile}>

                    {
                        props.links &&
                        <ul className={styles.links}>
                            {
                                props.links.map((item, index) => (
                                    <React.Fragment key={item.id}>
                                        {
                                            index > 0 &&
                                            <li className={styles.split}></li>
                                        }
                                        <li onClick={item.is_system == 1 ? onCollapse : undefined}>
                                            {
                                                item.is_system == 1 ? (
                                                        <span>
                                                            <p>{item.summary}</p>
                                                            <h3>{item.name}</h3>
                                                        </span>
                                                    ) :
                                                    <a href={item.url} target='_blank'>
                                                        <p>{item.summary}</p>
                                                        <h3>{item.name}</h3>
                                                    </a>
                                            }
                                        </li>
                                    </React.Fragment>
                                ))
                            }
                        </ul>
                    }

                    <Swiper
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        loop
                        speed={500}
                        modules={[Autoplay]}
                    >
                        {
                            mobile_banner.map(item => {

                                let child = (
                                    <img src={item.picture} alt={item.name}/>
                                )

                                if (item.url) {
                                    child = (
                                        <Link href={item.url} target={item.target}>{child}</Link>
                                    )
                                }

                                return (
                                    <SwiperSlide key={item.id} className={styles.slide}>{child}</SwiperSlide>)
                            })
                        }
                    </Swiper>
                </div>
            }
        </div>
    )
}