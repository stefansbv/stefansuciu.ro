---
date: 2015-06-05T20:01:10+03:00
draft: false
title: My First Module On CPAN
categories:
    - CPAN
    - Notes
---

I have reached another milestone today, I have released my first Perl
module distribution to CPAN:
[Business::RO::CIF](https://metacpan.org/release/Business-RO-CIF).

It is a simple module, for validating a Romanian CIF (Cod de
Identificare Fiscală) Tax Identification Code and it is complementary
to, and inspired from another module from the `Business::RO::` name
space,
[Business::RO::CNP](https://metacpan.org/release/Business-RO-CNP) by
Octavian Râșniță.

It is built around `Moo`, my recent favorite light-weight Object
Orientation system and `Types::Standard`.

The incentive for starting such a task was provided by [Árpád
Szász](http://www.plenum.ro/) a few months ago, when we discussed some
of the implementation details.

I hope this module will be usefull to someone.  Enjoy!
