import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const settled = [];
  const promises = [
    signUpUser(firstName, lastName).then((result) => ({
      status: 'fulfilled',
      value: result,
    })).catch((error) => {
      const err = error.toString();
       return { status: 'rejected', value: `Error: ${err}` }
      }),
    uploadPhoto(fileName).catch((error) => ({
      status: 'rejected',
      value: error.toString(),
    })),
  ];
  await Promise.all(promises).then((res) => {
    res.forEach((res) => settled.push(res));
  });
  return settled;
}
