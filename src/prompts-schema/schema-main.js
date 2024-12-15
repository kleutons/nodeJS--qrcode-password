import chalk from "chalk";

const schemaMain = [
    {
        name: "select",
        description: chalk.yellow.bold("Escolha a ferramenta (1 - QRCODE OU (2 - PASSWORD"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
        required: true
    }
];

export default schemaMain;