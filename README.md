# ShouldIT? Examples

Here are a few examples to get you up and running and have a taste of ShouldIT? and how it works 

## Requirements

+ Node.js
+ NPM
+ PHP

### Installation

```
git clone git@github.com:bbc-sport/ShouldIT-Examples.git
cd ShouldIT-Examples
sudo npm install -g grunt-cli
sudo npm install -g shouldit
npm install
```

In order to run the Ruby tests you will need Ruby and the Bundler Gem

## First Test Run

The first test is run automatically after install it uses a `grunt` command which is acting as an alias for `./node_modules/shouldit/bin/shouldit` however if you have installed `shouldit` globally you should only need to run

```
shouldit
```

On the first run you will see that All tests are yellow, meaning they have not yet been implemented.

## Feature Files

The feature files that the tests are bound to can be found in the `specs` directory.

## Running PHP Tests

Run `phpunit`

Then when you run `grunt` again you should see some of results from the PHPUnit tests have now turned green.

In order to isolate the `PHP unit tests` the feature file that corresponds to them is tagged with `> @php` meaning that you can get just this test output by running:

```
shouldit --tags=php
```

### Pending Specs

There is still one spec not yet implemented.

Try:

```
shouldit --tags=php --hint=php
```

This should now tell you the test you need to implement. Now fill in the the test in `tests/phpUnitExample.php` and these should all be green once you have run `phpunit` with the added passing test.

## Other languages

The same for PHP can be applied to JS and Ruby as below. 

### Running Javascript Tests

```
grunt karma
```

To isolate the Javascript tests with tag `javascript` try

```
shouldit --tags=javascript
```

### Running Ruby Tests

```
bundle install
rspec --format RspecJunitFormatter  --out rspec.xml tests/rspec.rb
```

To isolate the Ruby tests with tag `rspec` try

```
shouldit --tags=rspec
```
