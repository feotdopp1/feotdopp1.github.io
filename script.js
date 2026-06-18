// БЫСТРЫЕ НАСТРОЙКИ — замените значения ниже на свои.
const SITE_CONFIG = {
  key: "NOVA-ACCESS-2026",
  discordUrl: "https://discord.gg/YOUR-SERVER"
};

const keyValue = document.querySelector("#keyValue");
const copyButton = document.querySelector("#copyButton");
const toast = document.querySelector("#toast");

keyValue.textContent = SITE_CONFIG.key;
document.querySelectorAll("[data-discord-link]").forEach((link) => {
  link.href = SITE_CONFIG.discordUrl;
});

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(SITE_CONFIG.key);
  } catch {
    const field = document.createElement("textarea");
    field.value = SITE_CONFIG.key;
    document.body.appendChild(field);
    field.select();
    document.execCommand("copy");
    field.remove();
  }

  copyButton.querySelector("span").textContent = "Готово";
  toast.classList.add("show");
  window.setTimeout(() => {
    toast.classList.remove("show");
    copyButton.querySelector("span").textContent = "Копировать";
  }, 1800);
});
