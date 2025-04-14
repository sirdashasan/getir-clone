import React from "react";
import CategoryCard from "./CategoryCard";
import atistirmalikImg from "../assets/images/categories-images/atistirmalik.png";
import suIcecekImg from "../assets/images/categories-images/su-icecek.png";
import meyveSebzeImg from "../assets/images/categories-images/meyve-sebze.png";
import sutUrunleriImg from "../assets/images/categories-images/sut-urunleri.png";
import firindanImg from "../assets/images/categories-images/firindan.png";
import dondurmaImg from "../assets/images/categories-images/dondurma.png";
import temelGidaImg from "../assets/images/categories-images/temel-gida.png";
import kahvaltilikImg from "../assets/images/categories-images/kahvaltilik.png";
import yiyecekImg from "../assets/images/categories-images/yiyecek.png";
import fitFormImg from "../assets/images/categories-images/fit-form.png";
import etTavukBalikImg from "../assets/images/categories-images/et-tavuk-balik.png";
import kisiselBakimImg from "../assets/images/categories-images/kisisel-bakim.png";
import evBakimImg from "../assets/images/categories-images/ev-bakim.png";
import evYasamImg from "../assets/images/categories-images/ev-yasam.png";
import evcilHaycanImg from "../assets/images/categories-images/evcil-hayvan.png";
import bebekImg from "../assets/images/categories-images/bebek.png";
import cinselSaglikImg from "../assets/images/categories-images/cinsel-saglik.png";

// örnek veriler
const categories = [
  { title: "Atıştırmalık", image: atistirmalikImg },
  { title: "Su & İçecek", image: suIcecekImg },
  { title: "Meyve & Sebze", image: meyveSebzeImg },
  { title: "Süt Ürünleri", image: sutUrunleriImg },
  { title: "Fırından", image: firindanImg },
  { title: "Dondurma", image: dondurmaImg },
  { title: "Temel Gıda", image: temelGidaImg },
  { title: "Kahvaltılık", image: kahvaltilikImg },
  { title: "Yiyecek", image: yiyecekImg },
  { title: "Et, Tavuk & Balık", image: etTavukBalikImg },
  { title: "Fit & Form", image: fitFormImg },
  { title: "Kişisel Bakım", image: kisiselBakimImg },
  { title: "Ev Bakım", image: evBakimImg },
  { title: "Ev & Yaşam", image: evYasamImg },
  { title: "Evcil Hayvan", image: evcilHaycanImg },
  { title: "Bebek", image: bebekImg },
  { title: "Cinsel Sağlık", image: cinselSaglikImg },
];

const Categories = () => {
  return (
    <div className="bg-white p-6 rounded-lg max-w-7xl mx-auto mt-1">
      <h3 className="text-base font-semibold mb-4">Kategoriler</h3>
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 gap-2">
        {categories.map((cat) => (
          <CategoryCard key={cat.title} title={cat.title} image={cat.image} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
