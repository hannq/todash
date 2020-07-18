import devConfig from './index.dev';
import buildConfig from './index.build';

const ENV: string = process.env.RUNTIME_ENV;

const configMap = new Map([
  ['dev', devConfig],
  ['build', buildConfig],
]);

export default configMap.get(ENV);
