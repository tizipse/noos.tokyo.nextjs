'use client'

import React from "react";
import {Collapse, ConfigProvider} from "antd";

import styles from "./index.module.scss"
import {DownOutlined} from "@ant-design/icons";

export default function (props: COMMenu.Props) {

    return (
        <div id='menu' className={styles.menu}>

            <h2>Menu</h2>

            <div className={styles.container}>
                <div className={styles.environment}>
                    <img src='/images/menu.png' alt='menu'/>
                </div>
                <div className={styles.collapse}>
                    <ConfigProvider
                        theme={{
                            components: {
                                Collapse: {
                                    headerPadding: '10px 0',
                                    contentPadding: '20px 0',
                                }
                            },
                            token: {
                                fontFamily: 'var(--font-default)',
                            }
                        }}
                    >
                        <Collapse
                            ghost
                            expandIconPosition='end'
                            expandIcon={({isActive}) => <DownOutlined rotate={isActive ? 180 : 0}/>}
                            items={props.sources.map(item => ({
                                key: item.code,
                                label: (<h3>{item.label}</h3>),
                                children: (
                                    <ul>
                                        {
                                            item.children.map(value => (
                                                <li key={value.id}>
                                                    <h4>{value.name}</h4>
                                                    <h5>¥{value.price}</h5>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                ),
                            }))}
                        />
                    </ConfigProvider>
                    <p>
                        <span>※全てDesignerランク料金価格となっております</span>
                        <span>※ランクと範囲により料金が変更になる場合があります</span>
                        <span>※詳しくはスタッフまでお尋ね下さい</span>
                        <span>※税込み表記 Tax included</span>
                        <span>※各種クレジットカードとPayPayがご利用いただけます</span>
                    </p>
                </div>
                <div className='clear'></div>
            </div>
        </div>
    )
}