import type { ChildProcess } from 'node:child_process';
import open from 'open';
import type { AppName } from 'open';

const NPM_LINK = 'https://www.npmjs.com' as const;
const NPM_PACKAGE_LINK = `${NPM_LINK}/package` as const;

/**
 * @public
 *
 * Open the npm link for the package
 * @param {string} packageName string
 * @param {string} browser string
 * @returns {any}
 */
export default async function (
  packageName?: string,
  browser?: AppName,
): Promise<ChildProcess> {
  const options = { app: { name: browser } };
  if (!packageName) {
    return await open(NPM_LINK, options);
  }
  const targetLink = `${NPM_PACKAGE_LINK}/${packageName}`;
  return await open(targetLink, options);
}
