const ACCESS_TOKEN = "YOUR ACCESS TOKEN";
USER_ID = 'SEND USER';
const APIKEY = "WEATHER MAP APIKEY";
const LAT = 0;  // 検索したい地点の緯度
const LON = 0;  // 検索したい地点の経度
const fetchUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${LAT}&lon=${LON}&units=metric&lang=ja&appid=${APIKEY}`


function myFunction() {
  let url = "https://api.line.me/v2/bot/message/push";
  let text = "大切な人へ送るメッセージ";
  let textPost = {
    "to": USER_ID,
    "messages": [{
      "type": "text",
      "text": text,
    }]
  };

  let textHeaders = {
    "Content-Type": "application/json",
    'Authorization': 'Bearer ' + ACCESS_TOKEN,
  };

  let textOption = {
    "method": "post",
    "headers": textHeaders,
    "payload": JSON.stringify(textPost)
  };
  UrlFetchApp.fetch(url, textOption);

  let message = getWeather();
  let optionsMessage = {
    "method": "post",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + ACCESS_TOKEN
    },
    "payload": JSON.stringify(message)
  };
  UrlFetchApp.fetch(url, optionsMessage);
}


function unixtimeToDatetime(unixtime) {
  const date = new Date(unixtime * 1000);
  return Utilities.formatDate(date, 'Asia/Tokyo', 'MM/dd/HH:mm');
}

function getWeather() {
  // @ts-ignore
  let res = JSON.parse(UrlFetchApp.fetch(fetchUrl));
  let hourly = res.hourly;
  let date = [];
  weather = [];
  icon = [];
  temp = [];
  hum = [];

  let today = "";

  for (var i = 0; i <= 8; i++) {
    let hour = hourly[i*3];
    let unixtime = unixtimeToDatetime(Number(hour.dt));
    date.push(unixtime.slice(6));
    weather.push(hour.weather[0].description);
    icon.push(hour.weather[0].icon);
    temp.push(Math.round(hour.temp));
    hum.push(hour.humidity);

    if (i === 0) {
      today += unixtime.slice(0, 5);
    }
  }

  let message = {
    "to": USER_ID,
    "messages": [{
      "type": "flex",
      "altText": `${today.slice(0, 2)}月${today.slice(3)}日の天気`,
      "contents": {
        "type": "bubble",
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": `${today}の天気`,
              "weight": "bold",
              "size": "xxl"
            },
            {
              "type": "separator",
              "margin": "xxl"
            },
            {
              "type": "box",
              "layout": "baseline",
              "margin": "lg",
              "spacing": "sm",
              "contents": [
                {
                  "type": "text",
                  "text": "\n" + date[0],
                  "color": "#666666",
                  "size": "sm",
                  "flex": 0
                },
                {
                  "type": "text",
                  "text": " 気温" + temp[0] + "℃",
                  "color": "#666666",
                  "size": "sm",
                  "flex": 0
                },
                {
                  "type": "text",
                  "text": " 湿度" + hum[0] + "%" + " ",
                  "size": "sm",
                  "color": "#666666",
                  "flex": 0
                },
                {
                  "type": "text",
                  "text": weather[0] + " ",
                  "size": "sm",
                  "color": "#666666",
                  "flex": 0
                },
                {
                  "type": "icon",
                  "url": "https://openweathermap.org/img/wn/" + icon[0] + ".png",
                  "size": "xxl",
                }
              ]
            },
            {
              "type": "box",
              "layout": "baseline",
              "margin": "lg",
              "spacing": "md",
              "contents": [
                {
                  "type": "text",
                  "text": "\n" + date[1],
                  "color": "#666666",
                  "size": "sm",
                  "flex": 0
                },
                {
                  "type": "text",
                  "text": " 気温" + temp[1] + "℃",
                  "color": "#666666",
                  "size": "sm",
                  "flex": 0
                },
                {
                  "type": "text",
                  "text": " 湿度" + hum[1] + "%",
                  "size": "sm",
                  "color": "#666666",
                  "flex": 0
                },
                {
                  "type": "text",
                  "text": weather[1] + " ",
                  "size": "sm",
                  "color": "#666666",
                  "flex": 0
                },
                {
                  "type": "icon",
                  "url": "https://openweathermap.org/img/wn/" + icon[1] + ".png",
                  "size": "xxl",
                }
              ]
            },
            {
              "type": "box",
              "layout": "baseline",
              "margin": "lg",
              "spacing": "sm",
              "contents": [
                {
                  "type": "text",
                  "text": "\n" + date[2],
                  "color": "#666666",
                  "size": "sm",
                  "flex": 0
                },
                {
                  "type": "text",
                  "text": " 気温" + temp[2] + "℃",
                  "color": "#666666",
                  "size": "sm",
                  "flex": 0
                },
                {
                  "type": "text",
                  "text": " 湿度" + hum[2] + "%",
                  "size": "sm",
                  "color": "#666666",
                  "flex": 0
                },
                {
                  "type": "text",
                  "text": weather[2] + " ",
                  "size": "sm",
                  "color": "#666666",
                  "flex": 0
                },
                {
                  "type": "icon",
                  "url": "https://openweathermap.org/img/wn/" + icon[2] + ".png",
                  "size": "xxl",
                }
              ]
            },
            {
              "type": "box",
              "layout": "baseline",
              "margin": "lg",
              "spacing": "sm",
              "contents": [
                {
                  "type": "text",
                  "text": "\n" + date[3],
                  "color": "#666666",
                  "size": "sm",
                  "flex": 0
                },
                {
                  "type": "text",
                  "text": " 気温" + temp[3] + "℃",
                  "color": "#666666",
                  "size": "sm",
                  "flex": 0
                },
                {
                  "type": "text",
                  "text": " 湿度" + hum[3] + "%",
                  "size": "sm",
                  "color": "#666666",
                  "flex": 0
                },
                {
                  "type": "text",
                  "text": weather[3] + " ",
                  "size": "sm",
                  "color": "#666666",
                  "flex": 0
                },
                {
                  "type": "icon",
                  "url": "https://openweathermap.org/img/wn/" + icon[3] + ".png",
                  "size": "xxl",
                }
              ]
            },
            {
              "type": "box",
              "layout": "baseline",
              "margin": "lg",
              "spacing": "sm",
              "contents": [
                {
                  "type": "text",
                  "text": "\n" + date[4],
                  "color": "#666666",
                  "size": "sm",
                  "flex": 0
                },
                {
                  "type": "text",
                  "text": " 気温" + temp[4] + "℃",
                  "color": "#666666",
                  "size": "sm",
                  "flex": 0
                },
                {
                  "type": "text",
                  "text": " 湿度" + hum[4] + "%",
                  "size": "sm",
                  "color": "#666666",
                  "flex": 0
                },
                {
                  "type": "text",
                  "text": weather[4] + " ",
                  "size": "sm",
                  "color": "#666666",
                  "flex": 0
                },
                {
                  "type": "icon",
                  "url": "https://openweathermap.org/img/wn/" + icon[4] + ".png",
                  "size": "xxl",
                }
              ]
            },
            {
              "type": "box",
              "layout": "baseline",
              "margin": "lg",
              "spacing": "sm",
              "contents": [
                {
                  "type": "text",
                  "text": "\n" + date[5],
                  "color": "#666666",
                  "size": "sm",
                  "flex": 0
                },
                {
                  "type": "text",
                  "text": " 気温" + temp[5] + "℃",
                  "color": "#666666",
                  "size": "sm",
                  "flex": 0
                },
                {
                  "type": "text",
                  "text": " 湿度" + hum[5] + "%",
                  "size": "sm",
                  "color": "#666666",
                  "flex": 0
                },
                {
                  "type": "text",
                  "text": weather[5] + " ",
                  "size": "sm",
                  "color": "#666666",
                  "flex": 0
                },
                {
                  "type": "icon",
                  "url": "https://openweathermap.org/img/wn/" + icon[5] + ".png",
                  "size": "xxl",
                }
              ]
            },
            {
              "type": "box",
              "layout": "baseline",
              "margin": "lg",
              "spacing": "sm",
              "contents": [
                {
                  "type": "text",
                  "text": "\n" + date[6],
                  "color": "#666666",
                  "size": "sm",
                  "flex": 0
                },
                {
                  "type": "text",
                  "text": " 気温" + temp[6] + "℃",
                  "color": "#666666",
                  "size": "sm",
                  "flex": 0
                },
                {
                  "type": "text",
                  "text": " 湿度" + hum[6] + "%",
                  "size": "sm",
                  "color": "#666666",
                  "flex": 0
                },
                {
                  "type": "text",
                  "text": weather[6] + " ",
                  "size": "sm",
                  "color": "#666666",
                  "flex": 0
                },
                {
                  "type": "icon",
                  "url": "https://openweathermap.org/img/wn/" + icon[6] + ".png",
                  "size": "xxl",
                }
              ]
            },
            {
              "type": "box",
              "layout": "baseline",
              "margin": "lg",
              "spacing": "sm",
              "contents": [
                {
                  "type": "text",
                  "text": "\n" + date[7],
                  "color": "#666666",
                  "size": "sm",
                  "flex": 0
                },
                {
                  "type": "text",
                  "text": " 気温" + temp[7] + "℃",
                  "color": "#666666",
                  "size": "sm",
                  "flex": 0
                },
                {
                  "type": "text",
                  "text": " 湿度" + hum[7] + "%",
                  "size": "sm",
                  "color": "#666666",
                  "flex": 0
                },
                {
                  "type": "text",
                  "text": weather[7] + " ",
                  "size": "sm",
                  "color": "#666666",
                  "flex": 0
                },
                {
                  "type": "icon",
                  "url": "https://openweathermap.org/img/wn/" + icon[7] + ".png",
                  "size": "xxl",
                }
              ]
            },
            {
              "type": "box",
              "layout": "baseline",
              "margin": "lg",
              "spacing": "md",
              "contents": [
                {
                  "type": "text",
                  "text": "\n" + date[8],
                  "color": "#666666",
                  "size": "sm",
                  "flex": 0
                },
                {
                  "type": "text",
                  "text": " 気温" + temp[8] + "℃",
                  "color": "#666666",
                  "size": "sm",
                  "flex": 0
                },
                {
                  "type": "text",
                  "text": " 湿度" + hum[8] + "%",
                  "size": "sm",
                  "color": "#666666",
                  "flex": 0
                },
                {
                  "type": "text",
                  "text": weather[8] + " ",
                  "size": "sm",
                  "color": "#666666",
                  "flex": 0
                },
                {
                  "type": "icon",
                  "url": "https://openweathermap.org/img/wn/" + icon[8] + ".png",
                  "size": "xxl",
                }
              ]
            }           
          ],
        }
      }      
    }]
  }

  return message;  
}