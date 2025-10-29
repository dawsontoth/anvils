#!/usr/bin/env node
// login.js — collect Cluster URL, Username, and Password as simply as possible
// Accepted invocations (a single optional token):
//   1) login.js
//   2) login.js example.com           → URL provided
//   3) login.js user@example.com      → username provided (email)
//   4) login.js user:pass@example.com → username, password, and URL provided
//
// Persists to .env as:
//   CLI_TARGET
//   CLI_TARGET_USERNAME
//   CLI_TARGET_PASSWORD

import fs from 'node:fs/promises';
import path from 'node:path';
import readline from 'node:readline';

process.on('SIGINT', handleSigInt);

main().catch((err) => {
  console.error(err?.stack || String(err));
  process.exit(1);
});

async function main() {
  const { url: urlArg, username: userArg, password: passArg } = parseSingleArg(process.argv[2]);

  let url = normalizeUrl(urlArg || '');
  let username = userArg || '';
  let password = passArg || '';

  const rl = createInterface();
  try {
    console.log('https://fabric.harper.fast Cluster Login:');
    url = normalizeUrl(await ask(rl, 'Cluster URL', url));
    username = await ask(rl, 'Cluster Username', username);
    password = await askHidden(rl, 'Cluster Password', password);
  } finally {
    rl.close();
  }

  if (!url) {
    console.error('Error: Cluster URL is required.');
    process.exit(1);
  }
  if (!username) {
    console.error('Error: Cluster Username is required.');
    process.exit(1);
  }
  if (!password) {
    console.error('Error: Cluster Password is required.');
    process.exit(1);
  }

  const env = [
    `CLI_TARGET='${escapeSingleQuotes(url)}'`,
    `CLI_TARGET_USERNAME='${escapeSingleQuotes(username)}'`,
    `CLI_TARGET_PASSWORD='${escapeSingleQuotes(password)}'`,
    '',
  ].join('\n');

  const envPath = path.join(process.cwd(), '.env');
  try {
    await fs.writeFile(envPath, env, { mode: 0o400 });
  } catch {
    await fs.writeFile(envPath, env);
    await fs.chmod(envPath, 0o400).catch(() => {
    });
  }

  process.stdout.write(`Saved credentials to ${path.relative(process.cwd(), envPath)}\n`);
}

function createInterface() {
  return readline.createInterface({ input: process.stdin, output: process.stdout, terminal: true });
}

function ask(rl, question, existingValue = '') {
  if (existingValue) {
    return existingValue;
  }
  return new Promise((resolve) => rl.question(`${question}: `, (ans) => resolve(ans.trim() || existingValue)));
}

function askHidden(rl, question, existingValue = '') {
  if (existingValue) {
    return existingValue;
  }
  // Minimal hidden prompt by muting characters while typing
  const original = rl._writeToOutput; // eslint-disable-line no-underscore-dangle
  rl._writeToOutput = function write(str) { // mask everything except newlines
    if (this.stdoutMuted) {
      if (str.includes('\n')) this.output.write('\n');
      return; // swallow other chars
    }
    original.call(this, str);
  };
  return new Promise((resolve) => {
    console.log(`${question}: `);
    rl.stdoutMuted = true;
    rl.question(`${question}: `, (ans) => {
      rl.stdoutMuted = false;
      rl._writeToOutput = original; // restore
      resolve(ans.length ? ans : existingValue);
    });
  });
}

function parseSingleArg(token) {
  // Returns { url, username, password } (any may be undefined)
  if (!token) return {};
  const s = String(token).trim();
  const at = s.lastIndexOf('@');
  const colon = s.indexOf(':');
  const http = s.indexOf('http');

  // user:pass@host
  if (colon !== -1 && at !== -1 && colon < at) {
    return {
      username: s.slice(0, colon),
      password: s.slice(colon + 1, at),
      url: s.slice(at + 1),
    };
  }
  // user@https?://host
  if (at !== -1 && http !== -1) {
    return {
      username: s.slice(0, at),
      url: s.slice(at + 1),
    };
  }

  // If it contains '@' but not in user:pass@host or user@https?://host form → treat as username (email)
  if (at !== -1) {
    return { username: s };
  }

  // Otherwise treat it as URL/host
  return { url: s };
}

function normalizeUrl(u) {
  if (!u) {
    return '';
  }
  let s = String(u).trim();
  if (!s) {
    return '';
  }
  if (!/^https?:\/\//i.test(s)) {
    if (/^[\d.:$].test(s)/) {
      s = `http://${s}`;
    } else {
      s = `https://${s}`;
    }
  }
  if (!s.endsWith('/')) {
    s = s + '/';
  }
  return s;
}

function escapeSingleQuotes(v) {
  return String(v).replace(/'/g, '\'\\\'\'');
}

function handleSigInt() {
  process.stdout.write('\n');
  process.exit(130);
}
