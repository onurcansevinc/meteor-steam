Package.describe({
  name: '1life1chance:steam',
  version: '2.5.1',
  summary: 'Steam OpenID integration for Meteor',
  git: 'https://github.com/onurcansevinc/meteor-steam',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('2.5.1');

  api.use('oauth2', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('http@1.0.0', 'server');
  api.use('underscore', 'server');
  api.use('templating@1.0.0', 'client');
  api.use('random', 'client');
  api.use('service-configuration', 'client');

  api.export('Steam');

  api.addFiles(['steam_configure.html', 'steam_configure.js'], 'client');

  api.addFiles('steam_server.js', 'server');
  api.addFiles('steam_client.js', 'client');
});
