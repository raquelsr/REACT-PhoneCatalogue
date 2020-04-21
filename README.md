# PHONE CATALOGUE

Phone catalogue developed with ReactJS and NodeJS.

- ###  SERVER SIDE / FRONT-END

In the server-side folder is the development of the back-end, developed with **Express**. 
API returns data provided by the JSON file from the *data* folder.
To run it, we must launch the following commands in the root of the folder:

```sh
$ npm install
$ npm run start
```

Type | ENDPOINT | Data
--- | --- | ---
GET | `/phones` | Return all phones data
GET | `/phones/:id` | Return phone by *id*


Open [http://localhost:3001/phones](http://localhost:3001/phones) to view it in the browser all phones data.


- ### CLIENT SIDE / BACK-END
In the client-side folder is the development of the front-end, developed with **React** and **Redux**.
To run it, we must launch the following commands inside the folder:

```sh
$ npm install
$ npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Finally, you will show the complete app in [http://localhost:3000](http://localhost:3000)
