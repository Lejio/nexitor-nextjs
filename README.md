# Nextitor - Cross-platform NextJS Template

Basic template for Capacitor 6 and NextJS 14. Perfect for hackathons.

## Setup

To start, clone this repository and run the following command:

```
npm install && react@latest react-dom@latest next@14.2.5
```

Remember to configure capacitor.config.ts!

*Requires server local ip*

You can find your local ip value by running this command on linux:
```
ipconfig getifaddr en0
```

Set url to your local ip.

```ts
server: {
		url: `http://192.168.xxx.xxx:3000`,
        ...
}
```

Also set
```
appId: 'com.xxxxxxx.app'
```

to your app name. Ex. com.foobar.app

**Both your phone and server must be running under the same network for live reload!!**

Currently only tested for IOS.