---
comment: true
date: 2015-12-14T12:09:52+02:00
description: Planned Copy (plcp) - another tool from my toolbox
draft: false
categories:
- Projects
tags:
- perl
- tools
title: The PlannedCopy Application
---

PlannedCopy (plcp) is another tool from my toolbox, an automated copy
utility for Linux.

<!--more-->

This is my solution for the task of managing configuration files,
scripts and other files that need to be copied around, changed and
stored in a safe place.

The idea behind the application is simple, but the implementation is
quite complicated... :).  I keep my configuration files, like many
others do, in a Git repository.  The task is to install this files to
the places where they belong to, as automated as possible.

A minimal Git repository in `/home/darkstar/configs` looks like this:

```
.
├── emacs
│   ├── custom.el
│   ├── init.el
│   └── resource.yml
├── kde
│   ├── Shell.profile
│   └── resource.yml
├── linux
│   ├── ackrc
│   ├── bash_alias
│   ├── bash_profile
│   ├── bash_prompt
│   ├── bashrc
│   └── resource.yml
└── system
    ├── rc.firebird
    ├── rc.postgresql
    └── resource.yml
```

A `project` is a subdirectory under the root of the repository.  In
the example above there are three so called `projects`: emacs, kde,
linux and system.

The application uses a configuration file named `resource.yml` in each
project directory with the following information:

For example, an item in the `resource.yml` file looks line this:

```YAML
---
resources:
  -
    destination:
      name: .ackrc
      path: '~/'
      perm: 0644
    source:
      name: ackrc
      path: linux
```

The `plcp install linux` command will copy and rename the
`linux/ackrc` file to `/home/user/.ackrc` and will set the permissions
to `0644`.

The `resource.yml` configuration file is automatically
generated/updated by the `plcp resu linux` command, but the
destination path is initially undefined and have to be edited manually
for every record.


Features
--------

The features and also the commands of the application are:

The main commands:

 - install - Install the files (copy files and set permissions);
 - sync    - Synchronize the configuration files - copy back to the repository;
 - check   - Compare the repository files with the installed versions;

Additional helper and info commands:

 - config  - Configure the application;
 - repo    - Manage the repository (clone only for now);
 - resu    - Manage the resource config files (create/update);
 - diff    - Run a diff utility on the repo files and the installed versions;
 - list    - Print a list of the projects in the repository;
 - version - Print the current version;

The `install` and `sync` commands take an optional file name used for
limiting the command to that specific file.  The

Another feature, in the devel branch, is an optional project parameter
for the `list` command, to print the files in the directory.


Quick Usage
-----------

The initial configuration of `plcp`:

```
$ plcp config set --url ssh://user@host/path/git-repos/configs.git
$ plcp config set --path /home/user/configs
```

Clone the repository in the HOME dir:

```
$ plcp repo clone
```

Add/update the `resource.yml` file in the `emacs` directory using:

```
$ plcp resu emacs
```

Edit the `emacs/resource.yml` file and set the destination path for
all the items.

Finally install the files with:

```
$ plcp install emacs
```

The project is "work in progress" on
[GitHub](https://github.com/stefansbv/planned-copy) and is open
source.  I use it almost every day, but has a few known bugs and
probably many unknown bugs.
