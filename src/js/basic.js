export default function convert(phone) {
  let res = phone.replace(/[ )(-]/g, '');
  if (res.match(/^8[0-9]+/)) {
    res = res.replace(/8/, '+7');
  }
  return res;
}
