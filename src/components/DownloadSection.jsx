import React from "react";
import appStore from "../assets/images/download-section-images/app-store.svg";
import googlePlay from "../assets/images/download-section-images/google-play.svg";
import huaweiApp from "../assets/images/download-section-images/app-gallery.svg";
import phonesImage from "../assets/images/download-section-images/download-image.png";

const DownloadSection = () => {
  return (
    <section className="bg-[#f8f8f8] py-6 md:py-6 xl:px-36">
      <div className="max-w-7xl mx-auto bg-[#5d3ebc] text-white xl:rounded-lg overflow-hidden relative flex flex-col md:flex-row md:items-center md:justify-between px-6 md:px-12 py-10 md:py-20">
        {/* Text & Buttons */}
        <div className="z-10 max-w-md flex flex-col gap-6">
          <h2 className="text-2xl md:text-3xl font-bold">Getir'i indir!</h2>
          <p className="text-base leading-relaxed font-semibold">
            İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.
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
