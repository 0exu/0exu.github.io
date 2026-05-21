## GET Parameters

Once we are authenticated, we get access to a `City Search` function, in which we can enter a search term and get a list of matching cities:

```
http://<SERVER_IP>:<PORT>/
```

![Search icon with instruction: 'Type a city name and hit Enter'.](https://cdn.services-k8s.prod.aws.htb.systems/content/modules/35/http_auth_index.jpg)

As the page returns our results, it may be contacting a remote resource to obtain the information, and then display them on the page. To verify this, we can open the browser devtools and go to the Network tab, or use the shortcut `CTRL+SHIFT+E` to get to the same tab. Before we enter our search term and view the requests, we may need to click on the `trash` icon on the top left, to ensure we clear any previous requests and only monitor newer requests: ![Network tab with instructions: 'Perform a request or reload the page to see detailed information about network activity. Click on the stopwatch button to start performance analysis.](https://cdn.services-k8s.prod.aws.htb.systems/content/modules/35/network_clear_requests.jpg)

After that, we can enter any search term and hit enter, and we will immediately notice a new request being sent to the backend: ![Search results for 'le' showing Leeds (UK) and Leicester (UK). Network tab displays a successful GET request to 127.0.0.1 for search.php.](https://cdn.services-k8s.prod.aws.htb.systems/content/modules/35/web_requests_get_search.jpg)

When we click on the request, it gets sent to `search.php` with the GET parameter `search=le` used in the URL. This helps us understand that the search function requests another page for the results.

Now, we can send the same request directly to `search.php` to get the full search results, though it will probably return them in a specific format (e.g. JSON) without having the HTML layout shown in the above screenshot.

To send a GET request with cURL, we can use the exact same URL seen in the above screenshots since GET requests place their parameters in the URL. However, browser devtools provide a more convenient method of obtaining the cURL command. We can right-click on the request and select `Copy>Copy as cURL`. Then, we can paste the copied command in our terminal and execute it, and we should get the exact same response:

```shellsession
0warn@htb[/htb]$ curl 'http://<SERVER_IP>:<PORT>/search.php?search=le' -H 'Authorization: Basic YWRtaW46YWRtaW4=' 
Leeds (UK) Leicester (UK)`
...SNIP...
```
**Note:** The copied command will contain all headers used in the HTTP request. However, we can remove most of them and only keep necessary authentication headers, like the `Authorization` header.

We can also repeat the exact request right within the browser devtools, by selecting `Copy>Copy as Fetch`. This will copy the same HTTP request using the JavaScript Fetch library. Then, we can go to the JavaScript console tab by clicking `CTRL+SHIFT+K`, paste our Fetch command and hit enter to send the request: ![Console showing a fetch request to 'http://127.0.0.1/search.php?search=lel' with headers including user-agent and authorization. Network tab displays a successful GET request with status 200.](https://cdn.services-k8s.prod.aws.htb.systems/content/modules/35/web_requests_fetch_search.jpg)

As we see, the browser sent our request, and we can see the response returned after it. We can click on the response to view its details, expand various details, and read them.