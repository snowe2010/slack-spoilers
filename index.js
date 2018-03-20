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
    let token = req.body.token;
    let team_id = req.body.team_id;
    let team_domain = req.body.team_domain;
    let channel_id = req.body.channel_id;
    let channel_name = req.body.channel_name;
    let user_id = req.body.user_id;
    let user_name = req.body.user_name;
    let command = req.body.command;
    let text = req.body.text;
    let response_url = req.body.response_url;
    let trigger_id = req.body.trigger_id;

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end();

    console.log('url is', req.body);
    console.log('userName is', userName);
    console.log('response url is', responseUrl)
    
    // let util = require('util');
    // console.log(util.inspect(req, false, null));

    request({
        url: "https://slack.com/api/chat.postMessage",
        method: 'POST',
        json: {
            token: token,
            channel: channel_id,
            text: "test",
            as_user: true,

        }
    }, function(error, response, body){
        if(error) {
            console.log(error);
            console.log('asdfljasdf');
        } else {
            console.log(response.statusCode, body);
        }
    }).auth(null, null, true, token);
    // request({
    //     url: responseUrl, //URL to hit
    //     method: 'POST',
    //     //Lets post the following key/values as form
    //     json: {
    //         response_type: 'in_channel',
            
    //         "attachments": [
    //         {
    //         "fallback": "Required plain-text summary of the attachment.",
    //         "color": "#36a64f",
    //         "pretext": "Optional text that appears above the attachment block",
    //         "author_name": "Bobby Tables",
    //         "author_link": "http://flickr.com/bobby/",
    //         "author_icon": "http://flickr.com/icons/bobby.jpg",
    //         "title": "Slack API Documentation",
    //         "title_link": "https://api.slack.com/",
    //         "text": userName +" posted some spoillaaassss \n \n \n \n \n \n " + spoilerText,
    //         "fields": [
    //             {
    //                 "title": "Priority",
    //                 "value": "High",
    //                 "short": false
    //             }
    //         ],
    //         "image_url": "http://my-website.com/path/to/image.jpg",
    //         "thumb_url": "http://example.com/path/to/thumb.png",
    //         "footer": "Slack API",
    //         "footer_icon": "https://platform.slack-edge.com/img/default_application_icon.png",
    //         "ts": 123456789
    //     }
    // ]
    //     }
    // }, function(error, response, body){
    //     if(error) {
    //         console.log(error);
    //     } else {
    //         console.log(response.statusCode, body);
    //     }
    // });
});

app.listen(app.get('port'), function () {
  console.log('Example app listening on port 5000!');
});
