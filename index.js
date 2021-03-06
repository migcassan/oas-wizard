
//Based on : https://scotch.io/tutorials/build-an-interactive-command-line-application-with-nodejs

const program = require('commander');
const package = require('./package.json');

const { createOAS } = require('./commands.js');

program
    .version(package.version)
    .description(package.name + ": " + package.description);

program
    .usage('<OpenAPISpecFile.yaml> <ResourceSample.yaml> <ResourceName> <IdPropertyName>')
    .arguments('<oasFileName> <ResourceSampleFileName> <resourceName> <idPropertyName>')
    .action((oasFileName, ResourceSampleFileName, resourceName, idPropertyName) => {
        createOAS(oasFileName, ResourceSampleFileName, resourceName, idPropertyName);
    });


program.parse(process.argv);