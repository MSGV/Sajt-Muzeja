// Funkcija za čuvanje korisnikovog izbora teme u lokalnom skladištu
function saveThemePreference(isDarkMode) {
    localStorage.setItem('darkMode', isDarkMode);
  }
  
  // Funkcija za postavljanje teme na osnovu korisnikovog izbora
  function setTheme() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode', isDarkMode);
  }
  
  // Funkcija za promenu teme kada se klikne na dugme
  function toggleTheme() {
    const isDarkMode = localStorage.getItem('darkMode') !== 'true';
    saveThemePreference(isDarkMode);
    setTheme();
  }
  
  // Postavite temu pri učitavanju stranice
  document.addEventListener('DOMContentLoaded', setTheme);
  
  // Dodajte "click" događaj na dugme kako biste promenili temu
  const darkModeToggle = document.getElementById('darkModeToggle');
  darkModeToggle.addEventListener('click', toggleTheme);