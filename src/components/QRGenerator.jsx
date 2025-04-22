import QRCode from 'qrcode.react';

function QRGenerator() {
    const url = window.location.href; // O la URL específica de tu GitHub Pages

    return (
        <div className="qr-container">
            <QRCode
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