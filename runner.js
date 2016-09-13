#!/usr/bin/env node

require('shelljs/global');
var path = require('path');
var program = require('commander');

REPOS = {
  'flask': 'https://github.com/jc4p/flask-gauth-skeleton',
  'react': 'https://github.com/jc4p/flask-react-skeleton'
};
REPOS_NAMES = Object.keys(REPOS);

program
  .version('0.0.1')
  .arguments('<skeleton> [folderName]')
  .action(function(skeleton, folderName) {
    desiredSkeleton = skeleton;
    desiredFolder = folderName;
  });

program.parse(process.argv);

if (typeof desiredSkeleton === 'undefined') {
  console.error('No skeleton specified. Please specify one of: ' + REPOS_NAMES.join(", "));
  process.exit(1);
} else if (REPOS_NAMES.indexOf(desiredSkeleton) === -1) {
  console.error("I don't know what " + desiredSkeleton + " is. Please specify one of: " + REPOS_NAMES.join(", "));
  process.exit(1);
}

if (!which('curl') || !which('tar')) {
  console.error("Sorry, this script requires curl and tar");
  process.exit(1);
}

// Ok let's do this. First things first, get a new tarball
tarballName = desiredSkeleton + ".tar.gz";
tarBallPath = "/tmp/" + tarballName;
exec("curl -sL " + REPOS[desiredSkeleton] + "/archive/master.tar.gz > " + tarBallPath);

// Now that we have the skeleton's tarball, we gotta extract it in the right place.
// first let's get the terminal's current path
outputPath = pwd().toString();
// then we add either the input folder name or the skeleton's name
outputPath = path.join(outputPath, desiredFolder ? desiredFolder : desiredSkeleton);

if (test('-d', outputPath)) {
  console.error("Output folder already exists, please specify a unique folder name");
  process.exit(1);
}

mkdir(outputPath);

// aaand extract into it!
// command structure: tar -xf [filename] -C [output_directory] [--strip to remove root folder]
exec("tar -xf " + tarBallPath + " -C " + outputPath + " --strip 1");
rm(tarBallPath);

console.log("All set! Don't forget to do a `git init` when you're ready!");