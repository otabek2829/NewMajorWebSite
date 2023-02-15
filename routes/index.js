const express = require('express');
const router = express.Router();
const { NashiClient, Otziv, Portfolio, Price, Spesialist, } = require('../model/uploadFileSchema')



// NARXLARNI BACKENNDA OLIB KELIB BITTA OZGARUVCHIGA OLIB SHU YERDAN FRONTENDGA YUBORILVOTTI
// Веб-разработка PRICE 
var priceWebData;
const getWebPriceUslugi = async () => {
  priceWebData = await Price.find({ category: "Веб-разработчик" });
  priceWebData = await priceWebData.map((e) => e.toJSON());
};
// Дизайн PRICE 
var priceDesignData;
const getDesignPriceUslugi = async () => {
  priceDesignData = await Price.find({ category: "Дизайн" });
  priceDesignData = await priceDesignData.map((e) => e.toJSON());
};
// SMM PRICE 
var priceSmmData;
const getSmmPriceUslugi = async () => {
  priceSmmData = await Price.find({ category: "SMM" });
  priceSmmData = await priceSmmData.map((e) => e.toJSON());
};
// Техническая поддержка PRICE 
var priceTechData;
const getTechPriceUslugi = async () => {
  priceTechData = await Price.find({ category: "Техническая поддержка" });
  priceTechData = await priceTechData.map((e) => e.toJSON());
};

// Nash Client Logotip
// SMM PRICE 
var nashClientData;
const getNashiClient = async () => {
  nashClientData = await NashiClient.find();
  nashClientData = await nashClientData.map((e) => e.toJSON());
};


/* HOME PAGE / GET  */
router.get('/', (req, res, next) => {

  // Price Uslugi Function 
  getSmmPriceUslugi()
  getWebPriceUslugi()
  getDesignPriceUslugi()
  getTechPriceUslugi()
  
  // Nashi Client Get data function
  getNashiClient()

  res.render('index', {
    title: 'MAJOR',
    priceWebData,
    priceDesignData,
    priceSmmData,
    priceTechData,
    nashClientData
  });
});


/* O COMPANY / GET  */
router.get('/o-company', (req, res, next) => {
  
  // Nashi Client Get data function
  getNashiClient()

  const promise = Spesialist.find()
  promise.then(data => {
    res.render('partials/o-company', {
      title: ' о компании',
      spesialistData: data.map((e) => e.toJSON()),
      nashClientData
    });
  });
});

/* PRICE / GET  */
router.get('/price', (req, res, next) => {

  // Price Uslugi Function 
  getSmmPriceUslugi()
  getWebPriceUslugi()
  getDesignPriceUslugi()
  getTechPriceUslugi()
   
  // Nashi Client Get data function
  getNashiClient()  

  res.render('partials/price', {
    title: ' стоимость наших услуг',
    priceWebData,
    priceDesignData,
    priceSmmData,
    priceTechData,
    nashClientData
  });
});

/* PORTFOLIO / GET  */
router.get('/portfolio', (req, res, next) => {
  const promise = Portfolio.find()
  promise.then(data => {
    res.render('partials/portfolio', {
      title: 'портфолио',
      portfolio: data.map((e) => e.toJSON())
    });
  });
});

/* OTZIV / GET  */
router.get('/otziv', (req, res, next) => {
const promise = Otziv.find()
  promise.then(data => {
    res.render('partials/otziv', {
      title: 'отзывы клиентов',
      otzivData: data.map((e) => e.toJSON())
    });
  });
});

/* CONTACT / GET  */
router.get('/contact', (req, res, next) => {
  res.render('partials/contact', {
    title: 'наши контакты'
  });
});

/* VAKANSIYA / GET  */
router.get('/vakansiya', (req, res, next) => {
  res.render('partials/vakansiya', {
    title: 'вакансии  '
  });
});

module.exports = router;
