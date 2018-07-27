# crunch-diff
Image (screenshot) comparison tool built on top of [yahoo/blink-diff](https://github.com/yahoo/blink-diff)

Run `docker-compose up --scale chrome=1` to start the service.

Run `./node_modules/.bin/nightwatch [test]` such as `tests/contently/portfolio.js` to run specs.

Run change the path S3 will upload to with current branch name `json -I -f loginCredentials.json -e 'this.branch="[your_branch_name]"'`
