// Отримуємо всі елементи <a> всередині <ul>
const links = document.querySelectorAll('ul a');

// Перебираємо кожен елемент посилання
links.forEach(link => {
  const href = link.getAttribute('href');

  // Перевіряємо, чи посилання є зовнішнім (починається з http://, https:// або ftp://)
  if (href && (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('ftp://'))) {
    // Якщо посилання зовнішнє, встановлюємо його колір на помаранчевий
    link.style.color = 'orange';
  }
});
