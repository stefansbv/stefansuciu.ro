---
date: 2016-01-28T16:11:28+02:00
title: Tpda3
sidebar: true
comment: false
weight: 2
categories:
- Projects
tags:
- perl
---

[Tpda3](https://sourceforge.net/projects/tpda/) is a classic desktop
database application framework and run-time, written in Perl.

<!--more-->


News
----

The old site on the *s2i2.ro* domain is closed, this is the new
temporary (I hope...) home for the Tpda3 project.

The latest release is v0.98.8 ([download
link](https://sourceforge.net/projects/tpda/files/latest/)).  It's a
bug-fix release and a kind of a anniversary - the release number *50* on
GitHub.


Description
-----------

The graphical user interface is based on PerlTk. There is also an
early, experimental, support for wxPerl.

Tpda3 should work on any OS where Perl and the required dependencies
can be installed, but currently it's only tested on Windows® XP/7 and
GNU/Linux.  Feedback and patches for other operating systems are
welcome.

True Rapid Application Development (RAD), the <a
href="https://github.com/stefansbv/Tpda3-Devel">Tpda3::Devel</a>
application module can be used to create a basic working application
in a few minutes.

Features:

- Simple and intuitive GUI;
- Powerful search;
- Report screens
- UTF-8 support;
- OS independent;
- Support for document generation from templates using *LaTeX*;
- [Report Manager](http://reportman.sourceforge.net/) integration;

Supported relational database management systems (*RDBMS*):

- [Firebird](http://www.firebirdsql.org/) (using *DBD::Firebird* or *DBD::ODBC*)
- [PostgreSQL](http://www.postgresql.org/)
- [SQLite](http://www.sqlite.org/)
- [CUBRID](http://www.cubrid.org/)

Adding support for any other *RDBMSs* that have a *Perl DBD* module or is
supported by *DBD::ODBC* is trivial.

Here are two screenshots of a custom application built with the Tpda3
framework.

{{% img src="/images/tpda3-persactiv-ecran-pa.png" class="aligncenter size-full" %}}

{{% img src="/images/tpda3-persactiv-ecran-cursuri.png" class="aligncenter size-full" %}}


Framework development
---------------------

The Tpda3 system is composed of the framework and runtime part and the
application part.

The framework and runtime part has three main functions:

 - Database interaction;
 - Configuration management;
 - Graphical user interface management;

The application part has two main components:

 - The screen modules;
 - The screen configuration files;

The development of the framework takes place currently on [GitHub](
https://github.com/stefansbv/Tpda3)


Application development
-----------------------

The steps required to create a new Tpda3 application are summarized
below.  Create a new Tpda3 Application Perl module.  Create a
configuration file for each table in the database that requires CRUD
operations and the corresponding screen.

A screen in TPDA terminology is a Perl module that creates a form in
the main window of the application with widgets bound to the fields of
the database table.

There is no documentation, yet, for these steps, but there is an
(experimental) application module that can be used to automate the
creation of a basic Tpda3 application:
[Tpda3::Devel](https://github.com/stefansbv/Tpda3-Devel).  The
README.md file in the module contains brief instructions for the
usage.
