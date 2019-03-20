import { types, async } from 'utils/type-creator';

export default types(
  [
    ...async('REPOSITORIES_REQUEST'),
  ],
  'REPOSITORIES',
);
