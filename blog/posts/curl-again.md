# Curl Again

In our earlier examples with cURL, we only specified the URL and got the response body in return. However, cURL also allows us to preview the full HTTP request and the full HTTP response, which can become very handy when performing web penetration tests or writing exploits. To view the full HTTP request and response, we can simply add the `-v` verbose flag to our earlier commands, and it should print both the request and response:

```shellsession
0warn@htb[/htb]$ curl inlanefreight.com -v
 *   Trying SERVER_IP:80... * 
TCP_NODELAY set * Connected to inlanefreight.com (SERVER_IP) port 80 (#0) 
> GET / HTTP/1.1 
> Host: inlanefreight.com 
> User-Agent: curl/7.65.3 > Accept: */* 
> Connection: close 
>  * Mark bundle as not supporting multiuse 
< HTTP/1.1 401 Unauthorized 
< Date: Tue, 21 Jul 2020 05:20:15 GMT 
< Server: Apache/X.Y.ZZ (Ubuntu) 
< WWW-Authenticate: Basic realm="Restricted Content" 
< Content-Length: 464 < Content-Type: text/html; charset=iso-8859-1 
<  <!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN"> 
<html><head> 
...SNIP...
```

As we can see, this time, we get the full HTTP request and response. The request simply sent `GET / HTTP/1.1` along with the `Host`, `User-Agent` and `Accept` headers. In return, the HTTP response contained the `HTTP/1.1 401 Unauthorized`, which indicates that we do not have access over the requested resource, as we will see in an upcoming section. Similar to the request, the response also contained several headers sent by the server, including `Date`, `Content-Length`, and `Content-Type`. Finally, the response contained the response body in HTML, which is the same one we received earlier when using cURL without the `-v` flag.

**Exercise:** The `-vvv` flag shows an even more verbose output. Try to use this flag to see what extra request and response details get displayed with it.