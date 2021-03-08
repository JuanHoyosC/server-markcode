const express = require('express');
const app = express();
const wkhtmltopdf = require('wkhtmltopdf');
const fs = require("fs");
const morgan = require('morgan')
const cors = require('cors');

app.use(morgan('dev'))
app.use(express.json());
app.use(cors({origin: '*'}))


app.post('/', (req, res) => {

    wkhtmltopdf(req.body.data, { output: 'demo.pdf', pageSize: 'letter' }, () => {
        const data = fs.readFileSync('./demo.pdf');
        res.contentType("application/pdf");
        res.send(data);
    });
})



app.listen(process.env.PORT || 3001, () => {
    console.log('puerto 3001')
   
})