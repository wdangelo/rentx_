import fs from "fs";

import csvParse from "csv-parse";

class ImportCategoryUseCase {
    
    execute(file: Express.Multer.File) {

        const stream = fs.createReadStream(file.path);

        const parseFile = csvParse()

        stream.pipe(parseFile)

        parseFile.on("data", async (line: string) => {
            console.log(line)
        });
    }
}

export { ImportCategoryUseCase }