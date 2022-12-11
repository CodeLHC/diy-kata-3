const joinNames = (names) => {
  if (names?.length === 0 || !names) {
    return "";
  }

  if (names.length === 1) {
    return names[0].name;
  }
  return names.reduce((acc, curr, index) => {
    const accName = acc.name ? acc.name : acc;
    if (index < names.length - 1) {
      return `${accName}, ${curr.name}`;
    } else {
      return `${accName} & ${curr.name}`;
    }
  });
};

module.exports = joinNames;
