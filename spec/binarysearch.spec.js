const {isAnagrams1, isAnagrams2} = require('../index');

test('Порядок аргументов не имеет значения', () => {
    expect(isAnagrams1('melon', 'lemon')).toBe(true);
    expect(isAnagrams2('melon', 'lemon')).toBe(true);
    expect(isAnagrams1('lemon', 'melon')).toBe(true);
    expect(isAnagrams2('lemon', 'melon')).toBe(true);
});
test('Слово является анаграммой самого себя', () => {
    expect(isAnagrams1('melon', 'melon')).toBe(true);
    expect(isAnagrams2('melon', 'melon')).toBe(true);
});
test('Регистр и наличие пробелов в начале и конце строки не влияет', () => {
    expect(isAnagrams1(' MELON', 'lemon ')).toBe(true);
    expect(isAnagrams2(' MELON', 'lemon ')).toBe(true);
    expect(isAnagrams1(' mEloN ', 'MeLOn')).toBe(true);
    expect(isAnagrams2(' mEloN ', 'MeLOn')).toBe(true);
});
test('Аргументы могут быть любой последовательностью символов', () => {
    expect(isAnagrams1('abcde2', 'c2abed')).toBe(true);
    expect(isAnagrams2('abcde2', 'c2abed')).toBe(true);
    expect(isAnagrams1('kilso', 'osilk')).toBe(true);
    expect(isAnagrams2('kilso', 'osilk')).toBe(true);
    expect(isAnagrams1('135', '531')).toBe(true);
    expect(isAnagrams2('135', '531')).toBe(true);
    expect(isAnagrams1('!&!', '&!!')).toBe(true);
    expect(isAnagrams2('!&!', '&!!')).toBe(true);
});
test('Наличие одинаковых символов не влияет на результат', () => {
    expect(isAnagrams1('llooo', 'lolol')).toBe(false);
    expect(isAnagrams2('llooo', 'lolol')).toBe(false);
    expect(isAnagrams1('mama', 'ma')).toBe(false);
    expect(isAnagrams2('mama', 'ma')).toBe(false);
});