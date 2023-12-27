'use client'

import Link from "next/link"
import {Swiper, SwiperSlide} from "swiper/react"
import {Autoplay} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/autoplay'

import styles from './index.module.scss'

export default function (props: COMBanner.Props) {

    const pc_banner = props.sources.filter(item => item.client == 'pc')
    const mobile_banner = props.sources.filter(item => item.client == 'mobile')

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
                        props.icon_down &&
                        <img src={props.icon_down} alt='down' className={styles.icon_down}/>
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