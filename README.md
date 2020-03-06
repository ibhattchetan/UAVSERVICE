# servicium-au3

#### Servicium (HouseJoy clone), provides a way to get services like Cleaning, Electrical,Plumbing,Painting,Carpentry and Appliances to your doorstep so you neever need to be worried about anyting for your home if you are an individual person who can't get time or anything else.

#### For small business who provide services to any city can expand there business by registring on portal and providing details of there services so your reach can be anywhere.

### Run Project

1. navigate to root directry of the application.
2. in the root directry there is all server logics available and for frontend a folder called client.
3. install server dependenciees by running command `npm install`
4. install frontend dependencies by navigation to client folder by running `cd client` and then running command `npm install`
5. now again head back to root folder by running `cd ..`
6. all set for project to start
7. run both server and frontend by running a single command `npm run serve`
8. boom here we go your browser will automatically open `http://localhost:3000`
9. click over login/signup accordingly

### Features

1. Multi user support for `Partner` (who provides perticular services in perticular cities)
2. `Customer` who is willing to use services that we provide
3. Easy Dropdown on the header itself to select city in which you want to get all service provides
4. Automatically selects prefred city once you logged in and added prefred city to profile section.
5. Easy navigation to all services on home page itself. so you can find your need within seconds.
6. Paginated service provider data to every categories for faster rendering.
7. Listed partners based on preference and also displayed user reviews on each result.
8. See specific partner details on partner page and there reviews also.
9. Easy Boking option on partner page to book them and get services soon.
10. While booking if user provied there mobile number then no need to refil that again, application will do that work for you.
11. service provider will get an sms for all the booking to no need to be online everyday.
12. once service is booked you can see all the services that you have booked so far and same for service provider also.
13. Proper Error handling while dealing with form fillings.
14. application will check internally if a user is available to book for time slot you have selected and will let you book if availabel and won't if not available.

### Technologies

- Backend Dependencies

1. `express` for smooth backend.
2. `bcryptjs` for hashing passwords.
3. `jsonwebtoken` for token based login.
4. `passport` for authontication.
5. `passport-jwt` for jwt strategies.
6. `body-parser` for url-encoded form data.
7. `concurrently` for running multiple server over single command.
8. `moment` for encoding timestamp values to human redable time.
9. `postgres` db.
10. `sequelize` for object relational management.
11. `twilio` to send sms about bookings.
12. `validator` validate user input to avoid unnessary form data.

- Frontend Dependencies

1. `react` frontend framework.
2. `react-router-dom` frontend routings.
3. `redux` state management library.
4. `react-redux` to communicate with redux from react components.
5. `redux-thunk` to dispatch actions asynchronously.
6. `bootstarp` elegent ui.
7. `classnames` smooth toggling classes oevr certain conditions.
8. `jwt-decode` to decode user auth token.
9. `scss` css pre processor.
10. `moment` for encoding timestamp values to human redable time.
11. `axios` communicate with backeend.
12. `node-sass` compile scss code to css.
13. `reactstrap` react component library.
