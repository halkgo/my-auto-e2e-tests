const translit = require('translit');

const translitRussian = {
  А: 'A',
  а: 'a',
  Б: 'B',
  б: 'b',
  В: 'V',
  в: 'v',
  Г: 'G',
  г: 'g',
  Д: 'D',
  д: 'd',
  Е: 'E',
  е: 'e',
  Ё: 'Jo',
  ё: 'jo',
  Ж: 'Zh',
  ж: 'zh',
  З: 'Z',
  з: 'z',
  И: 'I',
  и: 'i',
  Й: 'J',
  й: 'j',
  К: 'K',
  к: 'k',
  Л: 'L',
  л: 'l',
  М: 'M',
  м: 'm',
  Н: 'N',
  н: 'n',
  О: 'O',
  о: 'o',
  П: 'P',
  п: 'p',
  Р: 'R',
  р: 'r',
  С: 'S',
  с: 's',
  Т: 'T',
  т: 't',
  У: 'U',
  у: 'u',
  Ф: 'F',
  ф: 'f',
  Х: 'H',
  х: 'h',
  Ц: 'Ts',
  ц: 'c',
  Ч: 'Ch',
  ч: 'ch',
  Ш: 'Sh',
  ш: 'sh',
  Щ: 'Sch',
  щ: 'sch',
  ь: '',
  Ы: 'Y',
  ы: 'y',
  ъ: '',
  Э: 'E',
  э: 'e',
  Ю: 'Yu',
  ю: 'yu',
  Я: 'Ya',
  я: 'ya',
  ' ': '_',
  ',': '',
  '.': '',
};

module.exports = {
  transliterate(text) {
    return translit(translitRussian, text);
  },
  numberWithSpaces(value, pattern) {
    let i = 0;
    const phone = value.toString();
    return pattern.replace(/#/g, _ => phone[i++]);
  },
  firstLetterCaps(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },
  addZero(value, digits) {
    digits = digits || 2;

    const isNegative = Number(value) < 0;
    let buffer = value.toString();
    let size = 0;

    // Strip minus sign if number is negative
    if (isNegative) {
      buffer = buffer.slice(1);
    }

    size = digits - buffer.length + 1;
    buffer = new Array(size).join('0').concat(buffer);

    // Adds back minus sign if needed
    return (isNegative ? '-' : '') + buffer;
  },
  calculate_age(birth_month, birth_day, birth_year) {
    const today_date = new Date();
    const today_year = today_date.getFullYear();
    const today_month = today_date.getMonth();
    const today_day = today_date.getDate();
    let age = today_year - birth_year;

    if (today_month < (birth_month - 1)) {
      age--;
    }
    if (((birth_month - 1) === today_month) && (today_day < birth_day)) {
      age--;
    }
    return age;
  },
};