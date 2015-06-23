# jQuery Walkthrough - Infinite Scrolling

This directory contains the starter code for a Rails project that consumes the Facebook graph API. 

## Walkthrough Objectives

 * Use jQuery to implement **manual pagination**
 * Use jQuery to implement **infinite scrolling**

## Setup

**Please copy this directory into your workspace first!**

Once copied over, run: 

```bash
bundle
figaro install
```

You'll then need to configure the `application.yml` file like such:

```yaml
facebook_client_id: <your id here>
facebook_secret: <your secret here>
```

Then launch Rails

```bash
rails s
```

## Background

Currently, the code spits out the personal feed of the OAuthed user via Facebook's graph API. It uses a gem called `koala` and some fancy pre-built templates I just finished writing this morning to do this.

The Facebook API allows us to perform pagination on their service, and we want to take advantage of that to add more content from the user's feed when they reach the bottom of the page.

We will first accomplish this using a "Load More" button with an AJAX request for more content, and then later refactor it to make it automatic via infinite scrolling.

## Buckle Up

It's party time!