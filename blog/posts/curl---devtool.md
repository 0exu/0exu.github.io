# Curl   Devtool

In the previous section, we saw how using the `-v` flag with cURL shows us the full details of the HTTP request and response. If we were only interested in seeing the response headers, then we can use the `-I` flag to send a `HEAD` request and only display the response headers. Furthermore, we can use the `-i` flag to display both the headers and the response body (e.g. HTML code). The difference between the two is that `-I` sends a `HEAD` request (as will see in the next section), while `-i` sends any request we specify and prints the headers as well.

The following command shows an example output of using the `-I` flag:

```shellsession
0warn@htb[/htb]$ curl -I https://www.inlanefreight.com 
Host: www.inlanefreight.com User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/605.1.15 (KHTML, like Gecko) 
Cookie: cookie1=298zf09hf012fh2; 
cookie2=u32t4o3tb3gg4 Accept: text/plain 
Referer: https://www.inlanefreight.com/ 
Authorization: BASIC cGFzc3dvcmQK 

Date: Sun, 06 Aug 2020 08:49:37 
GMT Connection: keep-alive 
Content-Length: 26012 
Content-Type: text/html; charset=ISO-8859-4 
Content-Encoding: gzip 
Server: Apache/2.2.14 (Win32) 
Set-Cookie: name1=value1,name2=value2; 
Expires=Wed, 09 Jun 2021 10:18:14 GMT 
WWW-Authenticate: BASIC realm="localhost" Content-Security-Policy: script-src 'self' Strict-Transport-Security: max-age=31536000 Referrer-Policy: origin
```

**Exercise:** Try to go through all of the above headers, and see whether you can recall the usage for each of them.

In addition to viewing headers, cURL also allows us to set request headers with the `-H` flag, as we will see in a later section. Some headers, like the `User-Agent` or `Cookie` headers, have their own flags. For example, we can use the `-A` to set our `User-Agent`, as follows:

```shellsession
0warn@htb[/htb]$ curl https://www.inlanefreight.com -A 'Mozilla/5.0' 
<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN"> 
<html><head> 
...SNIP...
```

**Exercise:** Try to use the `-I` or the `-v` flags with the above example, to ensure that we did change our User-Agent with the `-A` flag.

---

## Browser DevTools

Finally, let's see how we can preview the HTTP headers using the browser devtools. Just as we did in the previous section, we can go to the `Network` tab to view the different requests made by the page. We can click on any of the requests to view its details: ![Network tab showing two GET requests to 188.166.146.97:31122. Status 304 for '/' with headers displayed, and 404 for 'favicon.ico'.](https://cdn.services-k8s.prod.aws.htb.systems/content/modules/35/devtools_network_requests_details.jpg)

In the first `Headers` tab, we see both the HTTP request and HTTP response headers. The devtools automatically arrange the headers into sections, but we can click on the `Raw` button to view their details in their raw format. Furthermore, we can check the `Cookies` tab to see any cookies used by the request, as discussed in an upcoming section.
