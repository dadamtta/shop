import { Button } from '@mui/material'
import styles from './styles.module.css'

function IntroduceSection() {
    return (
        <section className={styles["main-introduce"]}>
            <div className={styles["main-inner-width"]}>
                <div className={styles["main-i-content"]}>
                    <div>
                        이미지 영역
                    </div>
                    <div>
                        당신의 인생에 한 번 뿐인 소중한 하루 <br />
                        다담따가 함께 하겠습니다. <br />
                        <br />
                        모바일 청첩장 무료로 이용하세요.
                        <br />
                        <Button>무료 사용</Button>
                        <Button>샘플 보기</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

function FeatureSection() {
    return (
        <section className={styles["main-features"]}>
            <div className={styles["main-inner-width"]}>
                이런 기능을 제공합니다. <br />
                일부 기능은 서비스 운용 비용이 발생하여 무료 버전에선 제공하지 않습니다.
            </div>
        </section>
    )
}

function ServiceHelpSection() {
    return (
        <section className={styles["main-help"]}>
            <div className={styles["main-inner-width"]}>
                더 나은 서비스를 위해 아이디어를 기여해 주세요. <br />
                다음에 결혼하는 예비 신부, 신랑님들을 위해 서비스를 이용해 보시고 서비스 개선사항이나 아이디어를 공유해 주세요. <br />
                <Button>기여하기</Button>
            </div>
        </section>
    )
}

function ReviewSection() {
    return (
        <section className={styles["main-review"]}>
            <div className={styles["main-inner-width"]}>
                실제 후기
            </div>
        </section>
    )
}

function ServiceGuideSection() {
    return (
        <section className={styles["main-guide"]}>
            <div className={styles["main-inner-width"]}>
                세상에 하나 뿐인 청첩장을 만들고 싶으신가요 ? <br />
                <Button>전문가에게 문의하기</Button>
            </div>
        </section>
    )
}

function HomeMain() {
    return (
        <main className={styles["main"]}>
            <IntroduceSection />
            <ServiceHelpSection />
            <FeatureSection />
            <ReviewSection />
            <ServiceGuideSection />
        </main>
    )
}

export default HomeMain