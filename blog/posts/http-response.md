# Http Response

Once the server processes our request, it sends its response. The following is an example HTTP response:

![HTTP response details: Version 'HTTP/1.1', status '200 OK'. Headers include date, server 'Apache/2.4.41', set-cookie 'PHPSESSID=m4u64rqlpfthrvvb12ai9voqgf', and content-type 'text/html; charset=UTF-8'.](https://cdn.services-k8s.prod.aws.htb.systems/content/modules/35/raw_response.png)

The first line of an HTTP response contains two fields separated by spaces. The first being the `HTTP version` (e.g. `HTTP/1.1`), and the second denotes the `HTTP response code` (e.g. `200 OK`).

Response codes are used to determine the request's status, as will be discussed in a later section. After the first line, the response lists its headers, similar to an HTTP request. Both request and response headers are discussed in the next section.

Finally, the response may end with a response body, which is separated by a new line after the headers. The response body is usually defined as `HTML` code. However, it can also respond with other code types such as `JSON`, website resources such as images, style sheets or scripts, or even a document such as a PDF document hosted on the webserver.
