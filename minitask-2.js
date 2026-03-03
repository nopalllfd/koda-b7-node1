const dateConvertion = (date) => {
  const regex = /^(\d{1,2})\-(\d{1,2})\-(\d{4})$/;
  const validate = regex.test(date);
  if (!validate) {
    return `Format tanggal salah`;
  } else {
    const split = date.split('-');
    const res = split.join('/');
    return `Hasil dari konversi adalah ${res}`;
  }
};

export default dateConvertion;
