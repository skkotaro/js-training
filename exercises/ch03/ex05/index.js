export function convertLFtoCRLF(text) {
    return text.replace("\n", "\r\n");
}

export function convertCRLFtoLF(text) {
    return text.replace("\r\n", "\n");
}