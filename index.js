import core from '@actions/core';
import github from '@actions/github';

try {
  const prNumber = github.context.payload.pull_request.number;
  const reviews = await github
    .getOctokit(process.env.GITHUB_TOKEN)
    .request('GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews', {
      ...github.context.repo,
      pull_number: prNumber,
    });

  core.setOutput(
    'approvals',
    reviews.data?.filter((r) => r.state === 'APPROVED')?.length ?? 0,
  );
} catch (error) {
  core.setFailed(error.message);
}
