# Getting Help


Having established a solid foundation in Linux's structure, its various distributions, and the purpose of the shell, we're now prepared to put this knowledge into action. It's time to dive in, using commands directly in the terminal, as well as learning how to seek help when we encounter unfamiliar ones.

We will always stumble across tools whose optional parameters we do not know from memory or tools we have never seen before. Therefore it is vital to know how we can help ourselves to get familiar with those tools. The first two ways are the man pages and the help functions. It is always a good idea to familiarize ourselves with the tool we want to try first. We will also learn some possible tricks with some of the tools that we thought were not possible. In the man pages, we will find the detailed manuals with detailed explanations.

#### First Command:

```shellsession
0warn@htb[/htb]$ ls 
cacert.der  Documents  Music     Public     Videos Desktop     Downloads  Pictures  Templates
```

The `ls` command in Linux and Unix systems is used to list the files and directories within the current folder or any specified directory, allowing you to see what's inside and manage files more effectively. Like most Linux commands, `ls` comes with additional options and features that help you filter or format the output to display exactly what you want. To discover which options a tool or command offers, there are several ways to get help. One such method is using the `man` command, which displays the manual pages for commands and provides detailed information about their usage.

#### Syntax:

```shellsession
0warn@htb[/htb]$ man <tool>
```

Let us have a look at an example and get help for the `ls` command:

#### Example:

```shellsession
0warn@htb[/htb]$ man ls
```

```shellsession
LS(1)                                                                                            User Commands                                                                                            LS(1)  
  
NAME  
ls - list directory contents  
  
SYNOPSIS  
ls [OPTION]... [FILE]...  
  
DESCRIPTION  
List information about the FILEs (the current directory by default).  Sort entries alphabetically if none of -cftuvSUX nor --sort is specified.  
  
Mandatory arguments to long options are mandatory for short options too.  
  
-a, --all  
do not ignore entries starting with .  
  
-A, --almost-all  
do not list implied . and ..  
  
--author  
with -l, print the author of each file  
  
-b, --escape  
print C-style escapes for nongraphic characters  
  
--block-size=SIZE  
with -l, scale sizes by SIZE when printing them; e.g., '--block-size=M'; see SIZE format below  
  
-B, --ignore-backups  
do not list implied entries ending with ~  
  
-c     with -lt: sort by, and show, ctime (time of last change of file status information); with -l: show ctime and sort by name; otherwise: sort by ctime, newest first  
  
-C     list entries by columns  
  
--color[=WHEN]  
color the output WHEN; more info below  
  
-d, --directory  
list directories themselves, not their contents  
  
-D, --dired  
generate output designed for Emacs' dired mode  
  
-f     same as -a -U  
  
-F, --classify[=WHEN]
```

After looking at some examples, we can also quickly look at the optional parameters without browsing through the complete documentation. We have several ways to do that.

#### Syntax:

```shellsession
0warn@htb[/htb]$ <tool> --help
```

#### Example:

```shellsession
0warn@htb[/htb]$ ls --help
Usage:  
eza [options] [files...]  
  
META OPTIONS  
-?, --help                 show list of command-line options  
-v, --version              show version of eza  
  
DISPLAY OPTIONS  
-1, --oneline              display one entry per line  
-l, --long                 display extended file metadata as a table  
-G, --grid                 display entries as a grid (default)  
-x, --across               sort the grid across, rather than downwards  
-R, --recurse              recurse into directories  
-T, --tree                 recurse into directories as a tree  
-X, --dereference          dereference symbolic links when displaying information  
-F, --classify=WHEN        display type indicator by file names (always, auto, never)  
--colo[u]r=WHEN            when to use terminal colours (always, auto, never)  
--colo[u]r-scale           highlight levels of 'field' distinctly(all, age, size)  
--colo[u]r-scale-mode      use gradient or fixed colors in --color-scale (fixed, gradient)  
--icons=WHEN               when to display icons (always, auto, never)  
--no-quotes                don't quote file names with spaces  
--hyperlink                display entries as hyperlinks  
--absolute                 display entries with their absolute path (on, follow, off)  
--follow-symlinks          drill down into symbolic links that point to directories  
-w, --width COLS           set screen width in columns
```

Some tools or commands like `curl` provide a short version of help by using `-h` instead of `--help`:

#### Syntax:

```shellsession
0warn@htb[/htb]$ <tool> -h
```

#### Example:

```shellsession
0warn@htb[/htb]$ curl -h 
Usage: curl [options...] <url>  
-d, --data <data>            HTTP POST data  
-f, --fail                   Fail fast with no output on HTTP errors  
-I, --head                   Show document info only  
-H, --header <header/@file>  Pass custom header(s) to server  
-h, --help <subject>         Get help for commands  
-o, --output <file>          Write to file instead of stdout  
-O, --remote-name            Write output to file named as remote file  
-i, --show-headers           Show response headers in output  
-s, --silent                 Silent mode  
-T, --upload-file <file>     Transfer local FILE to destination  
-u, --user <user:password>   Server user and password  
-A, --user-agent <name>      Send User-Agent <name> to server  
-v, --verbose                Make the operation more talkative  
-V, --version                Show version number and quit  
  
This is not the full help; this menu is split into categories.  
Use "--help category" to get an overview of all categories, which are:  
auth, connection, curl, deprecated, dns, file, ftp, global, http, imap, ldap, output, pop3, post, proxy, scp, sftp, smtp, ssh, telnet, tftp, timeout, tls, upload, verbose.  
Use "--help all" to list all options
```


As we can see, the results from each other do not differ in this example. Another tool that can be useful in the beginning is `apropos`. Each manual page has a short description available within it. This tool searches the descriptions for instances of a given keyword.

#### Syntax:

```shellsession
0warn@htb[/htb]$ apropos <keyword>
```

#### Example:

```shellsession
0warn@htb[/htb]$ apropos sudo
cvtsudoers (1)       - convert between sudoers file formats  
sudo (8)             - execute a command as another user  
sudo.conf (5)        - configuration for sudo front-end  
sudo_logsrv.proto (5) - Sudo log server protocol  
sudo_logsrvd (8)     - sudo event and I/O log server  
sudo_logsrvd.conf (5) - configuration for sudo_logsrvd  
sudo_plugin (5)      - Sudo Plugin API  
sudo_sendlog (8)     - send sudo I/O log to log server  
sudoedit (8)         - execute a command as another user  
sudoers (5)          - default sudo security policy plugin  
sudoers.ldap (5)     - sudo LDAP configuration  
sudoers_timestamp (5) - Sudoers Time Stamp Format  
sudoreplay (8)       - replay sudo session logs  
visudo (8)           - edit the sudoers file
```
 
Another useful resource to get help if we have issues to understand a long command is: [https://explainshell.com/](https://explainshell.com/)

Next, we'll be covering a large number of commands, many of which may be new to you. However, you now know how to seek help with any command you’re unfamiliar with, or unsure about its options. Also, we highly encourage you to explore your curiosity, taking as much time as needed to tinker and experiment with the tools presented. It will always be time well spent.
