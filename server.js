const express = require('express');
const QRCode = require('qrcode-generator');
const app = express();

app.get('/generateQRCode/:text', (req, res) => {
  const text = req.params.text;
  const qr = QRCode(0, 'M');
  qr.addData(text);
  qr.make();
  const qrImage = qr.createDataURL();
  res.send(qrImage);
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
