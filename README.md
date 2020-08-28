## Slack Clone With Vue

Before we start with project and how and what it does, a quick disclaimer.

- This app is only created for fun. So it is only working locally and I do not intend to host in anywhere. It would probably be illegal to do so, due to usage of Slack logo and their name in my application. So this is as said, only for fun and learning purposes. 
- The App is heavily inspired by Youtube channel ***Clever Programmer*** and their livestream, where they did the app using React. I created it again using Vue and plan on adding a lot more functionalities, because they only added a few in their 4 hours livestream.

## Project Status

This project is currently in development. There are many features still not implemented and I will try to add as many as I can, and as many as I know how to do, due to being not highly experienced in Vue. 

## Project Screen Shot(s)

### Login With Google Screen

![alt text](https://github.com/fvukojevic/Slack-Clone-Vue/blob/master/imgs/google_login.png)

### Chat Page

![alt text](https://github.com/fvukojevic/Slack-Clone-Vue/blob/master/imgs/chat.png)

### Dynamic Slugs

![alt text](https://github.com/fvukojevic/Slack-Clone-Vue/blob/master/imgs/dynamic_slugs.png)


### Dynamic Channels

![alt text](https://github.com/fvukojevic/Slack-Clone-Vue/blob/master/imgs/dynamic_channels.png)


### User data from Google Auth api

![alt text](https://github.com/fvukojevic/Slack-Clone-Vue/blob/master/imgs/user_data.png)

## Installation and Setup Instructions

#### Example:  

The only prereq to this project, other than the usuall Vue setup below, is that you setup the database inside the firebase. I was using firebase because it is insanely simple to implement with Vue and React and it does most of the things any other database does. 

Use firestore and not the real database. ***If there is any problem with setting up the firestore please hit me up in my email and I will help you set it up***.

Once you have firebase setup, you can open the config page, copy the code and paste it inside firebase.js script. You can see my firebase object there, just replace it with your data. 
For clarification this is the code I am refering to: 

```
const firebaseConfig = {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: ''
};
```

Installation:

`npm install`    

To Start Server:

`npm run serve`  

To Visit App:

`localhost:8000`  (or if the port is already taken, Vue takes care of that and assigns a new one)

## How does it work

Once the app is started, you can simply open the port it is running on, sign in with your Google account and chat inside channels. So the only functionality present right now is adding new channels, opening them and pushing messages inside. You can open multiple incognito browsers to test multiple people joining. 

## What next? 

Again, the app is still very much under construction. I intend to add more and more features, like threads, notifications, deleting messages, editing them, pushing files, and many more. If you would like to help and be a part of my journey you can allways ping me and we will get you started! This is a good learning experience and I look forward to working with different people

## Reflection

So at this point I just want to reflect on this app and why I decided to use it. So I have been working as a software developer for the last 2 years, and my main focus has been more on the ***backend*** side of things. So creating api's, microservices, interacting with databases (nosql, sql, key value stores, etc.) has always been my main focus. 

Recently I decided to switch gears and try learning more about frontend and devops things. I picked up dockers, started learning them, and after a while got pretty good at it (this app will potentially be dockerized). When it comes to frontend I picked up Vue.js pretty fast as it is probably the fastes and easiest frontend language to start with. I created bunch of little small apps, just testing how everything works, how lifecycles works, how it all connects to Vuex, etc.

Now I am looking to expand and learn more advanced things and topics of Vue.

You can clearly see by my code, that I am no expert when it comes to frontend, so please bare with me while I am trying to improve the code and add new featues. While it might take only few minutes to some, I still have to spend some time on stackoverflow and alike to seek help whenever I get into trouble.

And as said before, this is an app in development and there are many known issues and bugs that I will eventually fix. 
