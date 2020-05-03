const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");
const { argv } = require("./config/yargs");
const colors = require("colors");
const comando = argv._[0];

switch (comando) {
  case "listar":
    listarTabla(argv.base, argv.limite).then(console.log).catch(console.err);
    break;
  case "crear":
    crearArchivo(argv.base, argv.limite)
      .then((archivo) => console.log(`Archivo creado: ${archivo.green}`))
      .catch(console.error);
    break;
  default:
    console.log("Comando no reconocido".red);
}
