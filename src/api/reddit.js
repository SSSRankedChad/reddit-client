export const API_ROOT = "https://www.reddit.com/";

export const getSubredditPosts = async(subreddit) => {
    const response = await fetch `${API_ROOT}${subreddit}.json`
    const JSON = await response.json();

    return JSON.data.children.map((post) => post.data);
}

export const getPostComments = async(permalink) => {
    const response = await fetch `${API_ROOT}${permalink}.json`
    const JSON = await response.json();

    return JSON[1].data.children.map((subreddit) => subreddit.data);
}

export const getSubreddits = async() => {
    const response = await fetch `${API_ROOT}/subreddits.json`
    const JSON = await response.json();

    return JSON.data.children.map((subreddit) => subreddit.data);
}

