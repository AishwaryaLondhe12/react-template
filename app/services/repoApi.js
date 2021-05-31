import { generateApiClient } from '@utils/apiUtils';
const repoApi = generateApiClient('itunes');

export const getRepos = artist => repoApi.get(`/search/?term=${artist}&entity=musicVideo`);
