const EhAPI = require('./ehapi');

module.exports = async (ctx) => {
    const page = ctx.params.page ? parseInt(ctx.params.page) : 0;
    const tag = ctx.params.tag;
    const bittorrent = ctx.params.bittorrent || false;
    const items = await EhAPI.getTagItems(ctx.cache, tag, page, bittorrent);

    if (EhAPI.from_ex) {
        ctx.state.data = {
            title: tag + ' - ExHentai Tag',
            link: `https://exhentai.org/tag/${tag}`,
            item: items,
        };
    } else {
        ctx.state.data = {
            title: tag + ' - E-Hentai Tag',
            link: `https://e-hentai.org/tag/${tag}`,
            item: items,
        };
    }
};
