"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import Searchbar from "@/components/custom/Search/Searchbar";

const Home = () => {

  const homeImages = [
    // "https://firebasestorage.googleapis.com/v0/b/mern-ecommerce-f07b1.appspot.com/o/IMG_6126.jpg?alt=media&token=d447b673-cb9b-4b01-bb24-77cdb6112e4c",
    // "https://firebasestorage.googleapis.com/v0/b/mern-ecommerce-f07b1.appspot.com/o/B37F9E516E0EC1E3081EEFECA2555857.jpg?alt=media&token=a357a0a9-acc5-4267-b141-f7236d07b766",
    // "https://firebasestorage.googleapis.com/v0/b/mern-ecommerce-f07b1.appspot.com/o/IMG_6049.jpg?alt=media&token=60b7764e-4814-46a8-a05c-d7990b4c3973"
    "https://firebasestorage.googleapis.com/v0/b/collab-checklist.appspot.com/o/FlatsCoverWebP.webp?alt=media&token=27e98ee5-049a-44e5-8f37-151c3f1f2619",
    "https://firebasestorage.googleapis.com/v0/b/collab-checklist.appspot.com/o/EdgewaterCoverWebP.webp?alt=media&token=88867055-ee83-497a-b8b7-29f907b464a2",
    "https://firebasestorage.googleapis.com/v0/b/collab-checklist.appspot.com/o/KSUCoverWebP.webp?alt=media&token=c08f29e7-04e2-4a11-8695-e547ed92c834"
]

const rotatingWords = [
    "Corporate Event",
    "Wedding",
    "Church Picnic",
    "Graduation"
]

const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const [fadeImage, setFadeImage] = useState(true);

    useEffect(() => {
      const interval = setInterval(() => {
          setFade(false);
          setTimeout(() => {
              setCurrentWordIndex(prevIndex => (prevIndex + 1) % rotatingWords.length);
              setFade(true);
          }, 500); // Duration of fade-out effect
      }, 2750);

      return () => clearInterval(interval);
  }, []);

  useEffect(() => {
      const imageInterval = setInterval(() => {
          setFadeImage(false);
          setTimeout(() => {
              setCurrentImageIndex(prevIndex => (prevIndex + 1) % homeImages.length);
              setFadeImage(true);
          }, 500); // Duration of fade-out effect
      }, 8000);

      return () => clearInterval(imageInterval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen relative">
        <div className="absolute top-0 left-0 w-full h-[100vh] bg-black/50 z-10"></div>
            <Image width={1200} height={900} alt="hero" draggable="false" src={homeImages[currentImageIndex]} className="w-full h-[100vh] object-cover absolute top-0 left-0" />
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-10 w-[100%]">
            <div className="flex flex-col items-center mx-4">
            <h1 className="text-white md:text-6xl text-4xl my-5 font-thin ">Everything for your</h1>
            
            <h1 className={`text-white md:text-5xl text-3xl uppercase font-bold mb-5 ${fade ? 'fade-in' : 'fade-out'}`}>
                        {rotatingWords[currentWordIndex]}
                </h1>
        </div>
            
            <Searchbar />
            
        </div>
        
    </div>
  );
}

export default Home