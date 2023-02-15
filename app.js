var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const exhbs = require('express-handlebars') 
const mongoose = require('mongoose')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/dashboard');

var app = express();

mongoose.set('strictQuery', true);


// mongoose.connect("mongodb+srv://user:DA52k1FKXRrniWz7@cluster0.iblh6.mongodb.net/MajorMedia");
mongoose.connect("mongodb+srv://user:DA52k1FKXRrniWz7@cluster0.iblh6.mongodb.net/Web-Major");
const db = mongoose.connection
db.on('open', () => {
  console.log(`MongoDb running`);
})

db.on('error', (err) => {
  console.log(`MongoDb ERROR running`, err);
})

// view engine setup
const exbs = exhbs.create({
  defaultLayout : 'main',
  extname : 'hbs'
})

// view engine setup
app.engine('hbs' , exbs.engine)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/dashboard', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
