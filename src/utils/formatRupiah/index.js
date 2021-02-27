export const formatRupiah = (value) => {
  let reverse = value.toString().split('').reverse().join(''),
    result = reverse.match(/\d{1,3}/g);
  result = result.join('.').split('').reverse().join('');
  return result;
};
