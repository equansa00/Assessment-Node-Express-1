const fs = require('fs').promises;
const axios = require('axios');
const url = require('url');

const downloadPage = async (pageUrl) => {
    try {
        const { data } = await axios.get(pageUrl);
        const hostname = new url.URL(pageUrl).hostname;
        await fs.writeFile(hostname, data);
        console.log(`Wrote to ${hostname}`);
    } catch (error) {
        console.log(`Couldn't download ${pageUrl}`);
    }
};

const processFile = async (filename) => {
    try {
        const data = await fs.readFile(filename, 'utf-8');
        const urls = data.trim().split('\n');

        // Downloading all at once
        await Promise.all(urls.map(downloadPage));
    } catch (error) {
        console.error('Error processing the file:', error.message);
    }
};

const filename = process.argv[2];
processFile(filename);
