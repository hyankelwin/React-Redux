import { types, async } from 'utils/type-creator';

export default types(
  [
    ...async('LOGIN_REQUEST'),
  ],
  'LOGIN',
);
