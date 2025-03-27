const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const heroImg = document.querySelector("div.relative.top-0");
let menuOpen = false;

mobileMenuButton.addEventListener("click", event => {
  event.stopPropagation();
  menuOpen = !menuOpen;
  mobileMenuButton.classList.toggle("open", menuOpen);
  if (menuOpen) {
    mobileMenu.classList.remove("translate-x-full", "opacity-0");
    mobileMenu.classList.add("translate-x-0", "opacity-100");
    // Disable scrolling
    document.body.style.overflow = "hidden";
  } else {
    closeMenu();
  }
});

// Tutup menu jika klik di luar tombol dan menu
document.addEventListener("click", event => {
  if (menuOpen && !mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
    closeMenu();
  }
});

function closeMenu() {
  menuOpen = false;
  mobileMenuButton.classList.remove("open");
  mobileMenu.classList.remove("translate-x-0", "opacity-100");
  mobileMenu.classList.add("translate-x-full", "opacity-0");
  // Enable scrolling
  document.body.style.overflow = "";
}




// Event scroll untuk mengubah warna hamburger setelah melewati hero
window.addEventListener("scroll", () => {
  if (heroImg) {
    const heroHeight = heroImg.offsetHeight;
    if (window.scrollY > heroHeight) {
      mobileMenuButton.classList.add("after-hero");
    } else {
      mobileMenuButton.classList.remove("after-hero");
    }
  }
});

// menu dropdown *
// Kode Dropdown untuk Nav (Desktop)
const navDropdownToggles = document.querySelectorAll("#desktop-menu .dropdown-toggle");

navDropdownToggles.forEach(toggle => {
  toggle.addEventListener("click", e => {
    e.preventDefault();
    e.stopPropagation();

    const dropdownName = toggle.getAttribute("data-dropdown");
    const currentDropdown = document.getElementById(`dropdown-${dropdownName}`);
    const isHidden = currentDropdown.classList.contains("hidden");

    // Tutup dropdown lain di nav
    document.querySelectorAll("#desktop-menu .dropdown-menu").forEach(menu => {
      if (menu !== currentDropdown && !menu.classList.contains("hidden")) {
        menu.classList.add("hidden");
        const name = menu.id.replace("dropdown-", "");
        document.querySelectorAll(`#desktop-menu .dropdown-toggle[data-dropdown="${name}"]`).forEach(t => t.classList.remove("open"));
      }
    });

    // Toggle dropdown nav saat ini
    if (isHidden) {
      currentDropdown.classList.remove("hidden");
      toggle.classList.add("open");
      currentDropdown.classList.add("animate-slideDown");
      setTimeout(() => {
        currentDropdown.classList.remove("animate-slideDown");
      }, 300);
    } else {
      currentDropdown.classList.add("hidden");
      toggle.classList.remove("open");
    }
  });
});

document.addEventListener("click", () => {
  document.querySelectorAll("#desktop-menu .dropdown-menu").forEach(menu => {
    if (!menu.classList.contains("hidden")) {
      menu.classList.add("hidden");
      const name = menu.id.replace("dropdown-", "");
      document.querySelectorAll(`#desktop-menu .dropdown-toggle[data-dropdown="${name}"]`).forEach(toggle => toggle.classList.remove("open"));
    }
  });
});

// Kode Dropdown untuk Filter
const filterDropdownToggles = document.querySelectorAll("#categoryContainer .dropdown-toggle");

filterDropdownToggles.forEach(toggle => {
  toggle.addEventListener("click", e => {
    e.preventDefault();
    e.stopPropagation();

    const dropdownName = toggle.getAttribute("data-dropdown");
    const currentDropdown = document.getElementById(`dropdown-${dropdownName}`);
    const isHidden = currentDropdown.classList.contains("hidden");

    // Tutup dropdown lain di filter
    document.querySelectorAll("#categoryContainer .dropdown-menu").forEach(menu => {
      if (menu !== currentDropdown && !menu.classList.contains("hidden")) {
        menu.classList.add("hidden");
        const name = menu.id.replace("dropdown-", "");
        document.querySelectorAll(`#categoryContainer .dropdown-toggle[data-dropdown="${name}"]`).forEach(t => t.classList.remove("open"));
      }
    });

    // Toggle dropdown filter saat ini
    if (isHidden) {
      currentDropdown.classList.remove("hidden");
      toggle.classList.add("open");
      currentDropdown.classList.add("animate-slideDown");
      setTimeout(() => {
        currentDropdown.classList.remove("animate-slideDown");
      }, 300);
    } else {
      currentDropdown.classList.add("hidden");
      toggle.classList.remove("open");
    }
  });
});

document.addEventListener("click", () => {
  document.querySelectorAll("#categoryContainer .dropdown-menu").forEach(menu => {
    if (!menu.classList.contains("hidden")) {
      menu.classList.add("hidden");
      const name = menu.id.replace("dropdown-", "");
      document.querySelectorAll(`#categoryContainer .dropdown-toggle[data-dropdown="${name}"]`).forEach(toggle => toggle.classList.remove("open"));
    }
  });
});

// dropdown section herro

// Menu Mobile*
document.addEventListener("DOMContentLoaded", () => {
  // Ambil semua link di dalam nav
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(link => {
    link.addEventListener("click", event => {
      // Ambil target anchor dari atribut href
      const targetId = link.getAttribute("href");

      // Cari parent <li> dari link yang diklik
      const parentLi = link.parentElement;
      // Cari elemen <li> berikutnya yang diasumsikan berisi ikon (gambar Down)
      const sibling = parentLi.nextElementSibling;

      if (sibling) {
        const img = sibling.querySelector("img");
        // Jika gambar ada dan src mengandung "Down"
        if (img && img.getAttribute("src").includes("Down")) {
          // Tambahkan kelas rotasi untuk memulai animasi
          img.classList.add("rotate-up");
          // Hapus kelas rotasi setelah 300ms agar gambar kembali ke posisi semula
          setTimeout(() => {
            img.classList.remove("rotate-up");
          }, 300);
        }
      }

      // Cegah aksi default agar animasi terlihat sebelum navigasi
      event.preventDefault();
      // Setelah animasi selesai (300ms), lakukan scroll ke target
      setTimeout(() => {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    });
  });
});

// button
const buttons = document.querySelectorAll(".btn-primary");

buttons.forEach(button => {
  const icon = button.querySelector(".iconbtn"); // Ambil icon di dalam button

  button.addEventListener("click", () => {
    if (icon) {
      icon.classList.toggle("iconbtn-rotate");
    }
  });
});

// popup contact*
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close-btn");
const contactBtn = document.getElementById("contact-btn");
const overlay = document.getElementById("popup-overlay");

contactBtn.addEventListener("click", () => {
  popup.classList.add("open");
  overlay.style.display = "block"; // Aktifkan overlay
});

closeBtn.addEventListener("click", () => {
  popup.classList.remove("open");
  overlay.style.display = "none"; // Hilangkan overlay
});





// insight*
document.addEventListener("DOMContentLoaded", function () {
  // Swiper otomatis
  new Swiper(".swiper-auto", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 20,
    speed: 5000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    freeMode: true,
    freeModeMomentum: false,
  });

  // Swiper manual dengan geser 1 card per navigasi dan loop infinity
  new Swiper(".swiper-manual", {
    slidesPerView: "auto",
    slidesPerGroup: 1,
    spaceBetween: 20,
    loop: true, // aktifkan infinite loop
    autoplay: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});


// // slider section stories*
document.addEventListener("DOMContentLoaded", function () {
  const slideContainer = document.getElementById("newSlideContainer");
  const prevButton = document.getElementById("newPrevButton");
  const nextButton = document.getElementById("newNextButton");
  const border = document.getElementById("borderIndicator");
  const cards = document.querySelectorAll("#newSlideContainer > div");

  let isMobile = window.innerWidth < 640;
  let cardWidth = isMobile ? slideContainer.offsetWidth : cards[0].offsetWidth + 24;
  let currentIndex = 0;

  function updateActiveCard() {
    cards.forEach((card, index) => {
      const textElement = card.querySelector("p.font-gloock");

      if (index === currentIndex) {
        card.classList.remove("text-gray-100");
        card.classList.add("text-dark");
        card.querySelector("img").classList.remove("opacity-50");
        textElement.classList.remove("text-gray-100");
        textElement.classList.add("text-dark");
      } else {
        card.classList.remove("text-dark");
        card.classList.add("text-gray-100");
        card.querySelector("img").classList.add("opacity-50");
        textElement.classList.remove("text-dark");
        textElement.classList.add("text-gray-100");
      }
    });

    updateBorder();
    checkButtons();
  }

  function updateBorder() {
    const totalWidth = cardWidth * (cards.length - 1);
    const scrollPosition = slideContainer.scrollLeft;
    const percentage = (scrollPosition / totalWidth) * 100;
    border.style.width = `${percentage}%`;
  }

  function moveNext() {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      slideContainer.scrollTo({ left: currentIndex * cardWidth, behavior: "smooth" });
      updateActiveCard();
    }
  }

  function movePrev() {
    if (currentIndex > 0) {
      currentIndex--;
      slideContainer.scrollTo({ left: currentIndex * cardWidth, behavior: "smooth" });
      updateActiveCard();
    }
  }

  function checkButtons() {
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === cards.length - 1;

    prevButton.classList.toggle("opacity-50", prevButton.disabled);
    prevButton.classList.toggle("cursor-not-allowed", prevButton.disabled);
    nextButton.classList.toggle("opacity-50", nextButton.disabled);
    nextButton.classList.toggle("cursor-not-allowed", nextButton.disabled);
  }

  // Event listener untuk update ukuran saat resize
  window.addEventListener("resize", () => {
    isMobile = window.innerWidth < 640;
    cardWidth = isMobile ? slideContainer.offsetWidth : cards[0].offsetWidth + 24;
  });

  nextButton.addEventListener("click", moveNext);
  prevButton.addEventListener("click", movePrev);
  slideContainer.addEventListener("scroll", updateBorder);

  // Inisialisasi pertama kali
  updateActiveCard();
});

// button hero*
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const categoryContainer = document.getElementById("categoryContainer");

searchButton.addEventListener("click", () => {
  searchInput.classList.toggle("hidden"); // Tampilkan/sembunyikan input
  categoryContainer.classList.toggle("hidden"); // Sembunyikan/tampilkan kategori
  searchInput.focus(); // Fokus ke input saat ditampilkan
});

// swiper section partner*
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".swiper", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 20,
    speed: 5000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    freeMode: true,
    freeModeMomentum: false,
  });
});


// your vision
document.querySelectorAll(".view-button").forEach(button => {
  button.addEventListener("click", function () {
    const img = this.querySelector(".arrow-icon");
    const text = this.querySelector(".view-text");

    img.classList.toggle("move-back");
    text.classList.toggle("text-blue-500"); // Mengubah warna teks saat diklik
  });
});


// header scroll
window.addEventListener("scroll", function () {
  const menuContainer = document.getElementById("menu-container");
  const logoImg = document.getElementById("logo-img");
  const siteTitle = document.getElementById("site-title");
  const heroSection = document.querySelector("div.relative.top-0");
  const heroHeight = heroSection.offsetHeight;
  const currentScrollY = window.scrollY;
  const isMobile = window.innerWidth < 640; // untuk layar di bawah 640px

  // Mengatur menu dan teks
  if (currentScrollY > heroHeight) {
    // Fade-out menu dan site title
    if (!menuContainer.classList.contains("fade-out")) {
      menuContainer.classList.remove("fade-in");
      menuContainer.classList.add("fade-out");
    }
    if (!siteTitle.classList.contains("fade-out")) {
      siteTitle.classList.remove("fade-in");
      siteTitle.classList.add("fade-out");
    }
  } else {
    // Fade-in menu dan site title
    if (!menuContainer.classList.contains("fade-in")) {
      menuContainer.classList.remove("fade-out");
      menuContainer.classList.add("fade-in");
    }
    if (!siteTitle.classList.contains("fade-in")) {
      siteTitle.classList.remove("fade-out");
      siteTitle.classList.add("fade-in");
    }
  }

  // Mengatur logo
  if (currentScrollY > heroHeight) {
    if (isMobile) {
      // Untuk layar di bawah 640px, sembunyikan logo ketika sudah melewati hero
      if (!logoImg.classList.contains("fade-out")) {
        logoImg.classList.remove("fade-in", "icon-black");
        logoImg.classList.add("fade-out");
      }
    } else {
      // Untuk desktop, tampilkan logo dengan fade-in dan ubah warnanya menjadi hitam
      if (!logoImg.classList.contains("fade-in") || !logoImg.classList.contains("icon-black")) {
        logoImg.classList.remove("fade-out");
        logoImg.classList.add("fade-in", "icon-black");
      }
    }
  } else {
    // Saat masih di dalam hero, tampilkan logo secara normal
    if (!logoImg.classList.contains("fade-in")) {
      logoImg.classList.remove("fade-out");
      logoImg.classList.add("fade-in");
    }
    // Untuk desktop, pastikan logo tidak berwarna hitam, tetapi untuk mobile
    // kita hanya ingin memastikan logo tampil normal.
    logoImg.classList.remove("icon-black");
  }
});


// swipper section our vision*
// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: "auto",
//   spaceBetween: 20,
//   centeredSlides: true,
//   loop: true,
//   autoplay: {
//     delay: 3000, // Ubah sesuai kebutuhan
//     disableOnInteraction: false,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

// scroll*
const heroImge = document.querySelector("div.relative.top-0");
let heroHeight = heroImg ? heroImg.offsetHeight : 0;

// Gunakan passive event listener untuk scroll
window.addEventListener(
  "scroll",
  () => {
    // Jika tinggi hero sudah disimpan, gunakan heroHeight yang sudah di-cache
    if (window.scrollY > heroHeight) {
      mobileMenuButton.classList.add("after-hero");
    } else {
      mobileMenuButton.classList.remove("after-hero");
    }
  },
  { passive: true }
);

// fillter galery*
document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", () => {
    // Atur warna tombol: semua kembali ke text-secondary, kecuali tombol yang diklik jadi text-black
    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.classList.remove("text-black");
      btn.classList.add("text-secondary");
    });
    button.classList.remove("text-secondary");
    button.classList.add("text-black");

    // Filter gallery
    const category = button.getAttribute("data-category");
    document.querySelectorAll(".gallery-item").forEach(item => {
      if (category === "All" || item.getAttribute("data-category") === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// ===*
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("slider");
  let scrollSpeed = 1; // Sesuaikan kecepatan scroll

  function autoScroll() {
    slider.scrollLeft += scrollSpeed;
    if (slider.scrollLeft >= slider.scrollWidth / 2) {
      slider.scrollLeft = 0;
    }
    requestAnimationFrame(autoScroll);
  }

  autoScroll();
});


// swipper your vision
// document.addEventListener("DOMContentLoaded", function () {
//   const wrapper = document.querySelector(".custom-swiper-wrapper");
//   const scrollSpeed = 1; // Atur kecepatan scroll

//   function autoScroll() {
//     wrapper.scrollLeft += scrollSpeed;
//     // Reset scroll ketika mencapai setengah dari scrollWidth (karena konten diduplikasi)
//     if (wrapper.scrollLeft >= wrapper.scrollWidth / 2) {
//       wrapper.scrollLeft = 0;
//     }
//     requestAnimationFrame(autoScroll);
//   }

//   autoScroll();
// });




