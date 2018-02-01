var Metalsmith = require('metalsmith');
var Handlebars = require('Handlebars');
var assets = require('metalsmith-assets');
var fs = require('fs');
var path = require('path');
var glob = require('glob');

Metalsmith(__dirname)
    .source('./examples')
    .destination('./build')
    .ignore('**/.*')
    .use(function (examples, metalsmith, done){
        glob('partials/*', function (err, files){
            if (err) {return done(err);}
            files.forEach(function(file) {
                var name = path.basename(file, '.handlebars');
                Handlebars.registerPartial(name, fs.readFileSync(file, 'utf8'))
            });
            glob('pages/*', function (err, templates) {
                templates.forEach(function(templateFile) {
                    var contents = fs.readFileSync(templateFile, 'utf8');
                    var template = Handlebars.compile(contents);
                    var data = {
                        examples: Object.keys(examples).map(function (key) {
                            return examples[key];
                        })
                    };
                    var result = template(data);
                    fs.writeFileSync(
                        path.join(
                            metalsmith._destination,
                            path.basename(templateFile, '.handlebars') + '.html'
                        ),
                        result
                    )
                });
                done();
            });
        })
    })
    .use(assets({
        source: 'js',
        destination: 'js'
    }))
    .use(assets({
        source: 'Styling',
        destination: 'Styling'
    }))
    .use(assets({
        source: 'bootstrap-3.3.7-dist',
        destination: 'bootstrap-3.3.7-dist'
    }))
    .use(assets({
        source: 'Assets',
        destination: 'Assets'
    }))
    .build(function (err) {
        // For error handling
        if (err) {
            throw err;
        }
    });
