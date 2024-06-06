// There are n people, each person has a unique id between 0 and n-1. 
// Given the arrays watchedVideos and friends, where 
// watchedVideos[i] and friends[i] contain the list of watched videos 
// and the list of friends respectively for the person with id = i.

// Level 1 of videos are all watched videos by your friends, level 2 of 
// videos are all watched videos by the friends of your friends and so on. 
// In general, the level k of videos are all watched videos by people with 
// the shortest path exactly equal to k with you. Given your id and the 
// level of videos, return the list of videos ordered by their frequencies 
// (increasing). For videos with the same frequency order them 
// alphabetically from least to greatest. 

 

// Example 1:



// Input: watchedVideos = [["A","B"],["C"],["B","C"],["D"]], friends = 
// [[1,2],[0,3],[0,3],[1,2]], id = 0, level = 1
// Output: ["B","C"] 
// Explanation: 
// You have id = 0 (green color in the figure) and your friends are 
// (yellow color in the figure):
// Person with id = 1 -> watchedVideos = ["C"] 
// Person with id = 2 -> watchedVideos = ["B","C"] 
// The frequencies of watchedVideos by your friends are: 
// B -> 1 
// C -> 2
// Example 2:



// Input: watchedVideos = [["A","B"],["C"],["B","C"],["D"]], friends = 
// [[1,2],[0,3],[0,3],[1,2]], id = 0, level = 2
// Output: ["D"]
// Explanation: 
// You have id = 0 (green color in the figure) and the only friend of 
// your friends is the person with id = 3 (yellow color in the figure).

var watchedVideosByFriends = function(watchedVideos, friends, id, level) {
    let n = friends.length;
let visited = new Array(n).fill(false);
let queue = [[id, 0]];
visited[id] = true;

// BFS to find friends at the given level
while (queue.length > 0) {
    let [current, currentLevel] = queue.shift();
    if (currentLevel == level) {
        let videosCount = {};
        for (let friend of queue.map(pair => pair[0])) {
            for (let video of watchedVideos[friend]) {
                if (!(video in videosCount)) {
                    videosCount[video] = 0;
                }
                videosCount[video]++;
            }
        }
        for (let video of watchedVideos[current]) {
            if (!(video in videosCount)) {
                videosCount[video] = 0;
            }
            videosCount[video]++;
        }
        return Object.keys(videosCount).sort((a, b) => {
            if (videosCount[a] === videosCount[b]) {
                return a.localeCompare(b);
            } else {
                return videosCount[a] - videosCount[b];
            }
        });
    }
    for (let friend of friends[current]) {
        if (!visited[friend]) {
            visited[friend] = true;
            queue.push([friend, currentLevel + 1]);
        }
    }
}
return [];
};