import * as prismic from '@prismicio/client';

const repositoryName = process.env.PRISMIC_REPOSITORY_NAME || '';
const accessToken = process.env.PRISMIC_ACCESS_TOKEN || '';

export function getPrismicClient() {
  const client = prismic.createClient(repositoryName, {
    accessToken,
  });

  return client;
}

