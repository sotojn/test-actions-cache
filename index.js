import images from './images.js';
import { execa } from 'execa';

images('list')
images('load')

await execa`docker pull terascope/node-base:18.19.1`; 
await execa`docker pull terascope/node-base:20.11.1`; 
await execa`docker pull terascope/node-base:22.2.0`; 
console.log('Test complete!');