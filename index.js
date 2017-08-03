var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: 1528188916,
  channelSecret: 36e51c944dbd9746dc398960e7cb8fff,
  channelAccessToken: H8OCDUqr2bryLzCOgqhiLR9JoS3ycQeQESVq3IgUioNoJxMPGfqZd6JGnW2+VKko8PHXEsBdA1/lv2vkksUOjF+rvsxmV7cDTGP3zuvKRJ6dd0jiipFZAdzutq1Y10472SLI37tcXGFnmBFYV9QCFQdB04t89/1O/w1cDnyilFU=
});

bot.on('message', function(event) {
  console.log(event); //把收到訊息的 event 印出來看看
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});