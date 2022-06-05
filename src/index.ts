import { mkdirSync } from 'fs';
import inquirer, { Separator } from 'inquirer';
import open, { apps, openApp } from 'open';
import { resolve } from 'path';

function pathToCwd(relativePath: string) {
  return resolve(__dirname, relativePath);
}

function ensureDir(dir: string) {
  mkdirSync(dir, {
    recursive: true,
  });
  return dir;
}

function openFirefox() {
  const firefoxAddonUrl = 'https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere/';
  // ('🔥🦊 火狐浏览器建议直接使用这款浏览器插件:', firefoxAddonUrl);
  open(firefoxAddonUrl, {
    app: {
      name: 'firefox',
    },
  });
}

function openChromium(browser: 'chrome' | 'edge') {
  openApp(apps[browser], {
    newInstance: true,
    arguments: [
      '--args',
      '--disable-web-security',
      `--user-data-dir=${ensureDir(pathToCwd(`.opencross/${browser}`))}`,
    ],
  });
}

ensureDir(pathToCwd('.opencross'));

inquirer.prompt([
  {
    type: 'list',
    name: 'browser',
    message: '请选择浏览器',
    choices: [
      new Separator('-✨-🌛-🪐-'),
      ...Object.keys(apps).map((name) => ({ name })),
    ],
  },
]).then((anwser) => {
  if (anwser.browser === 'firefox') {
    return openFirefox();
  }

  return openChromium(anwser.browser);
}).catch((err) => {
  console.error(err);
});
