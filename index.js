var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded());
app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
    console.log("HI");
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end();
})
app.post('/spoiler', function (req, res) {
    var userName = req.body.user_name;
    var spoilerText = req.body.text;
    var responseUrl = req.body.response_url;

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end();

    console.log('url is', req.body);
    console.log('userName is', userName);

    request({
        url: responseUrl, //URL to hit
        method: 'POST',
        //Lets post the following key/values as form
        json: {
            response_type: 'in_channel',
            text: userName + ' testing posted a spoiler..testing posted a spoiler..testing posted a spoiler..testing posted a spoiler..testing posted a spoiler..testing posted a spoiler..testing posted a spoiler..testing posted a spoiler..testing posted a spoiler..testing posted a spoiler..testing posted a spoiler..testing posted a spoiler..testing posted a spoiler..testing posted a spoiler..testing posted a spoiler..testing posted a spoiler..testing posted a spoiler..testing posted a spoiler..testing posted a spoiler..testing posted a spoiler..testing posted a spoiler..testing posted a spoiler..testing posted a spoiler..testing posted a spoiler..testing posted a spoiler..testing posted a spoiler..testing posted a spoiler..testing posted a spoiler..testing posted a spoiler..testing posted a spoiler..testing posted a spoiler..testing posted a spoiler..testing posted a spoiler..testing posted a spoiler...\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n' + spoilerText,
            attachments: [
                {
                    color: 'danger',
                    text: userName + ' posted a spoiler...\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n' + spoilerText
                }
            ]
        }
    }, function(error, response, body){
        if(error) {
            console.log(error);
        } else {
            console.log(response.statusCode, body);
        }
    });
});

app.listen(app.get('port'), function () {
  console.log('Example app listening on port 3000!');
});
