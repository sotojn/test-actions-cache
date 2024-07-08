import { execa } from "execa";
import got from 'got';

execa`docker run -d -p 9200:9200 -e "discovery.type=single-node" -e discovery.seed_hosts="localhost" elasticsearch:7.9.3`

let res;
let retry = true;
while (retry) {
    try {
        res = await got.get('http://localhost:9200')
        retry = false;
    } catch (e) {
        console.log('error: ', e.message)
    }
}
console.log("@@@ res: ", res.body)