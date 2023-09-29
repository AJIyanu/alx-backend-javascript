import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const photo = await uploadPhoto().then((res) => (res)).catch(() => (null));
  const user = await createUser().then((res) => (res)).catch(() => (null));

  if (photo === null || user === null) {
    return { photo: null, user: null };
  }
  return { photo, user };
}
