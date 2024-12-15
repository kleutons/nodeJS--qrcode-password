import chalk from "chalk";

const schemaQrCode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para gerar o QR CODE)")
    },
    {
        name: "type",
        description: chalk.yellow("Escolha o tipo de QR CODE (1- NORMAL OU (2- TERMINAL"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
        required: true
    }
];

export default schemaQrCode;