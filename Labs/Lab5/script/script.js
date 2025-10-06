document.getElementById('studentForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const pib = document.getElementById('pib');
  const dob = document.getElementById('dob');
  const address = document.getElementById('address');
  const email = document.getElementById('email');
  const telegram = document.getElementById('telegram');

  const regexPIB = /^([А-ЯA-ZІЇЄҐ][а-яa-zіїєґ']+)\s([А-ЯA-Z])\.([А-ЯA-Z])\.$/; // Прізвище І.П. або Ivanov I.P.
  const regexDOB = /^\d{2}\.\d{2}\.\d{4}$/; // ДД.ММ.РРРР
  const regexAddress = /^(м\.|m\.)\s?[А-ЯA-ZІЇЄҐ][а-яa-zіїєґ']+$/; // м. Київ або m. Kyiv
  const regexEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i; // e-mail
  const regexTelegram = /^@[A-Za-z0-9_]{3,}$/; // @nickname

  [pib, dob, address, email, telegram].forEach(el => el.classList.remove('error'));

  let valid = true;
  let errors = [];

  if (!regexPIB.test(pib.value)) {
    errors.push("Поле 'ПІБ' заповнено некоректно (формат: Прізвище І.П. або Ivanov I.P.)");
    pib.classList.add('error');
    valid = false;
  }

  if (!regexDOB.test(dob.value)) {
    errors.push("Поле 'Дата народження' має бути у форматі ДД.ММ.РРРР");
    dob.classList.add('error');
    valid = false;
  } else {
    const [day, month, year] = dob.value.split('.').map(Number);
    const date = new Date(year, month - 1, day);
    const today = new Date();

    const isRealDate =
      date.getFullYear() === year &&
      date.getMonth() + 1 === month &&
      date.getDate() === day;

    if (!isRealDate) {
      errors.push("Поле 'Дата народження' містить неіснуючу дату!");
      dob.classList.add('error');
      valid = false;
    } else if (date > today) {
      errors.push("Поле 'Дата народження' не може бути у майбутньому!");
      dob.classList.add('error');
      valid = false;
    }
  }

  if (!regexAddress.test(address.value)) {
    errors.push("Поле 'Адреса' має бути у форматі м. Місто або m. City");
    address.classList.add('error');
    valid = false;
  }

  if (!regexEmail.test(email.value)) {
    errors.push("Поле 'E-mail' заповнено некоректно");
    email.classList.add('error');
    valid = false;
  }

  if (!regexTelegram.test(telegram.value)) {
    errors.push("Поле 'Telegram' має починатись із @ та містити лише латинські літери/цифри/підкреслення");
    telegram.classList.add('error');
    valid = false;
  }

  if (valid) {
    const info = `
    ПІБ: ${pib.value}
    Дата народження: ${dob.value}
    Адреса: ${address.value}
    E-mail: ${email.value}
    Telegram: ${telegram.value}
    `;
    alert("Усі дані введено правильно!\n\n" + info);
  } else {
    alert("Помилки:\n\n" + errors.join("\n"));
  }
});
