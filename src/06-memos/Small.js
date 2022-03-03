import { memo } from 'react';

export const Small = memo(({ value }) => {
  console.log('me mando a llamar');
  return <small>{value}</small>;
});
