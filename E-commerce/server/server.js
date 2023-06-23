var express = require("express");
var app = express();

let dataBase = [
  {
    id: "1",
    name: "acer 27 inch Full HD LED Backlit IPS Panel White Colour Monitor (HA270)  (Frameless, AMD Free Sync, Response Time: 4 ms, 75 Hz Refresh Rate)",
    category: "moniter",
    price: "27,999",
  },
  {
    id: "2",
    name: "SAMSUNG 22 inch Full HD LED Backlit VA Panel (54.48 cm) Monitor (LS22A33ANHWXXL)  (Response Time: 5 ms, 60 Hz Refresh Rate)",
    category: "moniter",
    price: "39,999",
  },
  {
    id: "3",
    name: "The Girl in Room 105  (English, Paperback, Bhagat Chetan)",
    category: "book",
    price: "299",
  },
  {
    id: "4",
    name: "Abraham and the Philosopher's Stone   (Hindi Edition)",
    category: "book",
    price: "199",
  },
  {
    id: "5",
    name: "The Complete Collection of Short Fiction Volumes 1-9",
    category: "book",
    price: "700",
  },
  {
    id: "6",
    name: "Audio Technica ATH-M30x Professional Monitor Headphones Wired without Mic Headset  (Black, On the Ear)",
    category: "headphone",
    price: "8,999",
  },
  {
    id: "7",
    name: "Sennheiser CX 275 II Black In The Ear Stereo Bluetooth Wireless Noise Canceling OvertheEar Headphones with Microphone for Mobile PhoneTablet Laptop PC Mac iPhone iPad Android - Silver/Black ",
    category: "headphone",
    price: "7,999",
  },
  {
    id: "8",
    name: "JBL TUNE 120TWS True Wireless In-ear HeadBluetooth headPhones with the Charging Case(White)",
    category: "headphone",
    price: "2,999",
  },
  {
    id: "9",
    name: "fluffies Cute Nylex Mother Teddy Bear - 40 cm  (Pink)",
    category: "toys",
    price: "999",
  },
  {
    id: "10",
    name: "vtb retail stuffed toys 4 feet pink teddy bear / high quality / love teddy For girls valentine & Anniversary gift / cute and soft teddy bear -122 cm (Pink) - 48 inch  (Pink)",
    category: "toys",
    price: "389",
  },
];

app.get("/", function (req, res) {
  res.send("Home!");
});
app.get("/home", function (req, res) {
  res.send("Home!");
});
app.get("/products", function (req, res) {
  res.send("Products!");
});
app.get("/product/:category", function (req, res) {
  res.send("Product Details!");
});
app.get("/cart", function (req, res) {
  res.send("Cart!");
});
app.listen(3000);
