const axios = require('axios');
const Tesseract = require('tesseract.js');
const imagePath = "-------give your image path-------";
describe('My Login application', () => {
    it('should login with valid credentials', async () => {
            const text = await Tesseract.recognize(imagePath);
            console.log(text);
        })
    })






