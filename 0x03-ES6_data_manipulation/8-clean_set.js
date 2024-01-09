function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string' || startString === '') {
    return '';
  }

  const filteredValues = Array.from(set).filter((value) => value.startsWith(startString));
  return filteredValues.map((value) => value.slice(startString.length)).join('-');
}

export default cleanSet;
