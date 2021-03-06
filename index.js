var express = require('express');
var request = require('request');
require('request').debug = true
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
    var fullSpoilerText = req.body.text;
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

    let spoilerTitleIndex = fullSpoilerText.indexOf('[');
    let spoilerText = spoilerTitleIndex > 0 ? fullSpoilerText.slice(0, spoilerTitleIndex) : '';
    let spoilerTitle = spoilerTitleIndex > 0 ? fullSpoilerText.slice(spoilerTitleIndex) : fullSpoilerText;

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end();

    console.log('url is', req.body);
    console.log('userName is', userName);
    console.log('response url is', responseUrl)
    console.log('token is ', token);

    // let util = require('util');
    // console.log(util.inspect(req, false, null));

    /*request({
        url: "https://slack.com/api/chat.postMessage",
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            Authorization: 'Basic xoxp-9433604581-24440771731-332547015026-15032b57801756686c4e944af3ec9b1f',
        },
        json: {
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
    }).auth(null, null, true, token);*/
    request({
        url: responseUrl, //URL to hit
        method: 'POST',
        //Lets post the following key/values as form
        json: {
            response_type: 'in_channel',

            "attachments": [
                {
                    "fallback": userName +" posted some spoillaaassss \n \n \n \n \n \n " + spoilerText,
                    "color": "#F44336",
                    // "pretext": "Optional text that appears above the attachment block",
                    // "author_name": userName,
                    // "author_link": "http://flickr.com/bobby/",
                    // "author_icon": "http://flickr.com/icons/bobby.jpg",
                    "title": spoilerTitle,
                    // "title_link": "https://api.slack.com/",
                    "text": userName + " posted some spoillaaassss \n \n \n \n \n \n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                " + spoilerText,
                    // "fields": [
                    //     {
                    //         "title": "Priority",
                    //         "value": "High",
                    //         "short": false
                    //     }
                    // ],
                    // "image_url": "http://my-website.com/path/to/image.jpg",
                    // "thumb_url": "http://example.com/path/to/thumb.png",
                    // "footer": "Slack API",
                    // "footer_icon": "https://platform.slack-edge.com/img/default_application_icon.png",
                    // "ts": 123456789
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
  console.log('Example app listening on port 5000!');
});
