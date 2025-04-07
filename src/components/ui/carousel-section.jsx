"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button-section";
import { Card, CardHeader, CardContent } from "@/components/ui/card-section";
import  '../../news-slider-section.css';



export default function Carousel() {
  const news = [
    {
      id: 0,
      image: "/news0.jpg",
      date: "يناير 18",
      title: "سعودية تؤسس جمعية للرفق بالحيوان بجدة..”والبيئة” تتوعد المسيئين.",
    },
    {
      id: 1,
      image: "/news1.jpg",
      date: "يناير 18",
      title: "عين الرفق”.. حملة تنطلق بجدة و”البيئة” تتوعد المسيئين للحيوانات.",
    },
    {
        id: 2,
        image: "/news2.jpg",
        date: "يناير 10",
        title: "التباهي باصطحاب الحيوانات تقليد أعمى.",
      },
      {
        id: 3,
        image: "/news3.jpg",
        date: "يناير 10",
        title: "ملاجئ الحيوانات مبادرات فردية تحولت إلى جمعيات.",
      },
      {
        id: 4,
        image: "/news4.jpg",
        date: "يناير 10",
        title: "بسبب التباعد الاجتماعي ارتفاع في تبني الحيوانات الأليفة !",
      },
      {
        id: 5,
        image: "/news5.jpg",
        date: "يناير 10",
        title: "تأسيس جمعية للرفق بالحيوان في جدة.",
      },
      {
        id: 6,
        image: "/news6.jpg",
        date: "يناير 10",
        title: "Meet the woman changing the face of animal adoption in Saudi Arabia.",
      },
  ];

  const scrollContainer = useRef(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const isArabicText = (text) => /[\u0600-\u06FF]/.test(text);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Dividers Section */}
      <div className="relative mb-8">
        {/* Blue Divider */}
        <div
          className="absolute right-0 bg-[#ccdae2]"
          style={{ width: "2px", height: "750.006px" }}
        ></div>
        {/* Orange Divider */}
        <div
          className="absolute right-0"
          style={{
            width: "2px",
            height: "100px",
            backgroundColor: "#FFC1A2",
            zIndex: 2,
            flexShrink: 0,
            top: "25px",
          }}
        ></div>
      </div>
      
          {/* Title Section */}
      <div className="flex flex-col pb-12">
        <div className="flex justify-between items-center">
        <h2
          className="text-2xl font-bold text-right font-tajawal pr-6"
          style={{ order: 1, paddingRight: '32px'}}
        >
          أحدث الأخبار
        </h2>


      {/* Navigation Buttons */}
      <div className="flex order-2 mb-4">
        <Button onClick={scrollLeft} variant="outline" className="mr-2 shadow-md">
          ❮
        </Button>
        <Button onClick={scrollRight} variant="outline" className="mr-2 shadow-md">
          ❯
        </Button>
      </div>
      </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div ref={scrollContainer} className="flex overflow-x-scroll space-x-4 scrollbar-hide" dir="rtl">
        {news.map((item) => (
          <Card key={item.id} className="min-w-[300px]">
            <CardHeader>
              <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
            </CardHeader>
            <CardContent className="CardContent">
              <p className="text-gray-500 text-sm mb-2 text-right font-tajawal">{item.date}</p>
              <p className="text-lg font-tajawal" dir={isArabicText(item.title) ? "rtl" : "ltr"}>
                {item.title}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-start mt-6">
        <Button className="more" dir="rtl">
          كل الأخبار
        </Button>
      </div>
    </div>
  );
}
