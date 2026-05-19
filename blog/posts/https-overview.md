# Https Overview

If we examine an HTTP request, we can see the effect of not enforcing secure communications between a web browser and a web application. For example, the following is the content of an HTTP login request: ![Wireshark capture showing an HTTP POST request to /login.php with username 'admin' and password 'password' in plain text.](https://cdn.services-k8s.prod.aws.htb.systems/content/modules/35/https_clear.png)

We can see that the login credentials can be viewed in clear-text. This would make it easy for someone on the same network (such as a public wireless network) to capture the request and reuse the credentials for malicious purposes.

In contrast, when someone intercepts and analyzes traffic from an HTTPS request, they would see something like the following: ![Wireshark capture showing TLSv1.2 encrypted application data from source 216.58.197.36 to destination 192.168.0.108, using port 443.](https://cdn.services-k8s.prod.aws.htb.systems/content/modules/35/https_google_enc.png)

As we can see, the data is transferred as a single encrypted stream, which makes it very difficult for anyone to capture information such as credentials or any other sensitive data.

Websites that enforce HTTPS can be identified through `https://` in their URL (e.g. [https://www.google.com](https://www.google.com)), as well as the lock icon in the address bar of the web browser, to the left of the URL: ![Browser showing site information for www.google.com: connection secure, no special permissions granted, option to clear cookies and site data.](https://cdn.services-k8s.prod.aws.htb.systems/content/modules/35/https_google.png)

So, if we visit a website that utilizes HTTPS, like Google, all traffic would be encrypted.

**Note:** Although the data transferred through the HTTPS protocol may be encrypted, the request may still reveal the visited URL if it contacted a clear-text DNS server. For this reason, it is recommended to utilize encrypted DNS servers (e.g. 8.8.8.8 or 1.1.1.1), or utilize a VPN service to ensure all traffic is properly encrypted.