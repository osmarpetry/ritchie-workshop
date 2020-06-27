const fetch = require('node-fetch');

const trim = (string) => string.replace(/^s+|s+$/g, '');

const isCep = (stringCep) => {
  const regexCep = /^[0-9]{8}$/;

  stringCep = trim(stringCep);
  if (regexCep.test(stringCep)) return true;

  return false;
};

const getCep = async (cep) => {
  if (isCep(cep)) {
    const what = await fetch(
      `http://viacep.com.br/ws/${cep}/json/`
    ).then((res) => res.json());
    return Promise.resolve(what);
  }
  return 'Should be a string with the 8 numbers (e.g: 79023-038)';
};

const Run = async (input1) => {
  console.log(await getCep(input1));
};

const address = Run;
module.exports = address;
