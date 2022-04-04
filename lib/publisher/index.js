const sources = require('./sources');
const axios = require('axios').default;
const { dingdingRobot } = require('./constants');

const pushDingTalk = async () => {
    const l = Object.keys(sources).length;
    const rndIndex = Math.floor(Math.random() * l);
    const pickCh = Object.keys(sources)[rndIndex];

    const { path, handler, name, pic } = sources[pickCh];
    const requestUrl = `https://rss-publisher.vercel.app${path}.debug.json`;
    console.log(requestUrl);
    const { data } = await axios.get(requestUrl);

    let feeds = handler(data);
    feeds = feeds.slice(0, 10);

    feeds[0].title = `[rss-${name}]${feeds[0].title}`;
    feeds[0].picURL = pic;

    feeds = feeds.map((it) => ({
        ...it,
        messageURL: `dingtalk://dingtalkclient/page/link?url=${encodeURIComponent(it.messageURL)}&pc_slide=false`,
    }));

    const message = {
        msgtype: 'feedCard',
        feedCard: {
            links: feeds,
        },
    };

    const resp = await axios.post(dingdingRobot, message);
    return resp.data;
};


pushDingTalk().catch((e) => {
    console.log(e);
});