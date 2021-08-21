import { Controller, Post, Route } from "tsoa";

@Route("readme")
export class ReadmeController extends Controller{


    @Post()
    public async generateReadme(){

    }


}