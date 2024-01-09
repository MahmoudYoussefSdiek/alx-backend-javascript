function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

  const filteredValues = Array.from(set).filter((value) => value.startsWith(startString));
  return filteredValues.map((value) => value.slice(startString.length)).join('-');
}

export default cleanSet;
