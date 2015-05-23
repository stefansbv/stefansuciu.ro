---
date: 2015-05-23T15:12:11+03:00
draft: true
title: Sqitch GUI development
categories:
    - sqitch-gui
    - wxPerl
    - notes
---

I'm experimenting this days with a project to make a GUI for the
excellent [Sqitch](http://sqitch.org) database change management
application.  I started the project some time ago, and because lately
it got some attention from the author of Sqitch - [David
E. Wheeler](https://github.com/theory), I was stimulated to continue
working on it.

Sqitch was first written in Perl
[Moose](https://metacpan.org/pod/Moose) as initially was my [Sqitch
GUI](https://github.com/stefansbv/sqitch-gui) interface, but it was
rewritten in [Moo](https://metacpan.org/pod/Moo) lately.

David suggested that I should also use Moo, so now as I write this, all
the GUI part uses Moo already (in the devel branch), and works quite
nicely with the exception of the wxPerl Menu component.

The translation to Moo was quite easy because Moo and Moose are
compatible, but involved the heavy usage of my Emacs editor.  One of
the tricky parts was with the type system, but that was already solved
by David and I could easily adapt the Type module from Sqitch.  The
other tricky part was making Moo and wxPerl understand each other.
For the Moose version I used the MooseX::NonMoose::InsideOut module
and while switching to Moo I experimented with the MooX::InsideOut
module.

All was working well until I was rewriting a bigger part of the
application when I started getting some strange errors.  While looking
on the Net for solutions it turned out that it doesn't even need such
a module, Moo already has a FOREIGNBUILDARGS method, thanks to
[tobyink](http://stackoverflow.com/questions/27544191/what-is-an-equivalent-of-moosexnonmoose-for-moo)
for the enlightening response on stackowerflow.com.
