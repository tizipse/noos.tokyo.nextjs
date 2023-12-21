import Link from "next/link"
import {doBannerOfOpening} from "@/service/banner";
import {doMenuOfOpening} from "@/service/menu";
import {doMemberOfOpening} from "@/service/member";
import {doTimeOfOpening} from "@/service/time";
import {doSetting} from "@/service/setting";

import styles from './page.module.scss'

import Banner from '@/components/banner'
import Menu from '@/components/menu'

export default async function () {

    const banners = await doBannerOfOpening()

    const menus = await doMenuOfOpening()

    const members = await doMemberOfOpening()

    const times = await doTimeOfOpening()

    const setting = await doSetting()

    return (
        <main className={styles.main}>
            {
                banners &&
                <Banner sources={banners}/>
            }
            {
                menus &&
                <Menu sources={menus}/>
            }
            {
                members &&
                <div id='member' className={styles.member}>
                    <h2>Member</h2>
                    <div className={styles.container}>
                        {
                            members.map(item => (
                                <Link key={item.id} href={`/members/${item.id}`}>
                                    <div className={styles.thumb}>
                                        <img src={item.thumb} alt={item.name}/>
                                    </div>
                                    <div className={styles.info}>
                                        <h3>{item.name}</h3>
                                        {
                                            item.is_delegate == 1 &&
                                            <h4>NOOS代表</h4>
                                        }
                                        <h4>{item.title}</h4>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            }

            <div id='information' className={styles.information}>
                <h2>Information</h2>

                <div className={styles.container}>

                    <div className={styles.map}>
                        <img src="/images/map.jpg" alt="map"/>
                    </div>

                    <div className={styles.info}>
                        <h3>Information</h3>

                        <h4>Address</h4>
                        <p>
                            {setting.address}
                        </p>

                        <h4>Open～Close</h4>
                        <p>
                            {
                                times?.map(item => (
                                    <span
                                        key={item.id}>{item.name}. {item.status == 'open' ? item.content : 'close'}</span>
                                ))
                            }
                        </p>
                    </div>

                    <div className='clear'></div>
                </div>
            </div>
        </main>
    )
}
