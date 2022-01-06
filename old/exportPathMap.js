const path = require('path');
const fs = require('fs');

const contentDir = path.join(__dirname, './content');

const getContentFiles = () => new Promise((resolve, reject) => {
  fs.readdir(contentDir, (err, res) => {
    if (err) {
      return reject(err);
    }
    return resolve(res);
  });
});


const parseFileNames = files => files
  .map((f) => {
    const parsedFilename = path.parse(f);
    return {
      name: parsedFilename.name,
      ext: parsedFilename.ext,
    };
  });


const filterFiles = files => files.filter(f => f.ext === '.mdx');

const generatePathMap = files => files.reduce((acc, f) => {
  acc[`/work/${f.name}.html`] = {
    page: '/work',
    query: { id: f.name },
  };

  return acc;
}, {});


const generatePostsPathMap = async () => {
  const files = await getContentFiles();
  const parsedFiles = parseFileNames(files);
  const filteredFiles = filterFiles(parsedFiles);
  return generatePathMap(filteredFiles);
};

const exportPathMap = async () => {
  const postsPathMap = await generatePostsPathMap();
  return {
    '/': {
      page: '/',
    },
    ...postsPathMap,
  };
};

module.exports = exportPathMap;
