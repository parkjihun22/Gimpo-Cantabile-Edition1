import React, { useState } from "react";
import styles from "./EmodelInline.module.scss";

// Emodel.jsx 에 정의된 탭과 URL을 그대로 복사합니다.
const menuContents = [
  { title: "66A", key: "66A" },
  { title: "84A", key: "84A" },
  // { title: "84B", key: "84B" },
  // { title: "106", key: "106" },
];

const vrUrls = {
  "66A": "https://sws360.com/2025/cow/theedition_emodel_66a/index.htm?media-index=1",
  "84A": "https://sws360.com/2025/cow/theedition_emodel_84a/index.htm?media-index=1",
  // "84B": "https://dongwonapt.co.kr/braincity_vista_dongwon/vr/84B/vtour/tour.html",
  // "106": "https://dongwonapt.co.kr/braincity_vista_dongwon/vr/106/vtour/tour.html",
};

export default function EmodelInline() {
  const [selectedType, setSelectedType] = useState("66A");

  return (
    <div className={styles.inlineWrapper}>
      {/* ─── 타입 탭 메뉴 ─── */}
      <div className={styles.tabMenu}>
        {menuContents.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setSelectedType(tab.key)}
            className={`${styles.tabButton} ${
              selectedType === tab.key ? styles.activeTab : ""
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* ─── VR 뷰어 ─── */}
      <div className={styles.vrSection}>
        <iframe
          className={styles.vrIframe}
          src={vrUrls[selectedType]}
          title={`${selectedType} VR`}
          allowFullScreen
          frameBorder="0"
        />
      </div>
    </div>
  );
}
