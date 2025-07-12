
# Offline-First CRUD App with React Native, RxDB, SQLite & CouchDB

This is a **React Native application** built for the TitanDeploy assignment to demonstrate:

 Offline-first data management  
 Local storage with RxDB + SQLite  
 Auto replication to CouchDB when online  
 Ability to create and list Businesses & Articles linked to them.

---

##  Features

-  **Create Businesses** from the frontend
-  **Create Articles** linked to a Business (includes qty & price)
-  **Read & List** all Businesses
-  **Read & List Articles** under each Business
-  **Works offline-first**: Data saved locally even with no internet
-  **Auto-syncs with CouchDB** when internet comes back
-  Built using modern stack: React Native, RxDB, SQLite, CouchDB

---

##  Tech Stack

| Layer            | Tech                                         |
|------------------|----------------------------------------------|
| Frontend         | React Native (CLI)                           |
| Local DB         | RxDB + SQLite (via PouchDB adapter)          |
| Replication      | CouchDB (sync target)                       |
| UI Components    | React Native components + hooks             |

---

##  Folder structure

```
/OfflineCRUDApp
 ┣ /src
 ┃ ┣ /database
 ┃ ┃ ┣ db.js
 ┃ ┃ ┣ setupRxDB.js
 ┃ ┃ ┗ /schemas
 ┃ ┃    ┣ businessSchema.js
 ┃ ┃    ┗ articleSchema.js
 ┃ ┣ /screens
 ┃ ┃ ┣ BusinessesListScreen.js
 ┃ ┃ ┗ ArticlesListScreen.js
 ┃ ┗ App.js
 ┣ README.md
 ┣ package.json
 ┗ ...
```

---

##  Setup & Running the App

###  Clone the repo

```
git clone https://github.com/YOUR_USERNAME/offline-crud-rxdb.git
cd offline-crud-rxdb
```

###  Install dependencies

```
npm install
```

###  Start CouchDB

- Ensure CouchDB is running and accessible at:
  - `http://10.0.2.2:5984` (Android emulator loopback)
- Default CouchDB credentials assumed: `admin:admin`

###  Run the React Native metro server

```
npx react-native start
```

###  Run on Android

```
npx react-native run-android
```

>  Works best tested on Android emulator or real device.

---

##  How offline + sync works

- The app creates a local RxDB database using SQLite storage adapter.
- When the app is **offline**, CRUD operations still work — stored in local DB.
- When **internet comes back**, RxDB automatically replicates to CouchDB.

---

##  Known notes / assumptions

- RxDB + React Native has typical issues with `BroadcastChannel` (due to Hermes). 
- The code includes **complete replication + schemas + local DB CRUD logic**, but some `BroadcastChannel` methods can cause runtime warnings/errors on Hermes.
- The design demonstrates the **entire architecture of offline-first local DB + auto-sync**.

---

##  Assignment requirements covered

✅ Create Business (frontend)  
✅ Create Article linked to Business  
✅ Offline-first with RxDB + SQLite  
✅ CouchDB replication (auto-sync)  
✅ No backend APIs — all managed from frontend  
✅ Clean codebase, reusable components & separation of concerns.

---



## Building APK for submission

```
cd android
./gradlew assembleRelease
```

- The generated APK will be found at:
  ```
  android/app/build/outputs/apk/release/app-release.apk
  ```
- Upload this APK for TitanDeploy to test on device.

---

## 📌 How to test offline functionality

1. Open the app on Android emulator / device.
2. Turn off WiFi / data.
3. Create a Business & linked Articles.
4. Turn WiFi back on.
5. Data syncs automatically to CouchDB.

---

## 🙏 Thanks & Contact

This was implemented as part of TitanDeploy’s technical assignment.  
If any issues arise or you'd like a video walkthrough, please let me know.

---

⭐ **GitHub repo:**  
[https://github.com/YOUR_USERNAME/offline-crud-rxdb](https://github.com/YOUR_USERNAME/offline-crud-rxdb)
