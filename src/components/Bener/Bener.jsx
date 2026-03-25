import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="김포 칸타빌 에디션-benerimage"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
    if (
        text === '플래티넘' ||
        text === '홍보영상' ||
        text === '장기일반민간임대' ||
        text === '당첨자서류안내' ||
        text === '김포 칸타빌 에디션'
    ) {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    지친 하루 끝에 진정한 쉼과 여유를 누릴 수 있는 프리미엄 라이프
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    김포 북변 새도시의 중심에서 만나는 새로운 주거 프리미엄
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    김포 칸타빌 에디션
                </div>
            </>
        );
    } else if (
        text === '사업개요' ||
        text === '세대안내' ||
        text === '인테리어' ||
        text === '청약안내' ||
        text === '모집공고안내' ||
        text === '인지세납부안내'
    ) {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    7천여 세대 북변 새도시의 미래가치를 누리는 프리미엄 입지
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    브랜드 가치가 빛나는 새로운 라이프의 시작
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    김포 칸타빌 에디션
                </div>
            </>
        );
    } else if (text === '입지환경') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    교통·생활·교육을 모두 누리는 김포 북변 핵심 입지
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    기대하던 모든 프리미엄이 김포 칸타빌 에디션에서 펼쳐집니다
                </div>
            </>
        );
    } else if (text === '단지안내') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    주거의 품격을 높이는 차별화된 단지설계
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    더 편리하고 더 여유로운 일상을 위한 공간구성
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    김포 칸타빌 에디션이 새로운 프리미엄 라이프를 선보입니다
                </div>
            </>
        );
    }
};
