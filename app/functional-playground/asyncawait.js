function doubleAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x * 2);
        }, 2000);
    });
}

async function addAsync(x) {
    const a = await doubleAfter2Seconds(10);
    const b = await doubleAfter2Seconds(20);
    const c = await doubleAfter2Seconds(30);
    return x + a + b + c;
}


addAsync(10).then((sum) => {
    console.log(sum);
});

//========================================================================//

/* CALL BACK HELL */

var request = require('request');
var options = {
    url: 'https://www.reddit.com/r/subreddits/new.json?limit=1',
    headers: {
        'User-Agent': 'request'
    }
};

let getFirstPost = () => {
    return new Promise((resolve, reject) => {
        request.get(options, function (err, res, body) {
            if (err) {
                reject(err);
            } else {
                resolve(body);
            }
        });
    });
};

let getRedditPageURL = (response) => {
    return new Promise((resolve, reject) => {
        try {
            var url = JSON.parse(response).data.children[0].data.url;
            var title = JSON.parse(response).data.children[0].data.title;
            resolve({
                url: url,
                title: title
            });
        } catch (err) {
            reject(err);
        }
    });
}

let getRedditPageCount = (response) => {
    return new Promise((resolve, reject) => {
        try {
            options.url = response.url;
            request.get(options, function (err, res, body) {
                response.count = body.length;
                resolve(response);
            });
        } catch (err) {
            reject(err);
        }
    });
}

async function main() {
    var firstPostResponse = await getFirstPost();
    var pageURLResponse = await getRedditPageURL(firstPostResponse);
    var finalResponse = await getRedditPageCount(pageURLResponse);
    return finalResponse;
}

main().then((response) => {
    console.log("Title :" + response.title);
    console.log("URL :" + response.url);
    console.log("Length of the Post : " + response.count);
});