import { QRCodeSVG } from 'qrcode.react';  // Cambia esta línea

function QRGenerator() {
    const url = window.location.href; // O la URL específica de tu GitHub Pages

    return (
        <div className="qr-container">
            <QRCodeSVG  // Cambia QRCode por QRCodeSVG
                value={url}
                size={128}
                bgColor={"#ffffff"}
                fgColor={"#000000"}
                level={"L"}
                includeMargin={false}
            />
            <p>Escanee el código para ver nuestro menú</p>
        </div>
    );
}

export default QRGenerator;