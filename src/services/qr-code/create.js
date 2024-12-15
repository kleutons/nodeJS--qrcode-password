import prompt from "prompt"
import schemaQrCode from "../../prompts-schema/schema-qrcode.js"
import handle from "./handle.js"

async function creatQRCode(){
    prompt.get(schemaQrCode, handle)
}

export default creatQRCode