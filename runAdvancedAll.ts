import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';

const dir = './dist/3_Advanced';

fs.readdirSync(dir)
  .filter((file) => file.endsWith('.js'))
  .forEach((file) => {
    const filePath = path.join(dir, file);
    console.log(`Ejecutando ${filePath}...`);
    execSync(`node ${filePath}`, { stdio: 'inherit' });
  });
