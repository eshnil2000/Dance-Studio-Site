var express = require('express');
var app = express();
var dateFormat = require('dateformat');
app.use("/", express.static(__dirname));
app.enable("jsonp callback");
var events = [
  {
                    title: 'Sansrity',
                    start: dateFormat(new Date(2014,9,15),"yyyy-mm-dd")
                },
                {
                    title: 'Gujarati Samaj Show',
                    start: dateFormat(new Date(2014,10,15),"yyyy-mm-dd")
                },
                {
                    title: 'Summer WorkShop 1',
                    start: dateFormat(new Date(2014,5,1),"yyyy-mm-dd"),
                    end:   dateFormat(new Date(2014,5,14),"yyyy-mm-dd")
                },
                {
                    title: 'Summer WorkShop 2',
                    start: dateFormat(new Date(2014,5,15),"yyyy-mm-dd"),
                    end:   dateFormat(new Date(2014,5,30),"yyyy-mm-dd")
                },

                {
                    title: 'Summer Enrollment Period- Discounted Rate',
                    start: dateFormat(new Date(2014,2,25),"yyyy-mm-dd"),
                    end:   dateFormat(new Date(2014,3,25),"yyyy-mm-dd")
                },

                {
                    title: 'Summer Enrollment Period- Regular Rate',
                    start: dateFormat(new Date(2014,3,26),"yyyy-mm-dd"),
                    end:  dateFormat(new Date(2014,4,25),"yyyy-mm-dd")
                }
];

app.get('/events', function(req, res) {
  //res.header('Content-type','application/json');
	//res.header('Charset','utf8');

	//res.jsonp(req.query.callback + '('+ JSON.stringify(products) + ');');
	res.send(req.query.callback +'('+ JSON.stringify(events) + ')');
  //res.send(products);
});



app.listen(3001);
console.log('Listening on port 3001');
