function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const filteredValues = Array.from(set).filter((value) => value.startsWith(startString));
  const cleanedValues = filteredValues.map((value) => value.slice(startString.length));
  const nonEmptyValues = cleanedValues.filter((value) => value !== '');
  return nonEmptyValues.join('-');
}

export default cleanSet;
