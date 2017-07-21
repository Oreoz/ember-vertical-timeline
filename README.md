# Ember Vertical Timeline

[![NPM Version](https://badge.fury.io/js/ember-vertical-timeline.svg)](https://badge.fury.io/js/ember-vertical-timeline)
[![Ember Observer Score](https://emberobserver.com/badges/ember-vertical-timeline.svg)](https://emberobserver.com/addons/ember-vertical-timeline)
[![Build Status](https://travis-ci.org/Oreoz/ember-vertical-timeline.svg?branch=master)](https://travis-ci.org/Oreoz/ember-vertical-timeline)
[![Code Climate](https://codeclimate.com/github/Oreoz/ember-vertical-timeline/badges/gpa.svg)](https://codeclimate.com/github/Oreoz/ember-vertical-timeline)

## Description

This addon is meant to be a simple Ember wrapper of the great vertical timeline initially created by the people over at [CodyHouse](https://codyhouse.co/gem/vertical-timeline/)!

## Installation

Like most ember addons, simply run `ember install ember-vertical-timeline` and you should be all set!

If you want to include the basic styles for the components in your application; just add `@import "ember-vertical-timeline";` to your application's Sass stylesheet. Try out [ember-cli-sass](https://github.com/aexmachina/ember-cli-sass) if you are not already using Sass in your application.

## Docs

Here's how you would go about creating a simple timeline:

```hbs
{{#vertical-timeline as |timeline|}}

  {{#timeline.block as |block|}}
    {{block.image}}

    {{#block.content as |content|}}

      [[Whatever you want to display inside of the timeline block.]]

      {{#content.date}}Jun 28{{/content.date}}
    {{/block.content}}
  {{/timeline.block}}

  [[More blocks would go here]]

{{/vertical-timeline}}

```

## Contributions
Any contribution is more than welcomed. If you plan on introducing a new feature, please open an issue and share your idea prior to implementing it, it could save you precious time!

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

## Troubleshooting
If something is not working as expected, simply open an issue and we'll discuss how we'll go about fixing it!

## Credits
Once again, the [initial timeline](https://codyhouse.co/gem/vertical-timeline/) was created by the people over at [CodyHouse](https://codyhouse.co)!
