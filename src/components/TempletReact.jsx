import { useEffect } from "react";

export default function TempletReact() {
  useEffect(() => {
    const buttons = document.querySelectorAll(".main_menu a, .responsive_menu a");
    const sections = document.querySelectorAll("#menu-container > div");
    const bg = document.querySelector(".bg-image");
    const toggleBtn = document.querySelector(".menu-toggle-btn");
    const responsiveMenu = document.querySelector(".responsive_menu");

    // إظهار وإخفاء القائمة في الهواتف
    if (toggleBtn && responsiveMenu) {
      toggleBtn.addEventListener("click", (e) => {
        e.preventDefault();
        responsiveMenu.classList.toggle("open");
      });
    }

    const handleClick = (e) => {
      e.preventDefault();
      const classList = e.currentTarget.classList;
      const match = Array.from(classList).find((c) => c.startsWith("show-"));
      if (!match) return;

      const index = match.split("-")[1];
      const targetId = `menu-${index}`;

      // تغيير الخلفية بناءً على القسم
      switch (targetId) {
        case "menu-1":
          bg.style.backgroundImage = "url('https://res.cloudinary.com/dadtybpaw/image/upload/v1745431771/images-2/pg3.jpg')";
          break;
        case "menu-2":
          bg.style.backgroundImage = "url('https://res.cloudinary.com/dadtybpaw/image/upload/v1745439408/images-2/%D8%B5%D9%88%D8%B1%D8%A9%20%D9%88%D8%A7%D8%AA%D8%B3%D8%A7%D8%A8%20%D8%A8%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE%201446-08-03%20%D9%81%D9%8A%2016.27.01_3c2f32c4.jpg')";
          break;
        case "menu-3":
          bg.style.backgroundImage = "url('https://res.cloudinary.com/dadtybpaw/image/upload/v1745431581/images-2/bg10.jpg')";
          break;
        case "menu-4":
          bg.style.backgroundImage = "url('https://res.cloudinary.com/dadtybpaw/image/upload/v1745431586/images-2/bg12.jpg')";
          break;
        case "menu-5":
          bg.style.backgroundImage = "url('https://res.cloudinary.com/dadtybpaw/image/upload/v1745431587/images-2/bg13.jpg')";
          break;
        case "menu-6":
          bg.style.backgroundImage = "url('https://res.cloudinary.com/dadtybpaw/image/upload/v1745431594/images-2/bg6.jpg')";
          break;
        case "menu-7":
          bg.style.backgroundImage = "url('https://res.cloudinary.com/dadtybpaw/image/upload/v1745431596/images-2/bg7.jpg')";
          break;
        default:
          bg.style.backgroundImage = "url('https://res.cloudinary.com/dadtybpaw/image/upload/v1745431592/images-2/bg4.jpg')";
      }

      // إخفاء الأقسام السابقة
      sections.forEach((section) => {
        if (section.classList.contains("active")) {
          section.classList.remove("active");
          setTimeout(() => {
            section.style.display = "none";
          }, 500);
        }
      });

      // إظهار القسم المستهدف
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.style.display = "block";
        setTimeout(() => {
          targetSection.classList.add("active");
        }, 10);
      }

      // إخفاء القائمة بعد الاختيار (للهواتف)
      if (responsiveMenu?.classList.contains("open")) {
        responsiveMenu.classList.remove("open");
      }
    };

    // ربط حدث الضغط على الروابط
    buttons.forEach((btn) => {
      btn.addEventListener("click", handleClick);
    });

    // عرض أول قسم عند التحميل
    sections.forEach((section, index) => {
      if (index === 0) {
        section.style.display = "block";
        section.classList.add("active");
      } else {
        section.style.display = "none";
      }
    });

    return () => {
      buttons.forEach((btn) => {
        btn.removeEventListener("click", handleClick);
      });
      if (toggleBtn) {
        toggleBtn.removeEventListener("click", () => {});
      }
    };
  }, []);

  return null;
}
