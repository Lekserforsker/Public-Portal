import Image from "next/image";
import { Button } from "@/components/ui/button";
import Carousel from "@/components/ui/carousel-section";
import "../style.css";

export default function Home() {
  return (
    <main>
          <div className="content">
        <div className="content-right">
            <h2>جمعية تعايش معي للرفق بالحيوان  </h2>
           <h3 className="text-[#5E88C3] m-0">تبنّى ... لا تشتري </h3>
           <img src="Screenshot 2025-01-16 150900 (1).png" alt="" />
        </div>
        <div className="content-left">
            <h4>جمعية تعايش معي، أول جمعية متخصصة في الرفق بالحيوان بمنطقة مكة المكرمة، تسعى لتوعية المجتمع ونشر مبدأ الرفق بالحيوان من خلال حماية ورعاية الحيوانات، وتنظم حملات توعوية لتعزيز التعايش واحترام حقوقها، تحت إشراف وزارة الموارد البشرية والتنمية الاجتماعية.</h4>
        <h5 className="text-[#5E88C3]">قراءة المزيد <i className="fa-solid fa-arrow-left"></i></h5>
        </div>
    </div>

<div className="section">
    <div className="circle"></div>
    <div className="circleT"></div>
    <h1 className="text-center">أنت تصنع الفرق و تمنح الأمل</h1>

    <div className="sections">
<div className="section-right">
    <div className="icon">
       <img src="Screenshot 2025-01-16 131945.png" />
        <h2>تطوع</h2>
    </div>
<h4>ساهم بجهدك ووقتك لدعم المبادرات المجتمعية , سواء كنت تساعد في رعاية الحيوانات او تنظيم الفعاليات,فإن مشاركتك تصنع فرقا كبيرا.</h4>
</div>

<div className="section-left">
    <div className="icon">
        <img src="Screenshot 2025-01-16 131840.png" alt="" />
        <h2>تبنّى</h2>
    </div>
<h4>افتح قلبك وبيتك لحيوان بحاجة إلى الرعاية. بالتبني , لا تنقذ حياة فحسب, بل تحصل على رفيق مخلص,كما تتيح لنا الفرصة لإنقاذ المزيد من الحيوانات.</h4>
</div>
<div className="section-center">
    <div className="icon">
         <img src="Screenshot 2025-01-16 131920.png" alt="" />
        <h2>تبرع</h2>
    </div>
<h4>ساهم معنا في تحقيق الأثر الأكبر من خلال تبرعاتك السخية.دعمك يمكننا من توفيرالطعام و المأوى و ارعاية الطبية للحيوانات</h4>
</div>


    </div>
</div>
      <Carousel />
    </main>
  );
}
