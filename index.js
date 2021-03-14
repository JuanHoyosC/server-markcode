const express = require('express');
const app = express();
const wkhtmltopdf = require('wkhtmltopdf');
const fs = require("fs");
const cors = require('cors');

app.use(express.json());
app.use(cors({ origin: '*' }))


app.post('/', (req, res) => {

    try {
        wkhtmltopdf(req.body.data, { output: 'demo.pdf', pageSize: 'letter' }, (err, stream) => {
            const data = fs.readFileSync('./demo.pdf');
            res.contentType("application/pdf");
            res.send(data);
    
        });
    } catch (error) {
        console.log('error')
    }
})



app.listen(process.env.PORT || 3002, () => {
    console.log('puerto 3002')

})