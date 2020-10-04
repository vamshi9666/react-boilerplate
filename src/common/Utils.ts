import axios from 'axios';

export const uploadToCloudinary = async (path: any) => {
  try {
    const formData = new FormData();
    formData.append('file', path);
    formData.append('upload_preset', 'nwjuv5ki'); // Replace the preset name with your own
    formData.append('api_key', '716942254836752'); // Replace API key with your own Cloudinary key
    formData.append('timestamp', String(Date.now() / 1000));
    // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
    const resp = await axios.post(
      'https://api.cloudinary.com/v1_1/dwo8ep45k/image/upload',
      formData,
      {
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
      },
    );

    return resp.data.secure_url;
  } catch (err) {
    console.log(err.response);
    throw new Error(err);
  }
};

export function arrayMin(arr: Array<any>) {
  return arr.reduce((p, v) => (p < v ? p : v));
}

export function getBase64(img: any, callback: any) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

export const getLoggedUserId = () => localStorage.getItem('USER_ID');

export type DeepPick<T, K1 extends keyof T, K2 extends keyof T[K1]> = {
  [P1 in K1]: {
    [P2 in K2]: T[K1][P2];
  };
};

export const getFormateedtimeFromSeconds = (seconds: number) => {
  return '';
};
