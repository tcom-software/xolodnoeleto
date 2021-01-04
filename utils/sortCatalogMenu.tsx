/**
 *  @info Make Sorted By Pattern
 *  @params sortCatalogMenu (parent catalog id and sub catalogs) , MSBP (first array with object items, second param is array with numbers (id of catalog items) )
 *  @return merged arrays sorted and filtered (without sorted)
 * */

const MSBP = (subC, sortPattern) => {
  const sortedSubSub = [];
  for (let i = 0; i < sortPattern.length; i++) {
    const id = sortPattern[i];
    const objById = subC.find((e) => e.id === id);
    if (objById) {
      sortedSubSub.push(objById);
    }
  }
  const filtered = subC.filter((e) => !sortPattern.includes(e.id));
  return [...sortedSubSub, ...filtered];
};

const sortCatalogMenu = (id, subC) => {
  switch (id) {
    case 26:
      return MSBP(subC, [2, 27, 28, 33]);
      break;
    case 3:
      return MSBP(subC, [5, 6, 4]);
      break;
    case 12:
      return MSBP(subC, [13, 14]);
      break;
    case 34:
      return MSBP(subC, [36, 35]);
      break;
    case 56:
      return MSBP(subC, [60]);
      break;
    case 72:
      return MSBP(subC, [75, 122]);
      break;
    case 103:
      return MSBP(subC, [104, 106]);
      break;
    default:
      return MSBP([], []);
  }
};

export default sortCatalogMenu;
