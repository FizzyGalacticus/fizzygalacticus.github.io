'use strict';

const tasks = (...arr) => arr.reduce((acc, o) => [...acc, ...(Array.isArray(o) ? o : [o])], []).join(' && ');

const files = ['sitemap.xml', 'index.xml', 'index.html', '404.html'];

const directories = ['about', 'assets', 'categories', 'img', 'page', 'posts', 'tags'];

module.exports = {
    hooks: {
        'pre-commit': tasks([
            `npm run build`,
            ...directories.map(dir => `git add $(find ${dir})`),
            ...files.map(f => `git add "${f}"`)
        ]),
    }
};