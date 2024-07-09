import { execa } from 'execa';

const pull1 = await execa`docker pull terascope/node-base:18.19.1`; 
const pull2 = await execa`docker pull terascope/node-base:20.11.1`; 
const pull3 = await execa`docker pull terascope/node-base:22.2.0`; 

console.log('@@@@ pull1: ', pull1)
console.log('@@@@ pull2: ', pull2)
console.log('@@@@ pull3: ', pull3)