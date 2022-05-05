export const ProfilePropertiesLabels = {
  name: 'Name',
  userName: 'User name',
  email: 'E-mail',
  street: 'Street',
  city: 'City',
  zipcode: 'Zip code',
  phone: 'Phone',
  website: 'Website',
  comment: 'Comment',
};

export const ProfileValidation = {
  name: /^[a-zA-Zа-яА-Я ]*$/,
  userName: /^[a-zA-Zа-яА-Я _-]*$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  street: /^[a-zA-Zа-яА-Я0-9 .,]*$/,
  city: /^[a-zA-Zа-яА-Я .,]*$/,
  zipcode: /^[a-zA-Z0-9-]*$/,
  phone: /^(((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10})$/,
  website: /[-a-zA-Z0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/=]*)?/gi,
  comment: /^[a-zA-Zа-яА-Я0-9 .,%&';=?$\x22]*$/,
};