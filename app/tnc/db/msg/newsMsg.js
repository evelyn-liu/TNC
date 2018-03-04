const news = require("../modules/news");
function findMsg() {
 
    let newMsg = {
        'name':'news'
    };

    news.find(newMsg,function (err, res) {
        let newsMsg = [];
        if (err) {
            console.log("Error:" + err);
        }
        else {
            // newsMsg.push(res);
            console.log(res);
        }

    });
}

findMsg();