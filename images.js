import fse from 'fs-extra';
import path from 'node:path';
import * as config from './config.js';
// import { ImagesAction } from './interfaces';

export default async function images(action) {
    if (action === 'list') {
        return createImageList('./images');
    }
    // if (action === ImagesAction.Load) {
    //     return loadImages();
    // }
}

/**
 * Builds a list of all docker images needed for the teraslice CI pipeline
 * @returns Record<string, string>
 */
async function createImageList(imagesPath) {
    const list = 'terascope/node-base:18.19.2\n'
               + 'terascope/node-base:20.11.1\n'
               + 'terascope/node-base:22.2.0\n'
               + `${config.ELASTICSEARCH_DOCKER_IMAGE}:6.8.6\n`
               + `${config.ELASTICSEARCH_DOCKER_IMAGE}:7.9.3\n`
               + `${config.OPENSEARCH_DOCKER_IMAGE}:1.3.10\n`
               + `${config.OPENSEARCH_DOCKER_IMAGE}:2.8.0\n`
               + `${config.KAFKA_DOCKER_IMAGE}:3.1\n`
               + `${config.ZOOKEEPER_DOCKER_IMAGE}:3.1\n`
               + `${config.MINIO_DOCKER_IMAGE}:RELEASE.2020-02-07T23-28-16Z\n`;
    if (!fse.existsSync(imagesPath)) {
        await fse.emptyDir(imagesPath);
    }
    fse.writeFileSync(path.join(imagesPath, 'image-list.txt'), list);
}

// function loadImages(): void {
//     return;
// }

// const list = {
//     baseDockerImageNode18: 'terascope/node-base:18.19.1',
//     baseDockerImageNode20: 'terascope/node-base:20.11.1',
//     baseDockerImageNode22: 'terascope/node-base:22.2.0',
//     elasticsearch6: `${config.ELASTICSEARCH_DOCKER_IMAGE}:6.8.6`,
//     elasticsearch7: `${config.ELASTICSEARCH_DOCKER_IMAGE}:7.9.3`,
//     opensearch: `${config.OPENSEARCH_DOCKER_IMAGE}:1.3.10`,
//     opensearch2: `${config.OPENSEARCH_DOCKER_IMAGE}:2.8.0`,
//     kafka: `${config.KAFKA_DOCKER_IMAGE}:3.1`,
//     zookeeper: `${config.ZOOKEEPER_DOCKER_IMAGE}:3.1`,
//     minio: `${config.MINIO_DOCKER_IMAGE}:RELEASE.2020-02-07T23-28-16Z`,
// };
