const mongoose = require('mongoose')
const scheme = mongoose.Schema


// Nash client logotipi rasmi
const nashClient = new scheme({
    img: {
        type: String,
        required: true
    }
})

// Xodim haqida malumot 
// rasmi va kasbi haqida
const spesialist = new scheme({
    img: {
        type: String,
        required: true
    },
    professia: {
        type: String,
        required: true
    }
})

// Portfolio rasmi va
//  sayt manzili
const portfolio = new scheme({
    img: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
})

// Otziv rasmi va video uchun manzil
const otziv = new scheme({
    img: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
})

// Prise narxlarni olish uchun 
const prise = new scheme({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

// Data Bazaga Yuborish
const NashiClient = mongoose.model('НАШ КЛИЕНТЫ', nashClient);
const Portfolio = mongoose.model('Портфолио', portfolio);
const Spesialist = mongoose.model('Cпециалисты', spesialist);
const Otziv = mongoose.model('Отзывы', otziv);
const Price = mongoose.model('Цены', prise);


// Expor qilinish jarayoni
module.exports = {
    NashiClient,
    Portfolio,
    Spesialist,
    Otziv,
    Price
}
