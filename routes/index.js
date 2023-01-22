const express = require('express');
const router = express.Router();

/* HOME PAGE / GET  */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'MAJOR' });
});


/* O COMPANY / GET  */
router.get('/o-company', (req, res, next) => {
  res.render('partials/o-company', { title: ' о компании' });
});

/* PRICE / GET  */
router.get('/price', (req, res, next) => {
  res.render('partials/price', { 
    title: ' стоимость наших услуг'
   });
});

/* PORTFOLIO / GET  */
router.get('/portfolio', (req, res, next) => {
  res.render('partials/portfolio', { 
    title: 'портфолио'
   });
});

/* OTZIV / GET  */
router.get('/otziv', (req, res, next) => {
  res.render('partials/otziv', { 
    title: 'отзывы клиентов'
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
