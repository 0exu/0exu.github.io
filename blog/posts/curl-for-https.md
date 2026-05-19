# Curl For Https

cURL should automatically handle all HTTPS communication standards and perform a secure handshake and then encrypt and decrypt data automatically. However, if we ever contact a website with an invalid SSL certificate or an outdated one, then cURL by default would not proceed with the communication to protect against the earlier mentioned MITM attacks:

```shellsession
0warn@htb[/htb]$ curl https://inlanefreight.com curl
: (60) SSL certificate problem: 
Invalid certificate chain More details here: https://curl.haxx.se/docs/sslcerts.html ...SNIP...
```

Modern web browsers would do the same, warning the user against visiting a website with an invalid SSL certificate.

We may face such an issue when testing a local web application or with a web application hosted for practice purposes, as such web applications may not yet have implemented a valid SSL certificate. To skip the certificate check with cURL, we can use the `-k` flag:

```shellsession
0warn@htb[/htb]$ curl -k https://www.inlanefreight.com 
<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN"> 
<html><head> 
...SNIP...
```

As we can see, the request went through this time, and we received the response data.