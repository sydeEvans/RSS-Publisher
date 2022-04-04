// https://s2.loli.net/2022/04/02/H5juN7J62p1L94P.jpg

const tianya = {
    name: '天涯',
    path: '/tianya/index/free',
    pic: 'https://s2.loli.net/2022/04/02/KtAjZ8qSDx7JYo6.jpg',
    handler: (message) =>
        message.item.map((it) => ({
            title: it.title,
            messageURL: it.link,
        })),
};

const jianshu = {
    name: '简书',
    path: '/jianshu/home',
    pic: 'https://s2.loli.net/2022/04/02/Lptux7n4eZCoA3H.jpg',
    handler: (message) =>
        message.item.map((it) => ({
            title: it.title,
            messageURL: it.link,
        })),
};

const dgtle = {
    name: '数字尾巴',
    path: '/dgtle',
    pic: 'https://s2.loli.net/2022/04/02/H5juN7J62p1L94P.jpg',
    handler: (message) =>
        message.item.map((it) => ({
            title: it.title,
            messageURL: it.link,
        })),
};

const weibo = {
    name: '微博',
    path: '/weibo/search/hot',
    pic: 'https://s2.loli.net/2022/04/02/ExPMuo8XerbvSI5.png',
    handler: (message) =>
        message.item.map((it) => ({
            title: it.title,
            messageURL: it.link,
        })),
};

const zhihu = {
    name: '知乎',
    path: '/zhihu/hotlist',
    pic: 'https://s2.loli.net/2022/04/02/1LhPHFptM3UIiOE.png',
    handler: (message) =>
        message.item.map((it) => ({
            title: it.title,
            messageURL: it.link,
        })),
};

const zhihuDaily = {
    name: '知乎日报',
    path: '/zhihu/daily',
    pic: 'https://s2.loli.net/2022/04/02/pj6AIufeOHt5K8V.jpg',
    handler: (message) =>
        message.item.map((it) => ({
            title: it.title,
            messageURL: it.link,
        })),
};

const v2ex = {
    name: 'v2ex',
    path: '/v2ex/topics/latest',
    pic: 'https://s2.loli.net/2022/04/02/L57VvWOluKj93qA.jpg',
    handler: (message) =>
        message.item.map((it) => ({
            title: it.title,
            messageURL: it.link,
        })),
};

module.exports = {
    tianya,
    jianshu,
    dgtle,
    weibo,
    zhihu,
    zhihuDaily,
    v2ex,
};
