import { HELLO } from '$env/static/private';
import { env } from '$env/dynamic/private';

console.log(HELLO, env.HELLO);
