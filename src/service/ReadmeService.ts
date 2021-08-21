import File from "../entities/File";


export default class ReadmeService {

    
    ejs = require('ejs');
    patch = require('path');
    readmeTemplate = new File("./template/", "README_TEMPLATE.md");
    newReadme = new File("./", "README_NEW.md");


    async getReadmeTemplate(): Promise<string> {
        return this.readmeTemplate.readFile();
    }

    async buildReadmeContent(context : Object) : Promise<string>{
      
      const template = await this.getReadmeTemplate();
      const readmeGenerated = await this.ejs.render(template, {
          ...context
        });
        return readmeGenerated;
    }
    async generateRedme(readmeTemplate : string){
      this.newReadme.writeFile(readmeTemplate);
    }

    
}

    /*= async templatePath => {
        const spinner = ora('Loading README template').start()
      
        try {
          const template = await promisify(fs.readFile)(templatePath, 'utf8')
          spinner.succeed('README template loaded')
          return template
        } catch (err) {
          spinner.fail('README template loading fail')
          throw err
        }
      }
*/
