type SelectedLanguage = "es" | "en";
export function saveSelectedLanguage(language: SelectedLanguage) {
  localStorage.setItem("selectedLanguage", language);
}
export function getSelectedLanguage(): SelectedLanguage | undefined {
  if (localStorage.getItem("selectedLanguage")) {
    return localStorage.getItem("selectedLanguage") as SelectedLanguage;
  }
}
