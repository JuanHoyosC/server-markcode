const express = require('express');
const app = express();
const wkhtmltopdf = require('wkhtmltopdf');
const fs = require("fs");
const cors = require('cors');

app.use(express.json());
app.use(cors({origin: '*'}))


app.post('/', (req, res) => {

    wkhtmltopdf(req.body.data, { output: 'demo.pdf', pageSize: 'letter' }, (err, stream) => {
        const data = fs.readFileSync('./demo.pdf');
        res.contentType("application/pdf");
        res.send(data);
        
    });
})



app.listen(process.env.PORT || 3001, () => {
    console.log('puerto 3001')
   
})