import React from "react";
import FeatureCard from "./FeatureCard";

import feature1 from "../assets/images/features-images/feature1.svg";
import feature2 from "../assets/images/features-images/feature2.svg";
import feature3 from "../assets/images/features-images/feature3.svg";
import { useLanguage } from "../contexts/LanguageContext";
import locales from "../locales/locales";

const Features = () => {
  const { language } = useLanguage();
  const features = locales[language].features;

  const featureImages = {
    feature1,
    feature2,
    feature3,
  };

  return (
    <section className="bg-[#f8f8f8] px-3 py-6 md:py-10 md:px-36">
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            image={featureImages[feature.image]}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};
export default Features;
