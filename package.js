Package.describe({
    name: 'pfafman:moment-timezone',
    summary: 'Timezone support for moment.js, packaged for Meteor',
    version: '0.4.1',
    git: 'https://github.com/pfafman/meteor-moment-timezone'
});

Package.on_use(function (api, where) {
    var where = where || ['client', 'server'];
    var momentPackageName = !!Package.onUse ? "momentjs:moment@2.11.2" : "moment"
    
    api.use(momentPackageName, where);
    
    if (api.imply) {
        api.imply(momentPackageName, where);
    }
    
    api.add_files('pre.js', where);
    api.add_files('lib/moment-timezone-with-data.js', where);
    api.add_files('post.js', where);
});