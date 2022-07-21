export const maxNameLength = 60;

export const helperMessages = {
  name: 'Enter your name',
  email: 'Enter your email',
  phone: '+38 (XXX) XXX - XX - XX',
  photo: 'Choose file',
};

export const errorMessages = {
  name: 'Name is not valid',
  email: 'Email is not valid',
  phone: 'Phone is not valid',
  photo: 'Please select jpeg/jpg photo with 5MB max size',
};

export const regExps = {
  name: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u,
  phone: /^[\+]{0,1}380([0-9]{9})$/gi,
  photo: /.+(\/jpg|\/jpeg)$/i,
  email: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/g,
};

export const initialUserRequest = {
  name: '',
  email: '',
  phone: '',
  position_id: 1,
  photo: {
    name: 'Choose photo'
  },
};