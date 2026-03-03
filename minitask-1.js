import moment from 'moment';

const date = '20-04-2020';

const dateConvertion = (date) => {
  const validate = moment(date, 'DD-MM-YYYY', true).isValid();
  console.log(`tanggal dimasukkan ${date}`);
  if (!validate) {
    return `Format tanggal salah`;
  } else {
    const res = moment(date, 'DD/MM/YY');
    const convertedDate = res.format('DD/MM/YYYY');
    return `Hasil konversi adalah ${convertedDate}`;
  }
};

console.log(dateConvertion(date));
