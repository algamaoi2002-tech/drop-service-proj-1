const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  navLinks.classList.toggle("is-open", !isExpanded);
});

navLinks.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("is-open");
  }
});

document.querySelector("#year").textContent = new Date().getFullYear();

const contactForm = document.querySelector("#contact-form");
const contactEmail = "hello@example.com";

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactForm.reportValidity()) {
    return;
  }

  const formData = new FormData(contactForm);
  const subject = encodeURIComponent(`استفسار جديد من ${formData.get("name")}`);
  const body = encodeURIComponent(
    [
      `الاسم: ${formData.get("name")}`,
      `البريد الإلكتروني: ${formData.get("email")}`,
      `الخدمة: ${formData.get("service")}`,
      "",
      `تفاصيل المشروع:\n${formData.get("message")}`,
    ].join("\n"),
  );

  window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
});
