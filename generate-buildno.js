var process= require('process');
var fs = require('fs');
var version=process.argv[2];
fs.readFile('src/metadata.json',function(err,content) {
    if (err) throw err;
    var metadata = JSON.parse(content);
    metadata.buildTagRevision = metadata.buildTagRevision + 1;
    fs.writeFile('src/metadata.json',
        JSON.stringify(metadata),
        function(err) {
            if (err) throw err;
            console.log(
                `Current build number: ${metadata.buildMajor}.${metadata.buildMinor}.${metadata.buildRevision}.${metadata.buildTagRevision}`);
        });
    fs.writeFile('public/meta.json',
        `{"version":"${metadata.buildMajor}.${metadata.buildMinor}.${metadata.buildRevision}.${metadata.buildTagRevision}"}`,
        function(err) {
            if (err) throw err;
        });
});