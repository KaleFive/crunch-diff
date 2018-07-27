# crunch-diff
Image (screenshot) comparison tool built on top of [yahoo/blink-diff](https://github.com/yahoo/blink-diff)

Run `docker-compose up --scale chrome=1` to start the service.

Run `./node_modules/.bin/nightwatch [test]` such as `tests/contently/portfolio.js` to run specs.

Set the current branch name into your variables.json file `json -I -f variables.json -e 'this.branch="[your_branch_name]"'`.
This will inform your visual regression tests on where in S3 to upload your screenshots.
