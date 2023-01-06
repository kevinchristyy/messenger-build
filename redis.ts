import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL!)

export default redis;

"redis://default:bb69c99b6c6147c3ac72d93d60c01860@global-well-koi-31116.upstash.io:31116"