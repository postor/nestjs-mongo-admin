import path from 'path';
import { Plugin } from 'vite';
import getCode from './loader-get-code'; // Import the existing loader function

interface AutoRoutePluginOptions {
  root?: string;
  skip?: RegExp;
  extension?: string;
  getRoutesFile?: RegExp; // Added option
}

const virtualModuleId = '@auto-react-routes';

export default function AutoRoutePlugin(options: AutoRoutePluginOptions = {}): Plugin {
  const resolvedOptions = {
    root: options.root || './src/pages',
    skip: options.skip || /^\$/,
    extension: options.extension || '.tsx',
    getRoutesFile: options.getRoutesFile || /get-routes\.js/, // Default to get-routes.js
  };

  return {
    name: 'auto-route',
    // resolveId(id: string) {
    //   console.log({resolveId:id})
    //   return id
    // },
    async load(id: string) {
      // console.log({load:id})
      // Check if the ID matches the specified pattern
      if (resolvedOptions.getRoutesFile.test(id)) {
        const root = path.join(process.cwd(), resolvedOptions.root); // Absolute path
        const code = await getCode(root, resolvedOptions.skip, resolvedOptions.extension, id);
        return code;
      }
    },
  };
}

