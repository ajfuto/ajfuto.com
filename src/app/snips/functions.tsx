import path, { parse } from 'path';
import fs from 'fs';

type Metadata = {
  title: string,
  date: string,
  description: string
}

function parseMdxFile(fileContent: string) {
  let metadataRegex = /---\s*([\s\S]*?)\s*---/;
  let match = metadataRegex.exec(fileContent);

  let metadataBlock = match![1];
  let content = fileContent.replace(metadataRegex, '').trim();
  
  let metadataLines = metadataBlock.trim().split('\n');
  let metadata: Partial<Metadata> = {};

  metadataLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ');
    let value = valueArr.join(': ').trim();
    value = value.replace(/^['"](.*)['"]$/, '$1');
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
}

function getMdxFiles(dir: string) {
  let files = fs.readdirSync(dir)
  files = files.filter(file => file.endsWith('.mdx'))
  return files
}

function getMdxData(dir: string) {
  let files = getMdxFiles(dir)
  return files.map((file) => {
    let { metadata, content } = readMdxFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));
    return {
      metadata,
      slug,
      content,
    };
  });
}

function readMdxFile(file: string) {
  let content = fs.readFileSync(file, 'utf-8')
  return parseMdxFile(content)
}

export function getSnips() {
  return getMdxData('src/app/snips/content')
}