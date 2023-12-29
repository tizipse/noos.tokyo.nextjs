import {Metadata, ResolvingMetadata} from "next"
import {notFound} from "next/navigation"
import {doSEO} from "@/service/seo"
import {doMemberOfInformation} from "@/service/member"

import styles from "./index.module.scss"


export async function generateMetadata(props: APPMember.Props, parent: ResolvingMetadata): Promise<Metadata> {

    const p = await parent;

    const seo = await doSEO('member', props.params.id)

    return {
        title: [seo?.title, p.title?.absolute].filter(item => !!item).join(' - '),
        keywords: seo?.keyword,
        description: seo?.description,
    }
}

export default async function (props: APPMember.Props) {

    const member = await doMemberOfInformation(props.params.id)

    if (!member) {
        notFound()
    }

    return (
        <main className={styles.main}>

            <div className={styles.thumb}>
                <img src={member.thumb} alt={member.name}/>
            </div>

            <div className={styles.information}>

                <div className={styles.info}>
                    <div className={styles.inf}>
                        <h3>{member.name}</h3>
                        <h4>{member.nickname}</h4>
                        {member.is_delegate == 1 && <h4>NOOS 代表</h4>}
                        <h4>{member.title}</h4>
                    </div>

                    <div className={styles.media}>
                        {
                            member.ins &&
                            <a href={member.ins} target='_blank'>
                                <img src="/icons/instagram.png" alt="instagram"/>
                            </a>
                        }
                    </div>
                </div>

                <div className={styles.content} dangerouslySetInnerHTML={{__html: member.introduce}}/>
            </div>
        </main>
    )
}