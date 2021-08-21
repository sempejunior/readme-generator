import File from "../entities/File";
import ReadmeRequest from "../model/ReadmeRequest";


export default class ReadmeService {
    
    ejs = require('ejs');
    patch = require('path');
    readmeTemplate = new File("./template/", "README_TEMPLATE.md");
    newReadme = new File("./", "README.md");

    async getReadmeTemplate(): Promise<string> {
        return this.readmeTemplate.readFile();
    }

    async buildReadmeContent(readmeRequest : ReadmeRequest) : Promise<string>{
      const template = await this.getReadmeTemplate();
      const readmeGenerated = await this.ejs.render(template, {
          ...readmeRequest
        });
        return readmeGenerated;
    }

    async generateRedme(readmeTemplate : string){
      this.newReadme.writeFile(readmeTemplate);
    }
}