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

       console.log(request);
        const readmeGenerated = await service.buildReadmeContent(request);
        console.log(readmeGenerated);

        service.generateRedme(readmeGenerated);
    }


}