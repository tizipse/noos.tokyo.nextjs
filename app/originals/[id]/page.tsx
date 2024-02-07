import {Metadata, ResolvingMetadata} from "next"
import {notFound} from "next/navigation"
import {doSEO} from "@/service/seo"
import {doOriginalOfInformation} from "@/service/original"

import styles from "./index.module.scss"


export async function generateMetadata(props: APPMember.Props, parent: ResolvingMetadata): Promise<Metadata> {

    const p = await parent;

    const seo = await doSEO('original', props.params.id)

    return {
        title: [seo?.title, p.title?.absolute].filter(item => !!item).join(' - '),
        keywords: seo?.keyword,
        description: seo?.description,
    }
}

export default async function (props: APPMember.Props) {

    const original = await doOriginalOfInformation(props.params.id)

    if (!original) {
        notFound()
    }

    return (
        <main className={styles.main}>

            <div className={styles.thumb}>
                <img src={original.thumb} alt={original.name}/>
            </div>

            <div className={styles.information}>

                <div className={styles.info}>
                    <div className={styles.inf}>
                        <h3>{original.name}</h3>
                        <div className={styles.summary}>{original.summary}</div>
                    </div>

                    <div className={styles.media}>
                        {
                            original.ins &&
                            <a href={original.ins} target='_blank'>
                                <img src="/icons/instagram.png" alt="instagram"/>
                            </a>
                        }
                    </div>
                </div>

                <div className={styles.content} dangerouslySetInnerHTML={{__html: original.introduce}}/>
            </div>
        </main>
    )
}