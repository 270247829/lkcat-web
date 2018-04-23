import Env from './env';

let config = {
    env: Env,
    filePath: 'https://file.lkcatui.com/file/',
    version: 45,
    liveVersion: 1
};

if (config.env === 'development') {
    config.filePath = 'http://127.0.0.1:9800/overview/'
}

export default config;