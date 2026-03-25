import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";


import page1 from "../../assets/BusinessGuide/BusinessGuide2/page1.jpg"; // ❌ 기존 이미지 주석 처리

const BusinessGuide2 = () => {
    const menuContents = [
      { title: "사업안내", url: "/BusinessGuide/intro" },
      // { title: "분양일정", url: "/BusinessGuide/plan" },
      { title: "공급안내", url: "/BusinessGuide/documents" }
    ];

    const [isScroll, setIsScroll] = useState(false);
    const [isImageVisible, setIsImageVisible] = useState(false); // ✅ 기존 이미지 가시성 상태 유지
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }

            // ✅ 기존 이미지 로딩 로직도 유지 (하지만 Ready가 표시됨)
            if (window.scrollY > 200) {
                setIsImageVisible(true);
            } else {
                setIsImageVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.container}>
        <Helmet>
        {/* 기본 설정 */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />
        <html lang="ko" />

        {/* SEO 핵심 */}
        <title>김포 칸타빌 에디션 - 분양일정</title>
        <meta
            name="description"
            content="김포 칸타빌 에디션 분양일정을 확인하세요. 모델하우스 오픈, 청약 접수, 당첨자 발표, 계약 일정 등 주요 분양 일정을 안내합니다."
        />
        <meta
            name="keywords"
            content="김포 칸타빌 에디션, 김포 분양일정, 김포 아파트 청약, 김포 북변동 아파트, 김포 북변 새도시, 모델하우스 일정"
        />
        <link rel="canonical" href="https://www.bunyang-114.com/BusinessGuide/plan" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:site_name" content="김포 칸타빌 에디션" />
        <meta property="og:title" content="김포 칸타빌 에디션 - 분양일정" />
        <meta
            property="og:description"
            content="김포 칸타빌 에디션 분양일정 - 모델하우스 오픈, 청약 접수, 당첨자 발표 등 주요 일정을 확인하세요."
        />
        <meta property="og:url" content="https://www.bunyang-114.com/BusinessGuide/plan" />
        <meta property="og:image" content="https://www.bunyang-114.com/Main1.png" />
        <meta property="og:image:alt" content="김포 칸타빌 에디션 분양일정" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="김포 칸타빌 에디션 - 분양일정" />
        <meta
            name="twitter:description"
            content="김포 칸타빌 에디션 분양일정 - 모델하우스 오픈, 청약 접수, 당첨자 발표 등 주요 일정을 확인하세요."
        />
        <meta name="twitter:image" content="https://www.bunyang-114.com/Main1.png" />
        <meta name="twitter:url" content="https://www.bunyang-114.com/BusinessGuide/plan" />
        </Helmet>

        <Header isChanged={isScroll} />
        <FixIcon />

        <Bener title="분양일정" />
        <MenuBar contents={menuContents} />

        <h1 className={styles.screenReaderOnly}>김포 칸타빌 에디션 - 분양일정</h1>
        <p className={styles.screenReaderOnly}>
        김포 칸타빌 에디션의 분양일정을 안내합니다.
        모델하우스 오픈, 청약 접수, 당첨자 발표 및 계약 일정 등 주요 분양 진행 일정을 확인하실 수 있습니다.
        </p>

        <div className={styles.textBox}>
        <div>한눈에 보는 분양 진행 일정</div>
        <div>김포 칸타빌 에디션 분양일정을 확인하세요</div>
        </div>

            {/* ✅ 기존 이미지 부분 주석 처리하고 Ready 컴포넌트 표시 */}
            <img className={`${styles.image4} ${isImageVisible ? styles.visible : ''}`} src={page1} alt="김포 칸타빌 에디션분양일정안내-image1" />
            <div className={styles.readyContainer}>
           
            </div>

            <Footer />
        </div>
    );
};

export default BusinessGuide2;
