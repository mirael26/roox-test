export const sortByName = (a: {name: string}, b: {name: string}): number => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
};

export const sortByCity = (a: {address:{city: string}}, b: {address:{city: string}}): number => {
  const cityA = a.address.city.toLowerCase();
  const cityB = b.address.city.toLowerCase();
  if (cityA < cityB) {
    return -1;
  }
  if (cityA > cityB) {
    return 1;
  }
  return 0;
};

export const sortByCompany = (a: {company:{name: string}}, b: {company:{name: string}}): number => {
  const companyA = a.company.name.toLowerCase();
  const companyB = b.company.name.toLowerCase();
  if (companyA < companyB) {
    return -1;
  }
  if (companyA > companyB) {
    return 1;
  }
  return 0;
};