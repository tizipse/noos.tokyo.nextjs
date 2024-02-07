import Link from "next/link"
import {doBannerOfOpening} from "@/service/banner"
import {doMenuOfOpening} from "@/service/menu"
import {doMemberOfOpening} from "@/service/member"
import {doRecruitOfOpening} from "@/service/recruit"
import {doTimeOfOpening} from "@/service/time"
import {doSetting} from "@/service/setting"

import styles from './page.module.scss'

import Banner from '@/components/banner'
import Menu from '@/components/menu'
import {doOriginalOfOpening} from "@/service/original";
import {doPage} from "@/service/page";
import {doLinkOfOpening} from "@/service/link";

export default async function () {

    const banners = await doBannerOfOpening()

    const menus = await doMenuOfOpening()

    const members = await doMemberOfOpening()

    const originals = await doOriginalOfOpening()

    const recruits = await doRecruitOfOpening()

    const links = await doLinkOfOpening()

    const about = await doPage("about-us")

    const times = await doTimeOfOpening()

    const setting = await doSetting()

    return (
        <main className={styles.main}>
            {
                banners &&
                <Banner sources={banners} links={links}/>
            }
            {
                setting.what_we_do &&
                <div className={styles.what_we_do}>
                    <h2>What we do</h2>
                    <div className={styles.container}>
                        <img src={setting.what_we_do} alt="what we do"/>
                    </div>
                </div>
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

                    {
                        setting.map &&
                        <div className={styles.map}>
                            <img src={setting.map} alt="map"/>
                        </div>
                    }

                    <div className={styles.info}>

                        <div>
                            <h3>Information</h3>

                            <h4>Address</h4>
                            <p className={styles.addr}>
                                {setting.address}
                            </p>

                            <h4>Open～Close</h4>
                            {
                                times &&
                                <ul>
                                    {
                                        times.map(item => (
                                            <li key={item.id}>
                                                <span>{item.name}.</span>
                                                <p>{item.status == 'open' ? item.content : 'close'}</p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            }
                        </div>
                    </div>
                </div>
            </div>
            {
                recruits &&
                <div id='recruit' className={styles.recruit}>

                    <h2>Recruit</h2>

                    <div className={styles.container}>
                        {
                            recruits.map(item => (
                                <div key={item.id} className={styles.item}>
                                    <a target='_blank' href={item.url} title={item.name}>
                                        <h3>{item.name}</h3>
                                        <p>{item.summary}</p>
                                    </a>
                                </div>
                            ))
                        }
                    </div>
                </div>
            }
            {
                originals &&
                <div id='original' className={styles.original}>
                    <h2>Original</h2>
                    <div className={styles.container}>
                        {
                            originals.map(item => (
                                <Link key={item.id} href={`/originals/${item.id}`}>
                                    <div className={styles.thumb}>
                                        <img src={item.thumb} alt={item.name}/>
                                    </div>
                                    <div className={styles.info}>
                                        <h3>{item.name}</h3>
                                        <div className={styles.summary}>{item.summary}</div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            }
            {
                about &&
                <div id='about' className={styles.about}>
                    <h2>{about.name}</h2>
                    <div className={styles.container} dangerouslySetInnerHTML={{__html: about.content}}/>
                </div>
            }
        </main>
    )
}
