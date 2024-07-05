import dotenv from "dotenv";
import axios from "axios";
dotenv.config()

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const REPOS = ['PR-Test-Repo','code-sapiens'];
const OWNER = 'Mahaveer1013'

const getPrData = async (req, res) => {
    try {
      const prData = [];
      for (const repo of REPOS) {
        const pullRequests = await fetchPullRequests(OWNER, repo);
        prData.push(...pullRequests);
      }
      res.status(200).json(prData);
    } catch (error) {
      handleError(res,error)
    }
}
  
const getRepoData = async (req, res) => {
    try {
      const repoDetails = [];
      for (const repo of REPOS) {
        const repoRequests = await fetchRepoDetails(OWNER, repo);
        // console.log(repoRequests);
        repoDetails.push(repoRequests);
      }
      res.status(200).json(repoDetails);
    } catch (error) {
      handleError(res, error);
    }
}


async function fetchRepoDetails(owner, repo) {
    const pullRequests = await fetchPullRequests(owner, repo);
    const totalPR = pullRequests.length;
    const PrMerged = pullRequests.filter(pr => pr.merged_at).length;
    const PrPending = totalPR - PrMerged; // Calculating pending PRs

    // Fetch repository details (creator name)
    const repoDetails = await fetchRepositoryDetails(owner, repo);
    const creatorName = repoDetails.owner.login;

    return {
        repoName: repo,
        creatorName,
        totalPR: totalPR.toString(),
        PrMerged: PrMerged.toString(),
        PrPending: PrPending.toString()
    };
}

// Function to fetch all pull requests for a specific repository
async function fetchPullRequests(owner, repo) {
    const url = `https://api.github.com/repos/${owner}/${repo}/pulls?state=all`;
    const headers = {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
    };

    try {
        const response = await axios.get(url, { headers });
        const transformedData = response.data.map(pr => ({
            img: pr.user.avatar_url,
            repoName: repo,
            prId: pr.id,
          title: pr.title,
            name: pr.name,
            requesterName: pr.user.login,
            requestedTime: new Date(pr.created_at).toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'medium' }),
            prStatus: pr.merged_at ? 'Merged' : 'Pending',
            htmlUrl: pr.html_url
          }));
        return transformedData;
    } catch (error) {
        console.error(`Error fetching pull requests for repo ${repo}:`, error);
        throw error;
    }
}

// Function to fetch repository details
async function fetchRepositoryDetails(owner, repo) {
    const url = `https://api.github.com/repos/${owner}/${repo}`;
    const headers = {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
    };

    try {
        const response = await axios.get(url, { headers });
        return response.data;
    } catch (error) {
        console.error(`Error fetching repository details for repo ${repo}:`, error);
        throw error;
    }
}

export {getPrData,getRepoData}
