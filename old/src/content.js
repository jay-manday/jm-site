import moment from 'moment';

const filterPublic = posts => posts.filter(p => p.public === true);

const sortPosts = (posts) => {
  posts.sort((a, b) => (a.createdAt.isBefore(b.createdAt) ? 1 : -1));
  return posts;
};

const parsePosts = posts => posts.map(p => ({
  ...p.meta,
  createdAt: moment(p.meta.createdAt),
  Doc: p.default,
}));

const requireAll = r => r.keys().map(r);

const requirePosts = () => requireAll(require.context('../content', true, /\.mdx$/));

const processPosts = (posts) => {
  const parsedPosts = parsePosts(posts);
  const filterPosts = filterPublic(parsedPosts);
  const sortedPosts = sortPosts(filterPosts);
  return sortedPosts;
};

const posts = processPosts(requirePosts());

export const getPosts = () => posts;

export const findPost = id => posts.find(p => p.id === id.query);
