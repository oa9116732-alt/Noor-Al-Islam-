const ayat = [
  {arabic: "بسم الله الرحمن الرحيم", translation: "In the name of Allah, the Most Gracious, the Most Merciful"},
  {arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ", translation: "Say: He is Allah, the One"},
  {arabic: "اللهُ لا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ", translation: "Allah – there is no deity except Him, the Ever-Living, the Sustainer of existence"}
];

const hadiths = [
  {arabic: "عن أبي هريرة رضي الله عنه قال: قال رسول الله ﷺ...", translation: "Narrated Abu Huraira: The Prophet ﷺ said..."},
  {arabic: "عن أنس رضي الله عنه قال: قال رسول الله ﷺ...", translation: "Narrated Anas: The Prophet ﷺ said..."},
  {arabic: "عن عائشة رضي الله عنها قالت: قال رسول الله ﷺ...", translation: "Narrated Aisha: The Prophet ﷺ said..."}
];

const today = new Date().getDate();
const currentAya = ayat[today % ayat.length];
const currentHadith = hadiths[today % hadiths.length];

document.addEventListener("DOMContentLoaded", () => {
  const ayaAr = document.getElementById("aya-arabic");
  const ayaTr = document.getElementById("aya-translation");
  if (ayaAr && ayaTr) {
    ayaAr.textContent = currentAya.arabic;
    ayaTr.textContent = currentAya.translation;
  }

  const hadAr = document.getElementById("hadith-arabic");
  const hadTr = document.getElementById("hadith-translation");
  if (hadAr && hadTr) {
    hadAr.textContent = currentHadith.arabic;
    hadTr.textContent = currentHadith.translation;
  }

  const todayAyaHome = document.getElementById("today-aya-arabic");
  const todayAyaTrHome = document.getElementById("today-aya-translation");
  const todayHadHome = document.getElementById("today-hadith-arabic");
  const todayHadTrHome = document.getElementById("today-hadith-translation");

  if (todayAyaHome && todayAyaTrHome) {
    todayAyaHome.textContent = currentAya.arabic;
    todayAyaTrHome.textContent = currentAya.translation;
  }
  if (todayHadHome && todayHadTrHome) {
    todayHadHome.textContent = currentHadith.arabic;
    todayHadTrHome.textContent = currentHadith.translation;
  }
});