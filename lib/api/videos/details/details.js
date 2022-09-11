const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const fs = require("fs");
const details = async ({ url, puppeteerConfig } = {}) => {
  let browser;
  try {
    browser = await puppeteer.launch(puppeteerConfig);
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });
    const html = await page.content();

    const $ = cheerio.load(html);
    try {
      var title = $('meta[property="og:title"]').attr('content');
    } catch (err) {

    }
    try { var duration = $('meta[property="og:duration"]').attr('content'); } catch (err) {

    }
    try { var image = $('meta[property="og:image"]').attr('content'); } catch (err) {

    }
    try { var videoType = $('meta[property="og:video:type"]').attr('content'); } catch (err) {

    }
    try { var videoWidth = $('meta[property="og:video:width"]').attr('content'); } catch (err) {

    }
    try { var videoHeight = $('meta[property="og:video:height"]').attr('content'); } catch (err) {

    }
    try { var views = $('#nb-views-number').text(); } catch (err) {

    }
    try { var videoScript = $('#video-player-bg > script:nth-child(6)').html(); } catch (err) {

    }
    try {
      var low = (videoScript.match('html5player.setVideoUrlLow\\(\'(.*?)\'\\);') || [])[1];
    } catch (err) {

    }
    try {
      var high = videoScript.match('html5player.setVideoUrlHigh\\(\'(.*?)\'\\);' || [])[1];
    } catch (err) {

    }
    try {
      var HLS = videoScript.match('html5player.setVideoHLS\\(\'(.*?)\'\\);' || [])[1];
    } catch (err) {

    }
    try {
      var thumb = videoScript.match('html5player.setThumbUrl\\(\'(.*?)\'\\);' || [])[1];
    } catch (err) {

    }
    try {
      var thumb69 = videoScript.match('html5player.setThumbUrl169\\(\'(.*?)\'\\);' || [])[1];
    } catch (err) {

    }
    try {
      var thumbSlide = videoScript.match('html5player.setThumbSlide\\(\'(.*?)\'\\);' || [])[1];
    } catch (err) {

    }
    try {
      var thumbSlideBig = videoScript.match('html5player.setThumbSlideBig\\(\'(.*?)\'\\);' || [])[1];
    } catch (err) {

    }
    const files = {
      low: low,
      high: high,
      HLS: HLS,
      thumb: thumb,
      thumb69: thumb69,
      thumbSlide: thumbSlide,
      thumbSlideBig: thumbSlideBig
    };

    return {
      title,
      url,
      duration,
      image,
      views,
      videoType,
      videoWidth,
      videoHeight,
      files,
    };
  } finally {
    if (browser) await browser.close();
  }
};

module.exports = details;
