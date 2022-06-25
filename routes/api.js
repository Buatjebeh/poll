__path = process.cwd()

var express = require('express');

// MASUKKAN/GANTI APIKEY 
apikey = "nasigoreng"
// 

var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var router  = express.Router();
nottext: {message: 'MASUKKAN TEXT' }
notapikey: {message: 'APIKEY SALAH' }

// WALLPAPER
router.get('/wallml', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/wallpaper/wallml`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/wallrandom', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/wallpaper/wallrandom`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/wallcode', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/wallpaper/wallcode`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/wallneon', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/wallpaper/wallneon`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/wallpubg', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/wallpaper/wallpubg`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

// TEXTPRO
router.get('/halloween', async (req, res, next) => { 
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/textpro/halloween?text=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/rainbow', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/textpro/rainbow?text=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/scfi', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/textpro/scfi?text=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/blue', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/textpro/blue?text=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/juice', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/textpro/juice?text=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/purple', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/textpro/purple?text=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/toxic', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/textpro/toxic?text=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/peridot', async (req, res, next) => { 
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' }) 
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/textpro/peridot?text=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/metal', async (req, res, next) => { 
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' }) 
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/textpro/metal?text=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/realistic', async (req, res, next) => { 
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' }) 
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/textpro/realistic?text=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/impressive', async (req, res, next) => { 
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' }) 
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/textpro/impressive?text=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/cracked', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/textpro/cracked?text=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/magma', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/textpro/magma?text=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/thunder', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/textpro/thunder?text=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/berry', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/textpro/berry?text=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/transformer', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/textpro/transformer?text=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/horror', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/textpro/horror?text=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/metallic', async (req, res, next) => { 
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' }) 
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/textpro/metallic?text=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/circuit', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/textpro/circuit?text=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/sketch', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/textpro/sketch?text=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

// RANDOM
router.get('/jumlahangka', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/random/jumlahangka?query=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/jumlahhuruf', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/random/jumlahhuruf?query=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/besarkecil', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/random/besarkecil?query=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/resepmasakan', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/random/resepmasakan?query=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/katajago', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/random/katajago?query=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/artimimpi', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/random/artimimpi?query=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/artinama', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/random/artinama?query=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/kapital', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/random/kapital?query=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/halah', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/random/halah?query=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/huluh', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/random/huluh?query=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/heleh', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/random/heleh?query=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/bilangangka', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/random/bilangangka?query=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/balikangka', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/random/balikangka?query=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/balikhuruf', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/random/balikhuruf?query=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/wikipedia', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/random/wikipedia?query=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

// CANVAS 
router.get('/sadcat', async (req, res, next) => {
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/sadcat?text=${text}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/facts', async (req, res, next) => {
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/facts?text=${text}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/pikachu', async (req, res, next) => {
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/pikachu?text=${text}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/biden', async (req, res, next) => {
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/biden?text=${text}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/oogway', async (req, res, next) => {
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/oogway?text=${text}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/gun', async (req, res, next) => {
var apikeyInput = req.query.apikey
url = req.query.url 
if (!url) return res.json({message: 'MASUKKAN URL IMAGE' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/gun?url=${url}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/greyscale', async (req, res, next) => {
var apikeyInput = req.query.apikey
url = req.query.url 
if (!url) return res.json({message: 'MASUKKAN URL IMAGE' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/greyscale?url=${url}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/ad', async (req, res, next) => {
var apikeyInput = req.query.apikey
url = req.query.url 
if (!url) return res.json({message: 'MASUKKAN URL IMAGE' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/ad?url=${url}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/blur', async (req, res, next) => {
var apikeyInput = req.query.apikey
url = req.query.url 
if (!url) return res.json({message: 'MASUKKAN URL IMAGE' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/blur?url=${url}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/uncover', async (req, res, next) => {
var apikeyInput = req.query.apikey
url = req.query.url 
if (!url) return res.json({message: 'MASUKKAN URL IMAGE' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/uncover?url=${url}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/invert', async (req, res, next) => {
var apikeyInput = req.query.apikey
url = req.query.url 
if (!url) return res.json({message: 'MASUKKAN URL IMAGE' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/invert?url=${url}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/alert', async (req, res, next) => {
var apikeyInput = req.query.apikey
url = req.query.url 
if (!url) return res.json({message: 'MASUKKAN URL IMAGE' }) 
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/alert?url=${url}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/tebaklirik', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://api-yogipw.herokuapp.com/api/kuis/tebaklirik`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/tebakkimia', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://api-yogipw.herokuapp.com/api/kuis/tebakkimia`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/tebakjenaka', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://api-yogipw.herokuapp.com/api/kuis/tebakjenaka`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/tebakbendera', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://api-yogipw.herokuapp.com/api/kuis/tebakbendera`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/tebakgambar', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://api-yogipw.herokuapp.com/api/kuis/tebakgambar`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/caklontong', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://api-yogipw.herokuapp.com/api/kuis/caklontong`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})


module.exports = router
