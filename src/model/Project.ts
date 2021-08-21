export default class Project {

    name: string;
    description: string;
    repository: string;
    documentation: string;
    linkDemo: string;
    logoUrl: string;
    frameworks: string[];


    constructor(name: string, description: string, repository: string, documentation: string,
        linkDemo: string, logoUrl: string,frameworks: string[]) {
    
            this.name = name;
            this.description = description;
            this.repository= repository;
            this.documentation= documentation;
            this.linkDemo = linkDemo;
            this.logoUrl = logoUrl;
            this.frameworks = frameworks;
    }

}