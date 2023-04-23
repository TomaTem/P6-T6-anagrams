//Напиши метод isAnagrams(), который принимает два строчных аргумента
// и выводит true, если строки являются анаграммами, и false, если строки ими не являются.

// Решение циклом
function isAnagrams1(str1, str2) {
    let a = str1.toLowerCase().trim();
    let b = str2.toLowerCase().trim();
    if (a.length !== b.length) {
        return false;
    }
    let length = a.length;
    for (let i = 0; i < length; i++) {
        if (a.includes(b[i])) {
            a = a.replace(b[i], '');
        } else {
            return false;
        }
    }
    return true;
}

// Решение методами
function isAnagrams2(str1, str2) {
    let a = str1.toLowerCase().trim();
    let b = str2.toLowerCase().trim();
    if (a.length !== b.length) {
        return false;
    }
    a = a.split('').sort().join('');
    b = b.split('').sort().join('');
    return a === b;
}

module.exports = {
    isAnagrams1,
    isAnagrams2,
};
