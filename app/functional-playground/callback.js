/*
 * SIMPLE CALLBACK
 */

var request = require('request');
let getRedditTitles = () => {
    let response;
    try {
        var options = {
            url: 'https://www.reddit.com/r/subreddits/new.json?limit=10',
            headers: {
                'User-Agent': 'request'
            }
        };
        request.get(options, function (err, res, body) {
            if (err) {
                console.log("Error in response" + err.message);
            } else {
                var children = JSON.parse(body).data.children;
                children.forEach(child => {
                    console.log(child.data.title + "\n");
                });
            }
        });
    } catch (err) {
        console.log("Error calling API" + err.message);
    }
};

getRedditTitles();
