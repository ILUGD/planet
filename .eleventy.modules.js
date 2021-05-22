const url = require("url");
const axios = require("axios");
const FeedMe = require("feedme");
const _ = require("lodash");

/**
 * Fetch and parse the feed
 *
 * Correctly parses rss, atom and json feeds.
 *
 * @param {*} feedUrl
 * @return {*}
 */
async function fetchFeed(feedUrl) {
  let feedData = {};
  try {
    let parser = new FeedMe(true);
    const response = await axios({
      method: "get",
      url: feedUrl,
      responseType: "stream",
    });

    response.data.pipe(parser);

    feedData = await new Promise((resolve, reject) => {
      parser.on("finish", () => {
        resolve(parser.done());
      });
    });

    const baseUrl = new URL(feedUrl).origin;
    feedData.items = _.chain(feedData.items)
      .take(10)
      .map((item) => correctFeedLink(item, baseUrl))
      .value();
  } catch (e) {
    console.error(`Failed to fetch feed ${feedUrl}`)
  }
  return feedData;
}

/**
 * Correct the Feed Item urls, using know defects
 *
 * 1. Hugo compiles the feed with relative url
 * 2. link had attribute href instead of the content
 *
 * @param {*} feedItem
 * @param {*} baseUrl
 */
function correctFeedLink(feedItem, baseUrl) {
  let feedLink = feedItem.link;
  if (typeof feedLink === "object") {
    feedLink = feedLink.href;
  }
  const feedUrlObject = url.parse(feedLink);
  if (feedUrlObject.hostname === null) {
    feedLink = url.resolve(baseUrl, feedLink);
  }

  feedItem.link = feedLink;
  return feedItem;
}

module.exports = {
  fetchFeed: fetchFeed,
  correctFeedLink: correctFeedLink,
};
