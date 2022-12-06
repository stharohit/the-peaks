<h1 align="center">
<img src="https://user-images.githubusercontent.com/18205447/205478030-8df94659-193b-45e7-9b49-caf23a959837.png" alt="The Peaks" width="150" />
</h1>

![The Peaks](https://user-images.githubusercontent.com/18205447/205477952-fa582de0-7fad-460e-a865-0a84466496d0.png)

> The peaks, a news portal application.

<br />

## Steps to run the project

- [Install Packages](#install-packages)
- [Update Env](#install-packages)
- [Run without docker](#run-without-docker)
- [Run with docker](#run-with-docker)

<br />

## Install Packages

```
npm ci
```

<br />

## Update Env

Copy the .env.sample to a .env file and replace the example url and key with your personal guardian key.

<br/>

## Run Without Docker

To run project in development mode use the following command:

```
npm run dev
```

To run project in production mode use the following command:

```
npm run build && npm start
```

<br />

## Run With Docker

To run project in production mode use the following command:

```
npm run start:prod
```

The project will run in port 5000

<br />

## 🚩 Table of Contents

- [Features](#features)
- [PWA](#pwa)
- [Reports](#reports)
    - [PWA Report](#pwa-report)
- [Extra](#extra)
- [404](#404)

<br />

## Features

- Dockerized nextjs application.
- [PWA](#pwa) support with offline page support.
- View top news article.
- Articles categorized under "Sports", "Culture", "News" and "Life and Style" section.
- Searchbar
    - Easy to query news.
    - Infinite scroll.
    - Sortable searched articles.
- Sort all the articles by either "Newest" or "Oldest"
- Bookmark Feature
    - You can add bookmark.
    - You can view bookmark.
    - You can remove bookmark.
    - You can sort bookmark by "Newest" or "Oldest"
- Snackbar
    - shows "added bookmark" message whenever a bookmark is added.
    - shows "removed bookmark" message whenever a bookmark is removed.
- Theme switcher "Dark mode" and "Light mode"
- Custom [404](#404) page
- Error Boundary

<br />

## PWA

You can generate the pwa report by running the production build application in chrome browser. Open chrome developer tools and goto lighthouse tab. Select the option "Progressive Web App" and click on "Analyze page load" button and wait for the reports to generate.

<br />

## Reports

### PWA Report

> Please make sure to use Incognito mode to generate report as many factor can effect the result which includes browser extension and network settings.

![PWA Report](https://user-images.githubusercontent.com/18205447/205492929-be2f9697-fb52-48ec-bb37-6df712c922d9.png)

### Test Coverage

To check test coverage run the following command:

```
npm run test:coverage
```

To get the test summary report run the following command:

```
npm run test:summary
```

![Test coverage summary](https://user-images.githubusercontent.com/18205447/205705059-a2e7b7b1-6771-491a-9cec-65d95e94835a.png)

## Extra

> I present you "The dark edition" of "The peaks".

![Dark Theme](https://user-images.githubusercontent.com/18205447/205509371-22c15c2b-a805-4c92-8f0c-3a5a81033af4.png)

## 404


![404 page](https://user-images.githubusercontent.com/18205447/205708345-0188a78b-fd20-4c48-bcb4-93abb5f003de.png)