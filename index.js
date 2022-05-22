const puppeteer = require("puppeteer");
const path = require("path");

(async () => {
  try {
    const browser = await puppeteer.launch({
      args: [
          '--no-sandbox',
          '--disable-setuid-sandbox'
      ]
  });
    const page = await browser.newPage();
    await page.goto(`file:${path.join(__dirname, "src/index_de.html")}`, {
      waitUntil: "networkidle2"
    });
    await page.pdf({ path: "output/CV_Nicklas_Knell.pdf", format: "A4", printBackground: true });

    await page.goto(`file:${path.join(__dirname, "src/index_en.html")}`, {
      waitUntil: "networkidle2"
    });
    await page.pdf({ path: "output/CV_Nicklas_Knell_en.pdf", format: "A4", printBackground: true });
  
    await browser.close();
  } catch (e) {
    throw new Error(e);
  } 
})();
