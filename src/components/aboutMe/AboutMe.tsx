import { useState } from 'react';
import Keywords from '../Keywords';
import styles from './AboutMe.module.css';



function Icon(props: { name: string }) {
    return (
        <div className={styles.icon}>
            <img className={styles.iconLogo} src={process.env.PUBLIC_URL + "/aboutme/plfwsw/" + props.name.toLowerCase() + ".png"} />

            <div className={styles.iconName}>
                {props.name}
            </div>
        </div>
    )
}



export default function AboutMe() {
    const [switched, setSwitched] = useState<boolean>(true);


    return (
        <div>
            <div className={styles.section}>
                Who I am
            </div>

            {
                switched

                    ?

                    <img className={styles.profile} src={process.env.PUBLIC_URL + "/aboutme/profile1.jpg"} />

                    :

                    <img className={styles.profile} src={process.env.PUBLIC_URL + "/aboutme/profile2.jpg"} />

            }



            <div className={switched ? styles.buttonContainerOff : styles.buttonContainerOn}>
                <div className={switched ? styles.buttonOff : styles.buttonOn} onClick={() => { setSwitched(!switched) }}>
                    <div className={switched ? styles.buttonTextOff : styles.buttonTextOn}>
                        {switched ? "Reality" : "Avatar"}
                    </div>
                </div>
            </div>



            <div className={styles.keywords}>
                <Keywords keywords={["성장", "도전", "노력"]}/>
            </div>

            <div className={styles.name}>
                김영우
            </div>

            <div className={styles.ajaeGag}>
                제 이름은 똑바로 읽으면 김영우, 거꾸로 읽으면 우영김입니다.
            </div>


            <div className={styles.intro1}>
                Frontend Engineer
            </div>

            <div className={styles.intro2}>
                설계와 구현 그리고 디자인도 조금 할 줄 아는 공대생
            </div>
            <br /><br /><br />



            <div className={styles.career}>
                <div>
                    2017.3 ~
                </div>

                <div>
                    홍익대학교 컴퓨터공학과 학사 과정
                </div>
            </div>

            <div className={styles.career}>
                <div>
                    2021.8 ~
                </div>

                <div>
                    홍익대학교 영자신문사 기자
                </div>
            </div>



            <div className={styles.section}>
                What I can do
            </div>

            <div className={styles.iconContainerWrapper}>
                <div className={styles.iconContainerHeader}>
                    Python
                </div>

                <div className={styles.iconContainer1}>
                    <Icon name="Python" />
                    <Icon name="Pandas" />
                    <Icon name="Selenium" />
                </div>

                <div className={styles.iconContainerHeader}>
                    Web Development
                </div>

                <div className={styles.iconContainer2}>
                    <Icon name="HTML" />
                    <Icon name="CSS" />
                    <Icon name="JavaScript" />
                    <Icon name="TypeScript" />
                    <Icon name="React" />
                </div>

                <div className={styles.iconContainerHeader}>
                    Hosting and Deployment
                </div>

                <div className={styles.iconContainer3}>
                    <Icon name="Amazon EC2" />
                    <Icon name="Amazon Route53" />
                    <Icon name="Netlify" />
                    <Icon name="Firebase" />
                </div>

                <div className={styles.iconContainerHeader}>
                    Database
                </div>

                <div className={styles.iconContainer4}>
                    <Icon name="Amazon RDS" />
                    <Icon name="MySQL" />
                    <Icon name="MariaDB" />
                </div>
            </div>
        </div>
    )
}