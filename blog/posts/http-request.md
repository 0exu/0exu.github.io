# Http Request

Let's start by examining the following example HTTP request:

![HTTP request details: Method 'GET', path '/users/login.html', version 'HTTP/1.1'. Headers include host 'inlanefreight.com', user-agent 'Mozilla/5.0', and cookie 'PHPSESSID=c4ggt4jull9obt7aupa55o8vbf'.](https://cdn.services-k8s.prod.aws.htb.systems/content/modules/35/raw_request.png)

The image above shows an HTTP GET request to the URL:

- `http://inlanefreight.com/users/login.html`

The first line of any HTTP request contains three main fields 'separated by spaces':

|**Field**|**Example**|**Description**|
|---|---|---|
|`Method`|`GET`|The HTTP method or verb, which specifies the type of action to perform.|
|`Path`|`/users/login.html`|The path to the resource being accessed. This field can also be suffixed with a query string (e.g. `?username=user`).|
|`Version`|`HTTP/1.1`|The third and final field is used to denote the HTTP version.|

The next set of lines contain HTTP header value pairs, like `Host`, `User-Agent`, `Cookie`, and many other possible headers. These headers are used to specify various attributes of a request. The headers are terminated with a new line, which is necessary for the server to validate the request. Finally, a request may end with the request body and data.

**Note:** HTTP version 1.X sends requests as clear-text, and uses a new-line character to separate different fields and different requests. HTTP version 2.X, on the other hand, sends requests as binary data in a dictionary form.
