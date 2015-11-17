---
date: 2015-11-16T13:34:03+02:00
title: The data Transfer application
description: Transfer - an application for transforming and transferring data
comment: true
draft: false
categories:
- Projects
tags:
- perl
- firebird
- postgresql
- csv
- xls
---

This is an introductory article about my (relatively) new open source
command line application named *Transfer*.

*Transfer* is about transforming and transferring data between files and
databases using recipes.

<!--more-->

I always wanted to be able to make some transformation to data as
easily as possible, and of course there are many software application
suitable for this task, generically named ETL (Extract, Transform and
Load).  One of the applications that I liked most is Pentaho Data
Integration
([Kettle](http://community.pentaho.com/projects/data-integration/)),
but implementing a simpler custom solution was a long time desire.

So, this is my solution for the problem, and of course is suitable for
my current needs, that involves small datasets kept in various
formats.

The concept is simple, read a data table from a source, row by row,
optionally make some transformations on it, and transfer it to the
destination table.  The required definitions of the transformations
are hold in configurations files named `recipes`.


Features:

- easily extensible multi database support (currently: Firebird and PostgreSQL);
- file (.csv and .xls) and database input readers;
- database output writer;
- plug-in system for simple data transformations;

## Concepts

### The Recipe ###

The recipe is a file in Apache format (parsed with the Config::General
Perl module) and describes the source and the destination and how to
transform the data.  Transformations are made using plugins.

The simplest recipe defines only the source, the destination and the
mapping for the fields from the source with those of the destination.

In this example the structure of the source and destination tables is
identical, but the role of the `headermap` configuration is to allow
mapping fields with different names - a rename field transformation.


```
# Transformation recipe
<recipe>
  version               = 1
  syntaxversion         = 1
  name                  = Copy table
  description           = Users data from db1_prod to db1_dev
</recipe>

<config>
  <source>
    reader              = db
    target              = db1_prod
    table               = users
  </source>

  <destination>
    writer              = db
    target              = db1_dev
    table               = users
  </destination>
</config>

<tables>
  <table users>
    description         = Users table
    logfield            =
    <headermap>
      user_id           = user_id
      name              = name
      dep_id            = dep_id
    </headermap>
  </table>
</tables>

<transform column/>

<transform row/>
```

### Plugins ###

A `plugin` is a Perl module specialized to make simple transformations.
It receives a hash reference containing info about the field (and some
extra info needed for logging) and the current value.  Transforms the
value using Perl functions and returns the new value.  Plugin
functions can be chained together to make complex transformations.

The `transform column` and `transform row` sections of the `recipe`
uses plugins to make column and row transformations.


## Conclusion ##

This is the introductory article about my *Transfer* application -
transforming and transferring data between files and databases using
recipes.  More elaborate examples will be presented in my next article
on the subject.

The source code is on GitHub: https://github.com/stefansbv/transfer

Comments on the subject are welcome, but will be moderated, of course ;)


## Acknowledgements ##

Some concepts, blocks of code and even entire modules, comments and
documentation are borrowed and/or inspired from the excellent
[Sqitch](https://github.com/theory/sqitch) project by @theory.  Thank
you!
