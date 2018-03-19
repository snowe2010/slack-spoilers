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
            
            "attachments": [
            {
            "fallback": "Required plain-text summary of the attachment.",
            "color": "#36a64f",
            "pretext": "Optional text that appears above the attachment block",
            "author_name": "Bobby Tables",
            "author_link": "http://flickr.com/bobby/",
            "author_icon": "http://flickr.com/icons/bobby.jpg",
            "title": "Slack API Documentation",
            "title_link": "https://api.slack.com/",
            "text": " Optional text that \n\n\n\n\n\nappears within the attachment",
            "fields": [
                {
                    "title": "Priority",
                    "value": "High",
                    "short": false
                }
            ],
            "image_url": "http://my-website.com/path/to/image.jpg",
            "thumb_url": "http://example.com/path/to/thumb.png",
            "footer": "Slack API",
            "footer_icon": "https://platform.slack-edge.com/img/default_application_icon.png",
            "ts": 123456789
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
