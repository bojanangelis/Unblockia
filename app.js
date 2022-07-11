// The following data represents 5 players on a team playing a game. Each player
// has a field, recentlyPlayedWith, which is an array of player names. The task is to
// return a 2D array: an array of unique groups, where a group is an array of player
// names.
// A group is defined as follows:
// - A group is an array of player names who have recently played with each other.
// - Each member in a group must have played with each other member.
// - Each group must have at least two names, and duplicate groups must be
// discarded.
// - If a group is entirely contained in a larger group, it must be discarded in favor
// of the larger group.
// - Players who aren't in the team of 5 players should be excluded from the results.

const players = require("./data");
const data = new Map();

const addNode = (player) => {
  data.set(player, new Array());
};

const dfs = (value) => {
  let i = players.findIndex((item) => item.includes(value));
  return new Array(5).fill().map((_, i) => players[i + 1]);
};

const groupPlayers = (value) => {
  data.get(value).push("name", value, "recentlyPlayedWith", dfs(value));
};

players.forEach(addNode);
players.forEach((item) => groupPlayers(item));
console.log(data);
