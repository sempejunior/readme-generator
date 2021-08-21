import File from "../entities/File";
import FileService from "../service/ReadmeService";

// test("Should calculate the area of circle", function () {
//     const file = new File("./","teste.txt");
//     file.writeFile();
// });


/**
 * 1- Buscar o template
 * 2- Gerar o content
 * 3- Inserir content no template
 * 4- Gerar arquivo
 */

test("Find template readme", async function () {
//     const file = new File("","README_TESTE.MD");
//     const service = new FileService();

//     const context = {
//         name: "Projeto Teste",
//         description: "Essa é uma descrição do projeto",
//         repository: "Esse é o repository do projeto",
//         documentation: "https://www.google.com.br/",
//         linkDemo:"https://www.google.com.br/",
//         logoUrl: "https://t.ctcdn.com.br/I57q7__L1DbsBY-b47yZMXFPnjM=/filters:watermark(wm/v1.png,center,center,1,20)/i257633.jpeg",
//         frameworks: [
//             "Java","Node"
//         ]
//     }
//    const readmeGenerated = await service.buildReadmeContent(context);
//    console.log(readmeGenerated);

//    service.generateRedme(readmeGenerated);
//    expect(readmeGenerated).toMatchSnapshot();
});