const commom = {
    vermelho: "#AD1313",
    vermelhoEscuro: "#660B0B",
    vermelhoAviso: "#f00",
}

const light = {
    branco1: "#fff",
    branco2: "#fff",
    placeholder: "#CCCCCC",
    cinzaEscuro: "#808080",
    cinzaClaro: "#D9D9D9",
    cinzaTransparente: "rgba(217, 217, 217, 0.9)",
    vermelhoAcinzentado: "#d5c5c5",
    keyboardBackground: "#ECEFF1",
    keyBackground: "#FBFCFC",
    keyColor: "#2E414A",
    text: "#fff",
    ...commom,
}

const dark = {
    branco1: "#000",
    branco2: "#363636",
    placeholder: "#363636",
    cinzaEscuro: "#CCCCCC",
    cinzaClaro: "#6d6d6d",
    cinzaTransparente: "rgba(54, 54, 54, 0.7)",
    vermelhoAcinzentado: "#5a2c2c",
    keyboardBackground: "#1D2228",
    keyBackground: "#2A3139",
    keyColor: "#DADCE0",
    text: "#CCCCCC",
    ...commom,
}

export default { light, dark, commom };