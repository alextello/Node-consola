const fs = require("fs");
const colors = require("colors");

const crearArchivo = (base, limite) => {
  return new Promise((resolve, reject) => {
    if (!Number(base) || !Number(limite)) {
      reject("No es un número");
      return;
    }
    let data = "";
    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`multiplicar/tabla-${base}.txt`, data, (err) => {
      if (err) reject(err);
      else resolve(`tabla-${base}.txt`);
    });
  });
};

const listarTabla = (base, limite) => {
  console.log("============================".green);
  console.log("===== tabla del ${base} ====".green);
  console.log("============================".green);

  return new Promise((resolve, reject) => {
    if (!Number(base) || !Number(limite)) {
      reject("Debe ingresar únicamente números".red);
      return;
    }
    for (let i = 1; i <= limite; i++) {
      console.log(`${base} * ${i} = ${base * i}`);
    }
    resolve("Proceso terminado...");
  });
};

module.exports = {
  crearArchivo,
  listarTabla,
};
