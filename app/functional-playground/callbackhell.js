/* CALL BACK HELL */

var request = require('request');
let getRedditTitles = () => {
    let response;
    try {
        var options = {
            url: 'https://www.reddit.com/r/subreddits/new.json?limit=1',
            headers: {
                'User-Agent': 'request'
            }
        };
        request.get(options, function (err, res, body) {
            if (err) {
                console.log("Error in response" + err.message);
            } else {
                var url = JSON.parse(body).data.children[0].data.url;
                var title = JSON.parse(body).data.children[0].data.title;
                options.url = url;
                // get repo details
                request.get(options, function (err, res, body) {
                    if (err) {
                        console.log("Error in response" + err.message);
                    } else {
                        console.log("Title :" + title)
                        console.log("\nLength of the Post :" + body.length);
                    }
                });
            }
        });
    } catch (err) {
        console.log("Error calling API" + err.message);
    }
};
getRedditTitles();