export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string,
    }
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string,
  }
}

export type SortType = 'city' | 'company';

export interface ProfileProperty {
  id: string,
  name: string,
  label: string,
  value: string,
  isValid: boolean,
  isRequired: boolean,
  isReadonly: boolean,
};