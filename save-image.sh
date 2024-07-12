#!/bin/bash

rm -rf /tmp/docker_cache
mkdir /tmp/docker_cache

docker pull elasticsearch:7.9.3

docker save elasticsearch:7.9.3 | gzip > /tmp/docker_cache/es7.tar.gz