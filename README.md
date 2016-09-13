# quickstart
CLI helper for me to start new projects from my own app skeletons

This is a npm module that facilitates quick cloning of my skeletons [flask-gauth-skeleton](https://github.com/jc4p/flask-gauth-skeleton) and [flask-react-skeleton](https://github.com/jc4p/flask-react-skeleton). It works as a npm global module which provides a new command `quickstart`.

For example:

>$ quickstart react my-new-react-project

>$ cd my-new-react-project

>$ echo "And that's it! Now I can code the real app logic, without any other work!"

It's built using [shelljs](https://github.com/shelljs/shelljs) for the nitty-gritty, and the amazing [commander.js](https://github.com/tj/commander.js/) for the parsing of command line arguments.

You may be thinking "Why not just do a `git clone` of your skeleton projects? You've already gone through all the trouble of making the skeletons" -- which is a very valid question and exactly what I used to do. However, when starting off from a template all I want is the template files, not the git history of all the states the files have been in past and present.

`quickstart` downloads the newest `master` branch tarball of my repo, extracts it into a folder, and that's it. This allows me to not have to deal with _any_ unnecessary obstacle between "Oooh, what if I could make a ${IDEA}" --> working on the idea.
