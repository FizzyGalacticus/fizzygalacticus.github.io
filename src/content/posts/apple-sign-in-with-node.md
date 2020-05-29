{
    "title": "Apple Sign-in With Node",
    "publishDate": "2021-05-28T16:40:56-07:00",
    "date": "2021-05-28T16:40:56-07:00",
    "draft": true,
    "categories": ["technology"],
    "tags": ["Apple", "oauth", "authentication"],
    "slug": "apple-sign-in-with-node"
}

Last this year, [Apple announced](https://techcrunch.com/2019/06/03/apple-will-soon-require-apps-with-any-third-party-logins-to-use-its-new-sign-in-with-apple-service/) that any app utilizing third-party authentication must also include the ability to sign in using their new ["Sign in with Apple"](https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple/overview/) service. I am not going to go too far into it, but their new service somewhat resembles other OAuth services, but with some minor oddities.

*Disclaimer:* This is not a tutorial for how to implement OAuth, and some basic OAuth knowledge is expected.

## The rundown

Apple's developer documentation is lacking to say the least, and their practices for developing libraries sometimes leaves developers asking why certain things were designed the way they were.

In a normal OAuth flow for instance, once the user logs in to the third-party service such as Facebook or Google and authorizes your application, the service then sends an authorize token back to either the requesting application or a previously specified server (sending directly to a server is the most secure!). That token can then be re-verified by the server with the OAuth service to make sure it is legitimate, and then your server can perform actions on the user's behalf using that access token. That verification step is where things *start* to get odd with Apple sign-in.

During this verification step, usually the server just passes the access token to the OAuth service and they can take care of the authorization and verification of that token. They usually just return a `200` or some other form of truthy value to indicate that the request was successful. With Apple sign-in, you must [fetch Apple's public keys](https://developer.apple.com/documentation/signinwithapplerestapi/fetch_apple_s_public_key_for_verifying_token_signature) yourself and perform all of the cryptography yourself.
