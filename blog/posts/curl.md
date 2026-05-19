# Curl

In this module, we will be sending web requests through two of the most important tools for any web penetration tester, a Web Browser, like Chrome or Firefox, and the `cURL` command line tool.

[cURL](https://curl.haxx.se/) (client URL) is a command-line tool and library that primarily supports HTTP along with many other protocols. This makes it a good candidate for scripts as well as automation, making it essential for sending various types of web requests from the command line, which is necessary for many types of web penetration tests.

We can send a basic HTTP request to any URL by using it as an argument for cURL, as follows:

```shellsession
0warn@htb[/htb]$ curl inlanefreight.com 
<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN"> 
<html><head> 
...SNIP...
```

We see that cURL does not render the HTML/JavaScript/CSS code, unlike a web browser, but prints it in its raw format. However, as penetration testers, we are mainly interested in the request and response context, which usually becomes much faster and more convenient than a web browser.

We may also use cURL to download a page or a file and output the content into a file using the `-O` flag. If we want to specify the output file name, we can use the `-o` flag and specify the name. Otherwise, we can use `-O` and cURL will use the remote file name, as follows:

```shellsession
0warn@htb[/htb]$ curl -O inlanefreight.com/index.html   
% Total    % Received % Xferd  Average Speed   Time    Time     Time  Current                                 Dload  Upload   Total   Spent    Left  Speed 100 464    0 464    0     0  17858      
0 --:--:-- --:--:-- --:--:-- 18069 
0warn@htb[/htb]$ ls 
index.html
```

As we can see, the output was not printed this time but rather saved into `index.html`. We noticed that cURL still printed some status while processing the request. We can silent the status with the `-s` flag, as follows:

```shellsession
0warn@htb[/htb]$ curl -s -O inlanefreight.com/index.html
```

This time, cURL did not print anything, as the output was saved into the `index.html` file. Finally, we may use the `-h` flag to see what other options we may use with cURL:

```shellsession
0warn@htb[/htb]$ curl -h Usage: curl [options...] <url>  
-d, --data <data>   HTTP POST data 
-h, --help <category> Get help for commands 
-i, --include       Include protocol response headers in the output 
-o, --output <file> Write to file instead of stdout 
-O, --remote-name   Write output to a file named as the remote file 
-s, --silent        Silent mode 
-u, --user <user:password> Server user and password 
-A, --user-agent <name> Send User-Agent <name> to server 
-v, --verbose       Make the operation more talkative This is not the full help, 

this menu is stripped into categories. Use "--help category" to get an overview of all categories. Use the user manual `man curl` or the "--help all" flag for all options.
```

As the above message mentions, we may use `--help all` to print a more detailed help menu, or `--help category` (e.g. `-h http`) to print the detailed help of a specific flag. If we ever need to read more detailed documentation, we can use `man curl` to view the full cURL manual page.

In the upcoming sections, we will cover most of the above flags and see where we should use each of them.
