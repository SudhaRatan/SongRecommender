const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const router = express.Router()

app.set('view engine','ejs')
// app.use(express.static("public"))
app.set('views', __dirname+'/views')
app.set('layout', 'layouts/layout')
app.use(express.static((__dirname, 'public')));
app.use(expressLayouts)

const dat = require('./csv_rand_selector')

router
    .route('/')
    .get((req,res)=>{
            // console.log(req.query.mood,req.query.lang)
        const mood = req.query.mood
        const lang = req.query.lang
        const data = dat(mood,lang)
        // console.log(data)
        if (data!=undefined){
            res.render('ind',{mood:`<iframe class='vido' width='560' height='315' src='https://www.youtube.com/embed/${data[0]}' frameborder='0' allow='accelerometer; autoplay=True; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe><br><br><audio controls>    <source src='http://docs.google.com/uc?export=open&id=${data[1]}' type='audio/mp3'>    </audio>'`})
        }else{
        res.render('ind')
        }
    })


app.use('/',router)
app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });