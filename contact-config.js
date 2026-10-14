// Замените только пустые кавычки номером WhatsApp: код страны и цифры, без +, пробелов и скобок.
// Пока номер не получен от владельца, wa.me открывает выбор получателя, а не чат с консультантом.
const WA_NUMBER = ''; // ЗАГЛУШКА: например формат 7XXXXXXXXXX; не подставляйте выдуманный номер.

(() => {
  const message = document.querySelector('[data-wa-message]').dataset.waMessage;
  const ready = /^[1-9]\d{6,14}$/.test(WA_NUMBER);
  const url = 'https://wa.me/' + (ready ? WA_NUMBER : '') + '?text=' + encodeURIComponent(message);
  document.querySelectorAll('[data-wa]').forEach(link => {
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });
  document.querySelectorAll('[data-wa-placeholder]').forEach(note => { note.hidden = ready; });
})();
