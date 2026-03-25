// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>김포 칸타빌 에디션</span>
        </li>
        <li>
          <strong>대지위치</strong>
          <span>
            경기도 김포시 북변동 224-67 일원
          </span>
        </li>
        <li>
          <strong>건축규모</strong>
          <span>
            지하 5층 ~ 지상 24층, 9개동
          </span>
        </li>
        <li>
          <strong>주택형</strong>
          <span>
            전용 66㎡ / 84㎡ / 104㎡ / 127㎡
          </span>
        </li>
        <li>
          <strong>세대수</strong>
          <span>
            총 612세대
          </span>
        </li>
      </ul>
    ),
  },
  
  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="입지환경 지도 1"
        />
        {/* <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="입지환경 지도 2"
        /> */}
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
        <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
        <p className={styles.premiumSubtitle}>
          김포의 중심에서 누리는<br />
          프리미엄 라이프의 완성
        </p>
        </div>
        {/* 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "북변 새도시 중심에서 완성되는 미래가치",
      desc:
        "약 7천여 세대로 조성되는 북변 새도시 프리미엄 <br /> 김포의 새로운 주거 중심에서 만나는 브랜드 라이프",
    },
    {
      img: slide2,
      title: "칸타빌만의 차별화된 특화설계",
      desc:
        "66㎡ 알파룸·84㎡ 선택형 구조 <br /> 라이프스타일을 고려한 혁신 평면 설계",
    },
    {
      img: slide3,
      title: "서울로 빠르게 연결되는 교통 프리미엄",
      desc:
        "걸포북변역 생활권과 김포한강로 이용 <br /> 서울 5호선 연장 기대감까지 더한 광역 교통망",
    },
    {
      img: slide4,
      title: "교육·생활·자연을 누리는 프리미엄 인프라",
      desc:
        "김포초·김포중·김포고 인접 학군 <br /> 홈플러스·김포근린공원 등 편리한 생활 인프라",
    },
    {
      img: slide5,
      title: "품격을 높이는 커뮤니티와 스마트 시스템",
      desc:
        "피트니스·골프연습장·작은도서관 등 다양한 커뮤니티 <br /> 스마트 라이프를 완성하는 첨단 시스템",
    },
    {
      img: slide6,
      title: "희소가치 높은 프리미엄 주거단지",
      desc:
        "복층형 펜트하우스와 테라스 특화설계 <br /> 김포 북변에서 만나는 새로운 주거 프리미엄",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>BUSINESS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      {/* ─── 히어로 이미지 ─── */}
      <img src={heroImage} className={styles.heroImage} alt="김포 칸타빌 에디션 섹션이미지1 " />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div key={key} className={styles.accordionItem}>
          <button
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
