import React from "react";
import appStoreTr from "../assets/images/download-section-images/app-store.svg";
import appStoreEn from "../assets/images/download-section-images/app-store-en.svg";
import googlePlayTr from "../assets/images/download-section-images/google-play.svg";
import googlePlayEn from "../assets/images/download-section-images/google-play-en.svg";
import huaweiAppTr from "../assets/images/download-section-images/app-gallery.svg";
import huaweiAppEn from "../assets/images/download-section-images/app-gallery-en.svg";
import phonesImageTr from "../assets/images/download-section-images/download-image.png";
import phonesImageEn from "../assets/images/download-section-images/download-image-en.png";

import { useLanguage } from "../contexts/LanguageContext";
import locales from "../locales/locales";

const DownloadSection = () => {
  const { language } = useLanguage();

  const phonesImage = language === "en" ? phonesImageEn : phonesImageTr;
  const appStore = language === "en" ? appStoreEn : appStoreTr;
  const googlePlay = language === "en" ? googlePlayEn : googlePlayTr;
  const huaweiApp = language === "en" ? huaweiAppEn : huaweiAppTr;

  return (
    <section className="bg-[#f8f8f8] py-6 md:py-6 xl:px-36">
      <div className="max-w-7xl mx-auto bg-[#5d3ebc] text-white xl:rounded-lg overflow-hidden relative flex flex-col md:flex-row md:items-center md:justify-between px-6 md:px-12 py-10 md:py-20">
        {/* Text & Buttons */}
        <div className="z-10 max-w-md flex flex-col gap-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            {locales[language]["download-getir"]}
          </h2>
          <p className="text-base leading-relaxed font-semibold">
            {locales[language]["download-desc"]}
          </p>

          <div className="flex flex-col sm:flex-row md:flex-row gap-3">
            <img
              src={appStore}
              alt="App Store"
              className="w-40 cursor-pointer"
            />
            <img
              src={googlePlay}
              alt="Google Play"
              className="w-40 cursor-pointer"
            />
            <img
              src={huaweiApp}
              alt="App Gallery"
              className="w-40 cursor-pointer"
            />
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden 2xl:block absolute right-0 bottom-0 w-1/2">
          <img src={phonesImage} alt="Phones" className="h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
