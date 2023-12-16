import yaml from 'js-yaml';
import { readFileSync } from 'fs';

export const swaggerDoc = yaml.load(readFileSync('./src/openapi/openapi.yml', 'utf8'));