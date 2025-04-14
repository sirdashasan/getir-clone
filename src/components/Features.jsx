import React from "react";
import FeatureCard from "./FeatureCard";

import feature1 from "../assets/images/features-images/feature1.svg";
import feature2 from "../assets/images/features-images/feature2.svg";
import feature3 from "../assets/images/features-images/feature3.svg";

const features = [
  {
    image: feature1,
    title: "Her siparişine bir kampanya",
    description:
      "Getir’de vereceğin her siparişe uygun bir kampanya bulabilirsin.",
  },
  {
    image: feature2,
    title: "Dakikalar içinde kapında",
    description: "Getir’le siparişin dakikalar içinde kapına gelir.",
  },
  {
    image: feature3,
    title: "Binlerce çeşit mutluluk",
    description: "Getir’de binlerce çeşit arasından seçimini yapabilirsin.",
  },
];

const Features = () => {
  return (
    <section className="bg-[#f8f8f8] px-3 py-6 md:py-10 md:px-36">
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            image={feature.image}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
