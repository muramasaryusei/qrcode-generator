import React, {useState, useEffect} from 'react';
import {Helmet} from 'react-helmet';






function QRCodeGenerator() {
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []); 
 
 useEffect(() => {
   
   const form = document.getElementById('generate-form');
   const qr = document.getElementById('qrcode');
   
  const onGenerateSubmit = (event) => {
    event.preventDefault();
    
    clearUI();
    
    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;
    
    if (url === '') {
      alert('Enter a text!!!');
    } 
    else {
      showSpinner();
      
      setTimeout(() => {
        hideSpinner();
        generateQRCode(url, size);
        setTimeout(() => {
          const saveUrl = qr.querySelector('img').src;
          createSaveButton(saveUrl);
          console.log(saveUrl);
        }, 50);
      },1000);
    }
}; 

const showSpinner = () => {
    document.getElementById('spinner').style.display = 'block';
  };
  
  const hideSpinner = () => {
    document.getElementById('spinner').style.display = 'none';
  }; 
  
  const generateQRCode = (url, size) => {
    const qrcode = new QRCode(document.getElementById('qrcode'), {
     text: url,
     width: size,
     height: size
    });
  };
  
  const clearUI = () => {
    qr.innerHTML='';
    const saveLink = document.getElementById('saveLink');
    if (saveLink) saveLink.remove();
  };
  
  const createSaveButton = (saveUrl) => {
    const link = document.createElement('a');
    link.id = 'saveLink';
    link.href = saveUrl;
    link.download = 'qrcode';
    link.innerHTML = "Save Image";
    document.querySelector('.resultImage').appendChild(link);
  };
   
   form.addEventListener('submit', onGenerateSubmit);
 }, []);
  
  



  return (
  <div>
  <Helmet>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js" integrity="sha512-CNgIRecGo7nphbeZ04Sc13ka07paqdeTu0WR1IM4kNcpmBAUSHSQX0FslNhTDadL4O5SAGapGt4FodqL8My0mA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  </Helmet>
  <div className="main" >
    <h1> SQG </h1>
    <p>
      Hey everyone👋 <br />I'm Suraj Baini and this is a QRCode Generator that I made and I call it Sun QRCode Generator (SQG).
    </p>
    <div className="form">
      <form id="generate-form">
        <label>Enter your text: </label>
        <input id="url" type="text" placeholder="Write your text here..." />
        <select id="size" className="dropdown">
           <option value="100">100×100</option>
           <option value="200" selected>200×200</option>
           <option value="300">300×300</option>
           <option value="400" >400×400</option>
        </select>
        <button type="submit"> Generate QR Code </button>
      </form>
      <div className="result">
      <div className="spinner" id="spinner"></div>
      <div id="qrcode"></div>
      <div className="resultImage"></div>
      </div>
    </div>
    <div>
      <p>This project was created to learn about the use of external modules in React,how to import the modules and implement it in our file.</p>
    </div>
  </div> 
  </div>
)
}

export default QRCodeGenerator;
