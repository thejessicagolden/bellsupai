document.addEventListener("DOMContentLoaded", () => {

  const menuButton = document.getElementById("menuButton");
  const menuClose = document.getElementById("menuClose");
  const menuBackdrop = document.getElementById("menuBackdrop");

  menuButton.addEventListener("click", () => {
    document.body.classList.add("menu-open");
  });

  menuClose.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
  });

  menuBackdrop.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
  });

  // Modal demo
  const modalTrigger = document.getElementById("demoModalTrigger");
  const modalBackdrop = document.getElementById("demoModalBackdrop");
  const modalClose = document.getElementById("demoModalClose");
  const modalCancel = document.getElementById("demoModalCancel");

  if (modalTrigger) {
    const openModal = () => {
      modalBackdrop.hidden = false;
      document.body.style.overflow = "hidden";
    };
    const closeModal = () => {
      modalBackdrop.hidden = true;
      document.body.style.overflow = "";
    };

    modalTrigger.addEventListener("click", openModal);
    modalClose.addEventListener("click", closeModal);
    modalCancel.addEventListener("click", closeModal);
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  // Alert dismiss
  document.addEventListener("click", (e) => {
    if (e.target.matches(".alert-dismiss")) {
      e.target.closest(".alert").remove();
    }
  });

  // Copy hex value to clipboard
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".swatch-hex");
    if (!btn) return;
    const hex = btn.dataset.hex;
    navigator.clipboard.writeText(hex).then(() => {
      btn.classList.add("copied");
      const original = btn.textContent;
      btn.textContent = "Copied";
      setTimeout(() => {
        btn.classList.remove("copied");
        btn.textContent = original;
      }, 1500);
    });
  });

});