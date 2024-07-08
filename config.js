import ip from 'ip';
import { kafkaVersionMapper } from './mapper.js';

export const HOST_IP = process.env.HOST_IP || ip.address();

export const ELASTICSEARCH_NAME = process.env.ELASTICSEARCH_NAME || 'elasticsearch';
export const ELASTICSEARCH_HOSTNAME = process.env.ELASTICSEARCH_HOSTNAME || HOST_IP;
export const ELASTICSEARCH_PORT = process.env.ELASTICSEARCH_PORT || '49200';
export const ELASTICSEARCH_HOST = `http://${ELASTICSEARCH_HOSTNAME}:${ELASTICSEARCH_PORT}`;
export const ELASTICSEARCH_VERSION = process.env.ELASTICSEARCH_VERSION || '6.8.6';
export const ELASTICSEARCH_DOCKER_IMAGE = process.env.ELASTICSEARCH_DOCKER_IMAGE || 'elasticsearch';

export const RESTRAINED_ELASTICSEARCH_PORT = process.env.RESTRAINED_ELASTICSEARCH_PORT || '49202';
export const RESTRAINED_ELASTICSEARCH_HOST = `http://${ELASTICSEARCH_HOSTNAME}:${RESTRAINED_ELASTICSEARCH_PORT}`;

export const KAFKA_NAME = process.env.KAFKA_NAME || 'kafka';
export const KAFKA_HOSTNAME = process.env.KAFKA_HOSTNAME || HOST_IP;
export const KAFKA_PORT = process.env.KAFKA_PORT || '49092';
export const KAFKA_BROKER = `${KAFKA_HOSTNAME}:${KAFKA_PORT}`;
export const KAFKA_VERSION = process.env.KAFKA_VERSION || '3.1';
// Use kafkaVersionMapper to determine confluentinc/cp-kafka image version from KAFKA_VERSION
export const KAFKA_IMAGE_VERSION = kafkaVersionMapper(KAFKA_VERSION);
export const KAFKA_DOCKER_IMAGE = process.env.KAFKA_DOCKER_IMAGE || 'confluentinc/cp-kafka';
// Zookeeper version needs to match KAFKA_IMAGE_VERSION which is determined by kafkaVersionMapper
export const ZOOKEEPER_VERSION = KAFKA_IMAGE_VERSION;
export const ZOOKEEPER_CLIENT_PORT = process.env.ZOOKEEPER_CLIENT_PORT || '42181';
export const ZOOKEEPER_TICK_TIME = process.env.ZOOKEEPER_TICK_TIME || '2000';
export const ZOOKEEPER_DOCKER_IMAGE = process.env.ZOOKEEPER_DOCKER_IMAGE || 'confluentinc/cp-zookeeper';
export const KAFKA_BROKER_ID = process.env.KAFKA_BROKER_ID || '1';
export const KAFKA_ZOOKEEPER_CONNECT = `${KAFKA_HOSTNAME}:${ZOOKEEPER_CLIENT_PORT}`;
export const KAFKA_LISTENERS = `INTERNAL://:${KAFKA_PORT}`;
export const KAFKA_ADVERTISED_LISTENERS = `INTERNAL://${KAFKA_HOSTNAME}:${KAFKA_PORT}`;
export const KAFKA_LISTENER_SECURITY_PROTOCOL_MAP = 'INTERNAL:PLAINTEXT';
export const KAFKA_INTER_BROKER_LISTENER_NAME = process.env.KAFKA_INTER_BROKER_LISTENER_NAME || 'INTERNAL';
export const KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR = process.env.KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR || '1';

export const MINIO_NAME = process.env.MINIO_NAME || 'minio';
export const MINIO_HOSTNAME = process.env.MINIO_HOSTNAME || HOST_IP;
export const MINIO_PORT = process.env.MINIO_PORT || '49000';
export const ENCRYPT_MINIO = process.env.ENCRYPT_MINIO ?? false;
export const MINIO_HOST = `http${ENCRYPT_MINIO ? 's' : ''}://${MINIO_HOSTNAME}:${MINIO_PORT}`;
export const MINIO_VERSION = process.env.MINIO_VERSION || 'RELEASE.2020-02-07T23-28-16Z';
export const MINIO_DOCKER_IMAGE = process.env.MINIO_DOCKER_IMAGE || 'minio/minio';
export const MINIO_ACCESS_KEY = process.env.MINIO_ACCESS_KEY || 'minioadmin';
export const MINIO_SECRET_KEY = process.env.MINIO_SECRET_KEY || 'minioadmin';

export const RABBITMQ_VERSION = process.env.RABBITMQ_VERSION || '3.8.16-management-alpine';
export const RABBITMQ_DOCKER_IMAGE = process.env.RABBITMQ_DOCKER_IMAGE || 'rabbitmq';
export const RABBITMQ_NAME = process.env.RABBITMQ_NAME || 'rabbitmq';
export const RABBITMQ_PORT = process.env.RABBITMQ_PORT || 45672;
export const RABBITMQ_MANAGEMENT_PORT = process.env.RABBITMQ_MANAGEMENT_PORT || 55672;
export const RABBITMQ_HOSTNAME = process.env.RABBITMQ_HOSTNAME || HOST_IP;
export const RABBITMQ_HOST = `http://${RABBITMQ_HOSTNAME}:${RABBITMQ_PORT}`;
export const RABBITMQ_MANAGEMENT = `http://${RABBITMQ_HOSTNAME}:${RABBITMQ_MANAGEMENT_PORT}`;

export const RABBITMQ_USER = process.env.RABBITMQ_USER || 'guest';
export const RABBITMQ_PASSWORD = process.env.RABBITMQ_PASSWORD || 'guest';

export const OPENSEARCH_NAME = process.env.OPENSEARCH_NAME || 'opensearch';
export const OPENSEARCH_HOSTNAME = process.env.OPENSEARCH_HOSTNAME || HOST_IP;
export const OPENSEARCH_PORT = process.env.OPENSEARCH_PORT || '49210';
export const OPENSEARCH_USER = process.env.OPENSEARCH_USER || 'admin';
export const OPENSEARCH_PASSWORD = process.env.OPENSEARCH_PASSWORD || 'admin';
export const OPENSEARCH_VERSION = process.env.OPENSEARCH_VERSION || '1.3.10';
export const OPENSEARCH_HOST = `http://${OPENSEARCH_USER}:${OPENSEARCH_PASSWORD}@${OPENSEARCH_HOSTNAME}:${OPENSEARCH_PORT}`;
export const OPENSEARCH_DOCKER_IMAGE = process.env.OPENSEARCH_DOCKER_IMAGE || 'opensearchproject/opensearch';