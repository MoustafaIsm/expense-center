<img src="./readme/title1.svg"/>

<div align="center">

> Expense Center is an intelligent expenses tracker for people that want to manage their financial lives and see others how they are managing theirs too.

**[PROJECT PHILOSOPHY](https://github.com/julescript/well_app#-project-philosophy) • [WIREFRAMES](https://github.com/julescript/well_app#-wireframes) • [TECH STACK](https://github.com/julescript/well_app#-tech-stack) • [IMPLEMENTATION](https://github.com/julescript/well_app#-impplementation) • [HOW TO RUN?](https://github.com/julescript/well_app#-how-to-run)**

</div>

<br><br>

<img src="./readme/title2.svg"/>

> Ecpense Center is an app built to help you manage your financial life, It provides a way to store your receipts, and show them to you in a clear way. Expense Center is made for people to share their financial life with others, so if someone wants to get inspired by someone of their financial status they can.
>
> Expense Center provides a clear visualization of someone's financial life with graphs and lists. It provides a fast way for one to chat with another users that may help them manage their own life.

### User Stories

- As a user, I want to be able to see all my receipts that I receive in one place, so its easier for me to manage.
- As a user, I want to browse other people's financial life, so I can get inspired to change mine.
- As a user, I want to be able to chat with people with similar financial status, so that I know what things I'm doing wrong.

<br><br>

<img src="./readme/title3.svg"/>

> This design was planned before on paper, then moved to Figma app for the fine details.
> Note that i didn't use any styling library or theme, all from scratch and using pure css modules

| Landing                                                                                | Home/Search                                                                               |
| -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| ![Landing](https://github.com/julescript/spotifyndr/blob/master/demo/Landing_Page.jpg) | ![Home/Search](https://github.com/julescript/spotifyndr/blob/master/demo/Search_Page.jpg) |

| Artists results                                                                                | Artist's Albums                                                                               |
| ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| ![Artists results](https://github.com/julescript/spotifyndr/blob/master/demo/Artists_Page.jpg) | ![Artist's Albums](https://github.com/julescript/spotifyndr/blob/master/demo/Albums_Page.jpg) |

<br><br>

<img src="./readme/title4.svg"/>

Here's a brief high-level overview of the tech stack the Well app uses:

- This project uses the [Ionic Framework](https://ionicframework.com/) with [Angular](https://angular.io/) to build the user frontend mobile application. Angular is a framework user to build cross-platform applications with the same code base, paired with Ionic that provides mobile UI toolkit for building modern, high quality cross-platform mobile apps.
- To build the admin panel for the website I have used [ElectronJS](https://www.electronjs.org/) to have a desktop application. It uses [ReactJS](https://reactjs.org/) library to build a component based elegant user interface. For a CSS Framework i have used [TailwindCSS](https://tailwindcss.com/) to help with styling of the interface.
- To display graphs I have used [ChatJs](https://www.chartjs.org/) for an easy way to deal with data visualization.
- For persistent storage (database), the app uses the [MySQL](https://www.mysql.com/) which is a relational database management system (RDBMS), that is based on structured query language (SQL).
- To access my database I used [Laravel Framework](https://laravel.com/) which is a web application framework with expressive, elegant syntax.
- The chatting part of the application was done using [Firebase](https://firebase.google.com/). The chat data were saved in the [Realtime database](https://firebase.google.com/docs/database?hl=en&authuser=0) in a NoSQL fashion.
- The notification system was done using [Cloud messaging](https://firebase.google.com/docs/cloud-messaging/?hl=en&authuser=0) with the help of [Cloud Functions](https://firebase.google.com/docs/functions?hl=en&authuser=0) to automate the sending notification part of the application.

<br><br>
<img src="./readme/title5.svg"/>

> Uing the above mentioned tecch stacks and the wireframes build with figma from the user sotries we have, the implementation of the app is shown as below, these are screenshots from the real app

| Landing                                                                                | Home/Search                                                                               |
| -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| ![Landing](https://github.com/julescript/spotifyndr/blob/master/demo/Landing_Page.jpg) | ![Home/Search](https://github.com/julescript/spotifyndr/blob/master/demo/Search_Page.jpg) |

<br><br>
<img src="./readme/title6.svg"/>

> To get a local copy up and running follow these simple steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```
- composer<br>
  Follow the steps mentioned here to intall composer:
  https://www.javatpoint.com/how-to-install-composer-on-windows

- ionic
  ```
  npm i -g @ionic/cli
  ```

### Installation

_Below are the steps you need to follow after you have the prerequistes done._

1. Clone the repo
   ```sh
   git clone https://github.com/MoustafaIsm/expense-center.git
   ```
2. Install NPM packages for the admin and user frontend
   ```sh
   npm install
   ```
3. Intall Composer packages for the backend server
   ```
   composer install
   ```
4. Change the `.env.example` file to `.env`

5. Run the following command
   ```
   php artisan key:generate
   ```
6. Configure your `.env` file to have the right database name and credentials.

7. Go to [Firebase](https://firebase.google.com/) and create an account there including a project to have your application work.

8. Go to this [Link](https://firebase.google.com/docs/web/learn-more?authuser=0&hl=en#config-object) to help you get your firebase configuration for the application.

9. In the user frontend, have a copy of the file `src/environments/environment.prod.ts` as `environtment.ts` and add your firebase configuration in it.

10. Run for the backend server

```
php artisan serve
```

11. Run for the admin frontend

```
npm run both
```

12. Run for the user frontend

```
ionic serve
```
