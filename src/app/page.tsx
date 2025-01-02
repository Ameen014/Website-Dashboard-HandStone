import React, { Suspense } from 'react';
import HomeCategorySetion from "./ui/home/homeCategoriesSection";
import HomeContactSection from "./ui/home/homeContactSection";
import HomeSectionOne from "./ui/home/homeSectionOne";
import HomeSectionThree from "./ui/home/homeSectionThree";
import HomeSectionTwo from "./ui/home/homeSectionTwo";
import HomeProductsSection from './ui/home/homeProductsSection';

export default function Home() {
  return (
    <div>
      <HomeSectionOne />/
      <HomeSectionTwo />
      <HomeSectionThree />
      <Suspense fallback={<div>loading</div>}>
        <HomeCategorySetion />
      </Suspense>
      <HomeProductsSection/>
      <HomeContactSection />
    </div>
  );
}
