import * as fs from 'fs';
import * as util from 'util'

export default class File {

  fileName: string;
  directory: string
  promiseWriteFile = util.promisify(fs.writeFile);
  promiseReadFile = util.promisify(fs.readFile);


  constructor(directory: string, fileName: string) {
    this.fileName = fileName;
    this.directory = directory;
  }

  async writeFile(readmeTemplate:string) {
    const path = require('path');
    const directoryPath = path.join(__dirname, "../../"+this.directory);
    console.log(directoryPath);
    await this.promiseWriteFile(directoryPath +"/"+  this.fileName, readmeTemplate)
  }

  async readFile() {
    const path = require('path');
    const directoryPath = path.resolve(__dirname, "../../"+this.directory);
    console.log(directoryPath);
    const file = await this.promiseReadFile(directoryPath +"/"+ this.fileName, { encoding: 'utf8' });
    return file;
  }
}