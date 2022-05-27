const base = require('../../base');

const parseVideo = ($, video) => {
  const $video = $(video);

  const title = $video.find('p:not(.metadata) a').attr('title');
  const path = $video.find('.thumb > a').attr('href');
  const url = `${base.BASE_URL}${path}`;
  const thumbimg = $video.find('.thumb-block .thumb img, .thumb-block .thumb-purchase img').attr('data-src');
  const views = $video.find('p.metadata > span.bg > span > span').text();
  const duration = $video.find('p.metadata > span.bg > span.duration').text();
  const profileElement = $video.find('p.metadata > span.bg > span > a'); // .thumb-block p.metadata a
  const profile = {
    name: profileElement.text(),
    url: `${base.BASE_URL}${profileElement.attr('href')}`,
  };

  return {
    url,
    path,
	thumbimg,
    title,
    duration,
    profile,
    views,
  };
};

module.exports = parseVideo;
