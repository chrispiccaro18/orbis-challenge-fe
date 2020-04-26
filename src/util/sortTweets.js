export default (tweets) =>
  tweets.sort((a, b) => b.id - a.id);
