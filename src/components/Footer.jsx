import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaGlobe } from "react-icons/fa";
import appStoreTr from "../assets/images/download-section-images/app-store.svg";
import appStoreEn from "../assets/images/download-section-images/app-store-en.svg";
import googlePlayTr from "../assets/images/download-section-images/google-play.svg";
import googlePlayEn from "../assets/images/download-section-images/google-play-en.svg";
import huaweiAppTr from "../assets/images/download-section-images/app-gallery.svg";
import huaweiAppEn from "../assets/images/download-section-images/app-gallery-en.svg";
import { useLanguage } from "../contexts/LanguageContext";
import locales from "../locales/locales";

const Footer = () => {
  const { language } = useLanguage();
  const t = locales[language].footer;

  const appStore = language === "en" ? appStoreEn : appStoreTr;
  const googlePlay = language === "en" ? googlePlayEn : googlePlayTr;
  const huaweiApp = language === "en" ? huaweiAppEn : huaweiAppTr;

  const footerLinks = [
    {
      title: t.column1.title,
      images: [
        { src: appStore, alt: "App Store", href: "#" },
        { src: googlePlay, alt: "Google Play", href: "#" },
        { src: huaweiApp, alt: "AppGallery", href: "#" },
      ],
    },
    {
      title: t.column2.title,
      links: t.column2.links.map((text) => ({ text, href: "#" })),
    },
    {
      title: t.column3.title,
      links: t.column3.links.map((text) => ({ text, href: "#" })),
    },
    {
      title: t.column4.title,
      links: t.column4.links.map((text) => ({ text, href: "#" })),
    },
  ];

  return (
    <footer className="bg-white text-base text-gray-700 px-6 md:px-36 pt-10 pb-4">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-4">
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h3 className="text-[#5d3ebc]  mb-3">{section.title}</h3>

            {section.images ? (
              <div className="flex flex-col gap-3">
                {section.images.map((img, i) => (
                  <a
                    key={i}
                    href={img.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-40 cursor-pointer"
                    />
                  </a>
                ))}
              </div>
            ) : (
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href}>{link.text}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center gap-3 text-gray-500 text-xs">
        <div className="flex flex-row gap-4">
          <div>© 2025 Getir </div>
          <div className="flex gap-2">
            <span>•</span>
            <a href="#" className="text-[#5d3ebc]">
              {locales[language]["information-society-services"]}
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <div className="flex gap-1 text-base text-gray-700">
            <FaFacebookF className="cursor-pointer hover:text-[#5d3ebc] w-6" />
            <FaTwitter className="cursor-pointer hover:text-[#5d3ebc] w-6" />
            <FaInstagram className="cursor-pointer hover:text-[#5d3ebc] w-6" />
          </div>

          <div className="text-gray-700 border border-gray-200 px-2 py-1 rounded text-sm cursor-pointer hover:text-[#5d3ebc] flex items-center gap-2">
            <FaGlobe size={16} />
            <span>Türkçe (TR)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
