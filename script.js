document.documentElement.classList.add("js");

const header = document.querySelector("[data-site-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const siteNav = document.querySelector("[data-site-nav]");

const setHeaderState = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    siteNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.focus();
  });
}

document.querySelectorAll("[data-copy-button]").forEach((button) => {
  button.addEventListener("click", async () => {
    const targetId = button.getAttribute("data-copy-target");
    const target = targetId ? document.getElementById(targetId) : null;
    const status = button.parentElement?.querySelector("[data-copy-status]");
    const label = button.querySelector("[data-copy-label]");

    if (!target) {
      if (status) status.textContent = "Copy target not found.";
      return;
    }

    const text = target.textContent?.trim() ?? "";

    try {
      await navigator.clipboard.writeText(text);
      if (label) label.textContent = "Copied";
      if (status) status.textContent = "Activation instruction copied.";
      window.setTimeout(() => {
        if (label) label.textContent = "Copy instruction";
        if (status) status.textContent = "";
      }, 2200);
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(target);
      selection?.removeAllRanges();
      selection?.addRange(range);
      if (status) status.textContent = "Select and copy the highlighted instruction.";
    }
  });
});
