import React, { useState, useEffect } from "react";

const images = [
  {
    id: 1,
    bgUrl: "public/images/gp3.jpg",
    // يمكنك إضافة روابط أخرى حسب الحاجة
  },
  {
    id: 2,
    bgUrl: "https://res.cloudinary.com/dadtybpaw/image/upload/v1745424484/my_project/qq3raqcen0myc1tdcs05.jpg",
  },
  {
    id: 3,
    bgUrl: "https://res.cloudinary.com/dadtybpaw/image/upload/v1745424483/my_project/k41jc2esxkveobkxk7vn.jpg",
  },
  {
    id: 4,
    bgUrl: "https://res.cloudinary.com/dadtybpaw/image/upload/v1745424473/my_project/luxz4as1cwfgeuummxx9.jpg",
  },
  {
    id: 5,
    bgUrl: "https://res.cloudinary.com/dadtybpaw/image/upload/v1745424474/my_project/yikfirbx7tf653fq17gf.jpg",
  },
  {
    id: 6,
    bgUrl: "https://res.cloudinary.com/dadtybpaw/image/upload/v1745424472/my_project/pxrlmsdr7gjw5gzp7job.jpg",
  },
  {
    id: 7,
    bgUrl: "https://res.cloudinary.com/dadtybpaw/image/upload/v1745424480/my_project/rqjxxxbx0njgsnuhkqcb.jpg",
  },
];

const TempletReact = () => {
  // حالة لإدارة الخلفية الحالية
  const [bgImage, setBgImage] = useState(images[0].bgUrl);

  // حالة لإدارة عرض القائمة (responsive_menu)
  const [menuVisible, setMenuVisible] = useState(false);

  // حالة لإدارة الصفحات المفتوحة (menu-1, menu-2, ... )
  const [activeMenu, setActiveMenu] = useState("homepage");

  // دالة تحاكي loadScript() - يمكنك تعديلها حسب الحاجة
  const loadScript = () => {
    console.log("Script loaded");
  };

  // تغيير الخلفية مع تأثير fade
  const changeBackground = (url, needLoadScript = false) => {
    if (needLoadScript) loadScript();

    // لإنشاء تأثير fade بسيط بدون jQuery يمكن استخدام CSS لكن هنا سنستخدم مؤقت صغير
    setBgImage(""); // اجعل الخلفية فارغة لفترة قصيرة

    setTimeout(() => {
      setBgImage(url);
    }, 300); // مدة الفاصل الزمني (تأثير الـ fade تقريبي)
  };

  // التعامل مع الضغط على أزرار القائمة الرئيسية
  const handleMenuClick = (e, menuClass) => {
    e.preventDefault();

    // اختيار الصفحة حسب الرقم في الـ class (مثل show-3)
    if (menuClass.startsWith("show-")) {
      const n = menuClass.split("-")[1];
      setActiveMenu("menu-" + n);
    }

    // إظهار الصفحة الرئيسية إذا زر homebutton
    if (menuClass === "homebutton") {
      setActiveMenu("homepage");
    }
  };

  return (
    <>
      {/* الخلفية مع تأثير */}
      <div
        className="bg-image"
        style={{
          backgroundImage: `url(${bgImage})`,
          transition: "background-image 0.5s ease-in-out",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* زر القائمة للنسخة المتجاوبة */}
      <button
        className="menu-toggle-btn"
        onClick={() => setMenuVisible(!menuVisible)}
      >
        القائمة
      </button>

      {/* القائمة المتجاوبة */}
      {menuVisible && (
        <div className="responsive_menu">
          <a href="#" onClick={() => setMenuVisible(false)}>
            رابط 1
          </a>
          <a href="#" onClick={() => setMenuVisible(false)}>
            رابط 2
          </a>
          {/* أضف روابط أخرى حسب الحاجة */}
        </div>
      )}

      {/* القائمة الرئيسية */}
      <nav className="main_menu">
        {/* على سبيل المثال */}
        {["show-1", "show-2", "show-3", "show-4", "show-5", "show-6", "show-7"].map(
          (cls) => (
            <a
              href="#"
              key={cls}
              className={cls}
              onClick={(e) => {
                e.preventDefault();

                // تغيير الخلفية حسب الزر
                const imgObj = images.find(
                  (img, idx) => idx === parseInt(cls.split("-")[1]) - 1
                );
                if (imgObj) {
                  const needLoad = ["show-5", "show-6", "show-7"].includes(cls);
                  changeBackground(imgObj.bgUrl, needLoad);
                }

                // تحديث الصفحة المعروضة
                setActiveMenu("menu-" + cls.split("-")[1]);
              }}
            >
              {cls}
            </a>
          )
        )}

        {/* زر العودة للرئيسية */}
        <a
          href="#"
          className="homebutton"
          onClick={(e) => {
            e.preventDefault();
            setActiveMenu("homepage");
            changeBackground(images[0].bgUrl);
          }}
        >
          الرئيسية
        </a>
      </nav>

      {/* محتوى الصفحات */}
      <div id="menu-container">
        {activeMenu === "homepage" && (
          <div className="homepage content">محتوى الصفحة الرئيسية</div>
        )}
        {activeMenu === "menu-1" && (
          <div className="content">محتوى الصفحة 1</div>
        )}
        {activeMenu === "menu-2" && (
          <div className="content">محتوى الصفحة 2</div>
        )}
        {activeMenu === "menu-3" && (
          <div className="content">محتوى الصفحة 3</div>
        )}
        {activeMenu === "menu-4" && (
          <div className="content">محتوى الصفحة 4</div>
        )}
        {activeMenu === "menu-5" && (
          <div className="content">محتوى الصفحة 5</div>
        )}
        {activeMenu === "menu-6" && (
          <div className="content">محتوى الصفحة 6</div>
        )}
        {activeMenu === "menu-7" && (
          <div className="content">محتوى الصفحة 7</div>
        )}
      </div>

      {/* مثال لتأثير hover على services (يمكنك إضافة CSS) */}
      <Services />
    </>
  );
};

// مكون مثال لتأثير الـ hover على خدمات الخدمات
const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="services">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="service"
          onMouseEnter={() => setActiveIndex(i)}
          onMouseLeave={() => setActiveIndex(null)}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px",
            width: activeIndex === i ? "300px" : "60px",
            transition: "width 0.3s ease",
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          <h4
            style={{
              display: activeIndex === i ? "block" : "none",
              color: activeIndex === i ? "red" : "black",
            }}
          >
            خدمة {i}
          </h4>
          <div
            className="header-bg"
            style={{
              backgroundColor: "#eee",
              width: activeIndex === i ? "100%" : "60px",
              height: "50px",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default TempletReact;
