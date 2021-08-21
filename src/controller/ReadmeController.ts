import { Controller, Post, Route, Body, SuccessResponse } from "tsoa";
import ReadmeRequest from '../model/ReadmeRequest';
import ReadmeService from "../service/ReadmeService";

@Route("readme")
export class ReadmeController extends Controller {

    readmeService = new ReadmeService();

    @SuccessResponse("201", "Created")
    @Post()
    public async generateReadme(@Body() request: ReadmeRequest): Promise<void> {
        const service = new ReadmeService();

        const context = {
            name: "Projeto Teste",
            description: "Essa é uma descrição do projeto",
            repository: "Esse é o repository do projeto",
            documentation: "https://www.google.com.br/",
            linkDemo: "https://www.google.com.br/",
            logoUrl: "https://t.ctcdn.com.br/I57q7__L1DbsBY-b47yZMXFPnjM=/filters:watermark(wm/v1.png,center,center,1,20)/i257633.jpeg",
            frameworks: [
                "Java", "Node"
            ]
        }
        const readmeGenerated = await service.buildReadmeContent(context);
        console.log(readmeGenerated);

        service.generateRedme(readmeGenerated);
    }


}