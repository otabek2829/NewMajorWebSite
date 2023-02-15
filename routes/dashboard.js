const express = require('express');
const router = express.Router();
const filterImg = require('../middleware/uploadImage')
const { NashiClient, Otziv, Portfolio, Price, Spesialist, } = require('../model/uploadFileSchema')

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.render('partials/Dashboard/admin-panel')
});


// ========================================= НАШИ КЛИЕНТЫ page  | GET ZAPROS =========================================

router.get('/nashi-client', (req, res, next) => {
  const promise = NashiClient.find()
  promise.then(data => {
    res.render('partials/Dashboard/nashi-client', {
      title: 'НАШИ КЛИЕНТЫ',
      data: data.map((e) => e.toJSON())
    })
  })

});
// POST ZAPROS NASH KLIENT
router.post('/nashi-client', filterImg.single("img"), (req, res, next) => {
  const db = new NashiClient({
    img: req.file.filename
  });
  db.save()
    .then(() => {
      res.redirect("/dashboard/nashi-client");
    })
    .catch((err) => {
      console.log(err);
    });
})
// DELETE PAGE 
router.get("/nashi-client/delete/:id", async (req, res) => {
  try {
    const id = { _id: req.params.id };
    await NashiClient.findByIdAndDelete(id);
    res.redirect("/dashboard/nashi-client");
  } catch (error) {
    console.log(error);
  }
});



// ========================================= НАШ КОМАНДА page | GET ZAPROS =========================================

router.get('/spesialist', (req, res, next) => {
  const promise = Spesialist.find()
  promise.then(data => {
    res.render('partials/Dashboard/spesialist', {
      title: 'НАШ КОМАНДА',
      spesialist: data.map((e) => e.toJSON())
    })
  })
});
// POST ZAPROS SPESIALIST
router.post('/spesialist', filterImg.single("img"), (req, res, next) => {
  const db = new Spesialist({
    professia: req.body.professia,
    img: req.file.filename
  });
  db.save()
    .then(() => {
      res.redirect("/dashboard/spesialist");
    })
    .catch((err) => {
      console.log(err);
    });
})
// DELETE PAGE 
router.get("/spesialist/delete/:id", async (req, res) => {
  try {
    const id = { _id: req.params.id };
    await Spesialist.findByIdAndDelete(id);
    res.redirect("/dashboard/spesialist");
  } catch (error) {
    console.log(error);
  }
});



//=========================================  НАШЕ ПОРТФОЛИО page | GET ZAPROS ========================================= 
router.get('/portfolio', (req, res, next) => {
  const promise = Portfolio.find()
  promise.then(data => {
    res.render('partials/Dashboard/portfolio', {
      title: 'НАШЕ ПОРТФОЛИО',
      portfolio: data.map((e) => e.toJSON())
    })
  })
});
// POST ZAPROS PORTFOLIO
router.post('/portfolio', filterImg.single("img"), (req, res, next) => {
  const db = new Portfolio({
    link: req.body.link,
    img: req.file.filename
  });
  db.save()
    .then(() => {
      res.redirect("/dashboard/portfolio");
    })
    .catch((err) => {
      console.log(err);
    });
})
// DELETE PAGE 
router.get("/portfolio/delete/:id", async (req, res) => {
  try {
    const id = { _id: req.params.id };
    await Portfolio.findByIdAndDelete(id);
    res.redirect("/dashboard/portfolio");
  } catch (error) {
    console.log(error);
  }
});




// ========================================= Otziv page | GET ZAPROS ========================================= 
router.get('/otziv', (req, res, next) => {
  const promise = Otziv.find()
  promise.then(data => {
    res.render('partials/Dashboard/otziv', {
      title: 'ОТЗЫВЫ',
      otziv: data.map((e) => e.toJSON())
    })
  })
});
// POST ZAPROS OTZIV
router.post('/otziv', filterImg.single("img"), (req, res, next) => {
  const db = new Otziv({
    link: req.body.link,
    img: req.file.filename
  });
  db.save()
    .then(() => {
      res.redirect("/dashboard/otziv");
    })
    .catch((err) => {
      console.log(err);
    });
})
// DELETE PAGE 
router.get("/otziv/delete/:id", async (req, res) => {
  try {
    const id = { _id: req.params.id };
    await Otziv.findByIdAndDelete(id);
    res.redirect("/dashboard/otziv");
  } catch (error) {
    console.log(error);
  }
});



// ========================================= Prise page | GET ZAPROS ========================================= 
router.get('/prise', (req, res, next) => {
  const promise = Price.find()
  promise.then(data => {
    res.render('partials/Dashboard/prise', {
      title: 'УСЛУГЫ ЦЕНЫ',
      dataBasePrice: data.map((e) => e.toJSON())
    })
  })
});



// ========================================= Prise Веб-разработка page | GET ZAPROS ========================================= 
router.get('/price/web-site', (req, res, next) => {
  const promise = Price.find({ category: "Веб-разработчик" });
  promise.then((data) => {
    res.render('partials/Dashboard/Prise_uslugi/web-site', {
      title: 'Веб-разработка',
      webData: data.map((e) => e.toJSON())
    })
  })
});
// POST ZAPROS PRISE
router.post('/price/web-site', (req, res, next) => {
  const db = new Price({
    title: req.body.title,
    category: req.body.category,
    price: req.body.price
  });
  db.save()
    .then(() => {
      res.redirect("/dashboard/price/web-site");
    })
    .catch((err) => {
      console.log(err);
    });
})
// UPDATE GET ZAPROS
router.get("/price/web-site/update/:id", async (req, res) => {
  Price.findById(req.params.id, (err, data) => {
    const tittle = data.title;
    const category = data.category;
    const price = data.price;
    try {
      res.render('partials/Dashboard/Prise_uslugi/web-site', {
        title: 'Изменить yслугу',
        button: "Изменить",
        tittle,
        category,
        price,
      })

    } catch (error) {
      console.log(error)
    }
  })
})
// UPDATE POST ZAPROS
router.post("/price/web-site/update/:id", async (req, res) => {
  const db = {
    title: req.body.title,
    category: req.body.category,
    price: req.body.price
  }
  try {
    const ids = { _id: req.params.id };
    await Price.findByIdAndUpdate(ids, db);
    res.redirect("/dashboard/price/web-site");
  } catch (error) {
    console.log(error);
  }
})
// DELETE PAGE 
router.get("/price/web-site/delete/:id", async (req, res) => {
  try {
    const id = { _id: req.params.id };
    await Price.findByIdAndDelete(id);
    res.redirect("/dashboard/price/web-site");
  } catch (error) {
    console.log(error);
  }
});



// ========================================= Prise Дизайн page | GET ZAPROS ========================================= 
router.get('/price/design', (req, res, next) => {
  const promise = Price.find({ category: "Дизайн" });
  promise.then((data) => {
    res.render('partials/Dashboard/Prise_uslugi/design', {
      title: 'Дизайн',
      designData: data.map((e) => e.toJSON())
    })
  })
});
// POST ZAPROS PRISE
router.post('/price/design', (req, res, next) => {
  const db = new Price({
    title: req.body.title,
    category: req.body.category,
    price: req.body.price
  });
  db.save()
    .then(() => {
      res.redirect("/dashboard/price/design");
    })
    .catch((err) => {
      console.log(err);
    });
})
// UPDATE GET ZAPROS
router.get("/price/design/update/:id", async (req, res) => {
  Price.findById(req.params.id, (err, data) => {
    const tittle = data.title;
    const category = data.category;
    const price = data.price;
    try {
      res.render('partials/Dashboard/Prise_uslugi/design', {
        title: 'Изменить yслугу',
        button: "Изменить",
        tittle,
        category,
        price,
      })

    } catch (error) {
      console.log(error)
    }
  })
})
// UPDATE POST ZAPROS
router.post("/price/design/update/:id", async (req, res) => {
  const db = {
    title: req.body.title,
    category: req.body.category,
    price: req.body.price
  }
  try {
    const ids = { _id: req.params.id };
    await Price.findByIdAndUpdate(ids, db);
    res.redirect("/dashboard/price/design");
  } catch (error) {
    console.log(error);
  }
})
// DELETE PAGE 
router.get("/price/design/delete/:id", async (req, res) => {
  try {
    const id = { _id: req.params.id };
    await Price.findByIdAndDelete(id);
    res.redirect("/dashboard/price/design");
  } catch (error) {
    console.log(error);
  }
});



// ========================================= Prise SMM page | GET ZAPROS ========================================= 
router.get('/price/smm', (req, res, next) => {
  const promise = Price.find({ category: "SMM" });
  promise.then((data) => {
    res.render('partials/Dashboard/Prise_uslugi/smm', {
      title: 'SMM',
      smmData: data.map((e) => e.toJSON())
    })
  })
});
// POST ZAPROS PRISE
router.post('/price/smm', (req, res, next) => {
  const db = new Price({
    title: req.body.title,
    category: req.body.category,
    price: req.body.price
  });
  db.save()
    .then(() => {
      res.redirect("/dashboard/price/smm");
    })
    .catch((err) => {
      console.log(err);
    });
})
// UPDATE GET ZAPROS
router.get("/price/smm/update/:id", async (req, res) => {
  Price.findById(req.params.id, (err, data) => {
    const tittle = data.title;
    const category = data.category;
    const price = data.price;
    try {
      res.render('partials/Dashboard/Prise_uslugi/smm', {
        title: 'Изменить yслугу',
        button: "Изменить",
        tittle,
        category,
        price,
      })

    } catch (error) {
      console.log(error)
    }
  })
})
// UPDATE POST ZAPROS
router.post("/price/smm/update/:id", async (req, res) => {
  const db = {
    title: req.body.title,
    category: req.body.category,
    price: req.body.price
  }
  try {
    const ids = { _id: req.params.id };
    await Price.findByIdAndUpdate(ids, db);
    res.redirect("/dashboard/price/smm");
  } catch (error) {
    console.log(error);
  }
})
// DELETE PAGE 
router.get("/price/smm/delete/:id", async (req, res) => {
  try {
    const id = { _id: req.params.id };
    await Price.findByIdAndDelete(id);
    res.redirect("/dashboard/price/smm");
  } catch (error) {
    console.log(error);
  }
});


// ========================================= Prise Техническая поддержка page | GET ZAPROS ========================================= 
router.get('/price/technical-support', (req, res, next) => {
  const promise = Price.find({ category: "Техническая поддержка" });
  promise.then((data) => {
    res.render('partials/Dashboard/Prise_uslugi/technical-support', {
      title: 'Техническая поддержка',
      techSupportData: data.map((e) => e.toJSON())
    })
  })
});
// POST ZAPROS PRISE
router.post('/price/technical-support', (req, res, next) => {
  const db = new Price({
    title: req.body.title,
    category: req.body.category,
    price: req.body.price
  });
  db.save()
    .then(() => {
      res.redirect("/dashboard/price/technical-support");
    })
    .catch((err) => {
      console.log(err);
    });
})
// UPDATE GET ZAPROS
router.get("/price/technical-support/update/:id", async (req, res) => {
  Price.findById(req.params.id, (err, data) => {
    const tittle = data.title;
    const category = data.category;
    const price = data.price;
    try {
      res.render('partials/Dashboard/Prise_uslugi/technical-support', {
        title: 'Изменить yслугу',
        button: "Изменить",
        tittle,
        category,
        price,
      })

    } catch (error) {
      console.log(error)
    }
  })
})
// UPDATE POST ZAPROS
router.post("/price/technical-support/update/:id", async (req, res) => {
  const db = {
    title: req.body.title,
    category: req.body.category,
    price: req.body.price
  }
  try {
    const ids = { _id: req.params.id };
    await Price.findByIdAndUpdate(ids, db);
    res.redirect("/dashboard/price/technical-support");
  } catch (error) {
    console.log(error);
  }
})
// DELETE PAGE 
router.get("/price/technical-support/delete/:id", async (req, res) => {
  try {
    const id = { _id: req.params.id };
    await Price.findByIdAndDelete(id);
    res.redirect("/dashboard/price/technical-support");
  } catch (error) {
    console.log(error);
  }
});


module.exports = router;
