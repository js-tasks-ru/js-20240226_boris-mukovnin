/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  let sortedArr = arr.slice().sort((a, b) => {
    const langA = a.match(/^[a-zA-Z]/) ? 'en' : 'ru';
    const langB = b.match(/^[a-zA-Z]/) ? 'en' : 'ru';

    if (langA === langB) {
      return a.localeCompare(b, undefined, {caseFirst: 'upper'});
    } else {
      return langA === 'ru' ? -1 : 1;
    }
  });

  if (param === 'asc') {
    return sortedArr;
  }

  if (param === 'desc') {
    return sortedArr.reverse();
  }

  return arr.slice();
}
