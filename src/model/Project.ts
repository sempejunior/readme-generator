import { Command } from "./Command";
import { Framework } from "./Framework";

export interface Project {

    name: string;
    description: string;
    repository: string;
    documentation: string;
    logoUrl: string;
    prerequisites: Command[];
    usages: Command[];
    frameworks: Framework[];
}