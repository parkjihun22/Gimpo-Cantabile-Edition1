import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";

const LocationSection = [
  {
    img: section2Image1,
    titleText:
      "7천여 세대 북변 새도시로<br />완성되는 미래가치",
    contentText:
      "김포 북변 권역 약 7천여 세대 개발 예정<br />새롭게 변화하는 주거 중심 입지<br />미래가치를 기대할 수 있는 프리미엄 주거 환경",
  },
  {
    img: section2Image2,
    titleText:
      "서울 접근성을 높이는<br />광역 교통 프리미엄",
    contentText:
      "걸포북변역 이용 가능한 교통 환경<br />김포한강로 등 주요 도로망 인접<br />서울 접근성을 높이는 광역 교통망",
  },
  {
    img: section2Image3,
    titleText:
      "서울 5호선 연장 기대<br />미래 교통 프리미엄",
    contentText:
      "서울 5호선 연장 추진 기대감<br />향후 교통 인프라 확충으로<br />더욱 편리해지는 서울 생활권",
  },
  {
    img: section2Image4,
    titleText:
      "생활을 더 편리하게 만드는<br />풍부한 생활 인프라",
    contentText:
      "홈플러스 등 생활 편의시설 인접<br />김포근린공원 등 자연 환경<br />일상에 편리함을 더하는 생활 인프라",
  },
  {
    img: section2Image5,
    titleText:
      "안심 교육환경을 누리는<br />학세권 프리미엄",
    contentText:
      "김포초·김포중·김포고 인접<br />도보 통학 가능한 교육 환경<br />자녀 교육에 유리한 학세권 입지",
  },
  {
    img: section2Image6,
    titleText:
      "자연과 함께하는<br />쾌적한 주거 환경",
    contentText:
      "단지 인근 공원과 녹지 공간<br />도심 속에서 누리는 여유와 힐링<br />쾌적한 주거 환경을 완성하는 자연 입지",
  },
];

const LocationEnvironment1 = () => {
  const menuContents = [
    // { title: "입지 안내영상", url: "/FloorPlan/videos" },
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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

      {/* SEO 메타 */}
      <title>김포 칸타빌 에디션 - 입지환경</title>
      <meta
        name="description"
        content="김포 칸타빌 에디션 입지환경을 확인하세요. 교통, 생활 인프라, 교육환경, 자연환경 등 일상에 필요한 입지 포인트를 안내합니다."
      />
      <meta
        name="keywords"
        content="김포 칸타빌 에디션, 입지환경, 입지안내, 김포 아파트, 김포 분양, 북변동 아파트, 교통, 생활인프라, 교육환경, 자연환경"
      />
      <link rel="canonical" href="https://www.bunyang-114.com/LocationEnvironment/intro" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:site_name" content="김포 칸타빌 에디션" />
      <meta property="og:title" content="김포 칸타빌 에디션 - 입지환경" />
      <meta
        property="og:description"
        content="김포 칸타빌 에디션 입지환경 - 교통, 생활인프라, 교육, 자연환경 포인트를 확인하세요."
      />
      <meta property="og:url" content="https://www.bunyang-114.com/LocationEnvironment/intro" />
      <meta property="og:image" content="https://www.bunyang-114.com/Main1.png" />
      <meta property="og:image:alt" content="김포 칸타빌 에디션 입지환경" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="김포 칸타빌 에디션 - 입지환경" />
      <meta
        name="twitter:description"
        content="김포 칸타빌 에디션 입지환경 - 교통, 생활인프라, 교육, 자연환경 포인트를 확인하세요."
      />
      <meta name="twitter:image" content="https://www.bunyang-114.com/Main1.png" />
      <meta name="twitter:url" content="https://www.bunyang-114.com/LocationEnvironment/intro" />

      {/* JSON-LD */}
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "김포 칸타빌 에디션 - 입지환경",
          "description": "김포 칸타빌 에디션 입지환경을 안내합니다. 교통, 생활 인프라, 교육 및 자연환경 등 입지 포인트를 확인하세요.",
          "url": "https://www.bunyang-114.com/LocationEnvironment/intro",
          "inLanguage": "ko-KR"
        }`}
      </script>
    </Helmet>

    <Header isChanged={isScroll} />
    <FixIcon />

    <Bener title="입지환경" />
    <MenuBar contents={menuContents} />

    <h1 className={styles.screenReaderOnly}>
      김포 칸타빌 에디션 - 입지환경
    </h1>
    <p className={styles.screenReaderOnly}>
      김포 칸타빌 에디션의 입지 정보를 안내합니다.
      교통, 생활 인프라, 교육환경, 자연환경 등 일상에 필요한 입지 포인트를 확인하실 수 있습니다.
    </p>

    <div className={styles.textBox}>
      <div>북변 새도시의 미래가치를 누리는 프리미엄 입지</div>
      <div>김포 칸타빌 에디션 입지환경</div>
    </div>

      <img
        src={page1}
        className={styles.image2}
        alt="김포 칸타빌 에디션 입지환경 이미지"
      />


      <div className={styles.section2}>
        {LocationSection.map((value, idx) => (
          <LocationSectionBox
            image={value.img}
            title={value.titleText}
            text={value.contentText}
          />
        ))}
      </div>

      <img
        src={page1}
        className={styles.image2}
        alt="김포 칸타빌 에디션입지환경 이미지"
      />


      <div className={styles.section2}>
        {LocationSection.map((value, idx) => (
          <LocationSectionBox
            image={value.img}
            title={value.titleText}
            text={value.contentText}
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※본 홍보물의 내용과 지역도는 소비자의 이해를 돕기 위한 것으로, 개발 예정•계획 및 교통, 학교 계획 등에 관한 사항은 해당 기관의 아래 자료를 토대로 제작되었습니다. 사업계획 및 일정은 개발계획별 사업주체에 의해 변경될 수 있으며, 김포 칸타빌 에디션 사업주체 및 시공사와 무관합니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
