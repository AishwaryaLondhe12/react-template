import MockAdapter from 'axios-mock-adapter';
import { getApiClient } from '@utils/apiUtils';
import { getRepos } from '../repoApi';

describe('RepoApi tests', () => {
  const artist = 'ajay';
  it('should make the api call to "/search/?term="', async () => {
    const mock = new MockAdapter(getApiClient().axiosInstance);
    const data = [
      {
        resultCount: 20
      }
    ];
    mock.onGet(`/search/?term=${artist}&entity=musicVideo`).reply(200, data);
    const res = await getRepos(artist);
    expect(res.data).toEqual(data);
  });
});
