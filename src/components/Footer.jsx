import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaGlobe } from "react-icons/fa";
import appStore from "../assets/images/download-section-images/app-store.svg";
import googlePlay from "../assets/images/download-section-images/google-play.svg";
import huaweiApp from "../assets/images/download-section-images/app-gallery.svg";

const Footer = () => {
  const footerLinks = [
    {
      title: "Getir'i indir!",
      images: [
        { src: appStore, alt: "App Store", href: "#" },
        { src: googlePlay, alt: "Google Play", href: "#" },
        { src: huaweiApp, alt: "AppGallery", href: "#" },
      ],
    },
    {
      title: "Getir'i keşfet",
      links: [
        { text: "Hakkımızda", href: "#" },
        { text: "Kariyer", href: "#" },
        { text: "Teknoloji Kariyerleri", href: "#" },
        { text: "İletişim", href: "#" },
        { text: "Sosyal Sorumluluk Projeleri", href: "#" },
        { text: "Basın Bültenleri", href: "#" },
      ],
    },
    {
      title: "Yardıma mı ihtiyacın var?",
      links: [
        { text: "Sıkça Sorulan Sorular", href: "#" },
        { text: "Kişisel Verilerin Korunması", href: "#" },
        { text: "Gizlilik Politikası", href: "#" },
        { text: "Kullanım Koşulları", href: "#" },
        { text: "Çerez Politikası", href: "#" },
        { text: "İşlem Rehberi", href: "#" },
      ],
    },
    {
      title: "İş Ortağımız Ol",
      links: [
        { text: "Bayimiz Olun", href: "#" },
        { text: "Deponu Kirala", href: "#" },
        { text: "GetirYemek Restoranı Ol", href: "#" },
        { text: "GetirÇarşı İşletmesi Ol", href: "#" },
        { text: "Zincir Restoranlar", href: "#" },
      ],
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
              Bilgi Toplumu Hizmetleri
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
