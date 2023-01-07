# University students, courses & buildings database

## This website allows you to `GET` (view), `POST` (add), `PUT` (view) & delete `(DELETE)` students, courses & buildings

### GET all the data from the database

`GET /api/all`

```json
[
  [
    {
      "_id": "6372c11d587ce69c55bf2371",
      "student_id": 523169,
      "first_name": "Harvey",
      "last_name": "Specter",
      "courses": [
        { "course1": "250355", "course2": "878489", "course3": "183799" }
      ],
      "__v": 0
    },
    {
      "_id": "6372c199587ce69c55bf2377",
      "student_id": 786541,
      "first_name": "Jason",
      "last_name": "Bourne",
      "courses": [
        { "course1": "644815", "course2": "403803", "course3": "465781" }
      ],
      "__v": 0
    },
    {
      "_id": "6372c1be587ce69c55bf237a",
      "student_id": 384595,
      "first_name": "Sherlock",
      "last_name": "Holmes",
      "courses": [
        { "course1": "329681", "course2": "359760", "course3": "526624" }
      ],
      "__v": 0
    },
    {
      "_id": "6372c204587ce69c55bf237d",
      "student_id": 602619,
      "first_name": "Donna",
      "last_name": "Paulsen",
      "courses": [
        { "course1": "871236", "course2": "963364", "course3": "520001" }
      ],
      "__v": 0
    },
    {
      "_id": "6372c265587ce69c55bf2380",
      "student_id": 289447,
      "first_name": "Rachel",
      "last_name": "Green",
      "courses": [
        { "course1": "347909", "course2": "593726", "course3": "319766" }
      ],
      "__v": 0
    },
    {
      "_id": "6372c2ab587ce69c55bf2383",
      "student_id": 992644,
      "first_name": "Taylor",
      "last_name": "Swift",
      "courses": [
        { "course1": "810043", "course2": "688705", "course3": "656169" }
      ],
      "__v": 0
    },
    {
      "_id": "6372c2c6587ce69c55bf2386",
      "student_id": 891263,
      "first_name": "Ethan",
      "last_name": "Hunt",
      "courses": [
        { "course1": "160878", "course2": "989982", "course3": "960736" }
      ],
      "__v": 0
    },
    {
      "_id": "6372c2fc587ce69c55bf2389",
      "student_id": 411686,
      "first_name": "Walter",
      "last_name": "White",
      "courses": [
        { "course1": "591324", "course2": "599433", "course3": "935495" }
      ],
      "__v": 0
    },
    {
      "_id": "6372c36a587ce69c55bf238e",
      "student_id": 192240,
      "first_name": "Emma",
      "last_name": "Stone",
      "courses": [
        { "course1": "130130", "course2": "485158", "course3": "466345" }
      ],
      "__v": 0
    },
    {
      "_id": "637309abef6af55afa69b009",
      "student_id": 425007,
      "first_name": "James",
      "last_name": "Bond",
      "courses": [
        { "course1": "202009", "course2": "547133", "course3": "999121" }
      ],
      "__v": 0
    }
  ],
  [
    {
      "_id": "637273ed85902022e65c3b94",
      "name": "Machine Learning",
      "instructor": "Joseph Yurko",
      "meeting_day": "Tuesday",
      "meeting_time": "1 to 3:50 pm",
      "__v": 0,
      "course_id": 547133,
      "building": 537714
    },
    {
      "_id": "637274e785902022e65c3b96",
      "name": "Data Mining",
      "instructor": "Tyler Brooks",
      "meeting_day": "Tuesday, Thursday",
      "meeting_time": "9 to 10:50 am",
      "__v": 0,
      "course_id": 999121,
      "building": 765069
    },
    {
      "_id": "6372751685902022e65c3b98",
      "name": "Ethics Law",
      "instructor": "William Gerald",
      "meeting_day": "Wednesday",
      "meeting_time": "6 to 8:50 pm",
      "__v": 0,
      "course_id": 250355,
      "building": 181234
    },
    {
      "_id": "6372756e85902022e65c3b9a",
      "name": "Contracts Law",
      "instructor": "Satish Sawyer",
      "meeting_day": "Friday",
      "meeting_time": "12 to 2:50 pm",
      "__v": 0,
      "course_id": 878489,
      "building": 724790
    },
    {
      "_id": "6372759c85902022e65c3b9c",
      "name": "Intellectual Law",
      "instructor": "Ali Nosek",
      "meeting_day": "Monday",
      "meeting_time": "3 to 5:50 pm",
      "__v": 0,
      "course_id": 183799,
      "building": 898470
    },
    {
      "_id": "637275de85902022e65c3b9e",
      "name": "Software Engineering",
      "instructor": "Paula Bell",
      "meeting_day": "Wednesday",
      "meeting_time": "3 to 5:50 pm",
      "__v": 0,
      "course_id": 644815,
      "building": 269360
    },
    {
      "_id": "6372763085902022e65c3ba0",
      "name": "Information Visualization",
      "instructor": "Lingfei Wu",
      "meeting_day": "Tuesday",
      "meeting_time": "12 to 2:50 pm",
      "__v": 0,
      "course_id": 403803,
      "building": 633352
    },
    {
      "_id": "6372765a85902022e65c3ba2",
      "name": "Probability Theory",
      "instructor": "Satish Iyer",
      "meeting_day": "Tuesday, Thursday",
      "meeting_time": "3 to 4:50 pm",
      "__v": 0,
      "course_id": 465781,
      "building": 985124
    },
    {
      "_id": "637276a685902022e65c3ba4",
      "name": "Financial Accounting",
      "instructor": "Edna Drake",
      "meeting_day": "Monday",
      "meeting_time": "6 to 8:50 pm",
      "__v": 0,
      "course_id": 329681,
      "building": 765069
    },
    {
      "_id": "637276c685902022e65c3ba8",
      "name": "Economics",
      "instructor": "Amanda Patrick",
      "meeting_day": "Friday",
      "meeting_time": "6 to 8:50 pm",
      "__v": 0,
      "course_id": 359760,
      "building": 794429
    },
    {
      "_id": "637276fb85902022e65c3baa",
      "name": "Supply Chain Management",
      "instructor": "Michael Anderson",
      "meeting_day": "Thursday",
      "meeting_time": "1 to 3:50 pm",
      "__v": 0,
      "course_id": 526624,
      "building": 898470
    },
    {
      "_id": "6372773f85902022e65c3bac",
      "name": "Psychology",
      "instructor": "Ramona Blake",
      "meeting_day": "Friday",
      "meeting_time": "12 to 2:50 pm",
      "__v": 0,
      "course_id": 871236,
      "building": 985124
    },
    {
      "_id": "6372776885902022e65c3bae",
      "name": "Cross Culture Psych",
      "instructor": "Omar Phelps",
      "meeting_day": "Wednesday",
      "meeting_time": "9 to 11:50 am",
      "__v": 0,
      "course_id": 963364,
      "building": 181234
    },
    {
      "_id": "6372779185902022e65c3bb0",
      "name": "Attitudes and Attitude Change",
      "instructor": "Tiffany Perez",
      "meeting_day": "Tuesday",
      "meeting_time": "1 to 3:50 pm",
      "__v": 0,
      "course_id": 520001,
      "building": 794429
    },
    {
      "_id": "637277ba85902022e65c3bb2",
      "name": "Drawing Studio",
      "instructor": "Hubert Hammond",
      "meeting_day": "Wednesday",
      "meeting_time": "3 to 5:50 pm",
      "__v": 0,
      "course_id": 347909,
      "building": 765069
    },
    {
      "_id": "637277dc85902022e65c3bb4",
      "name": "Painting Studio",
      "instructor": "Homer Shelton",
      "meeting_day": "Thursday",
      "meeting_time": "6 to 8:50 pm",
      "__v": 0,
      "course_id": 593726,
      "building": 592512
    },
    {
      "_id": "637277fa85902022e65c3bb6",
      "name": "Sculpture Design",
      "instructor": "Emily Reese",
      "meeting_day": "Thursday",
      "meeting_time": "12 to 2:50 pm",
      "__v": 0,
      "course_id": 319766,
      "building": 898470
    },
    {
      "_id": "6372782885902022e65c3bba",
      "name": "Theatre Arts",
      "instructor": "Freddie Washington",
      "meeting_day": "Wednesday",
      "meeting_time": "9 to 11:50 am",
      "__v": 0,
      "course_id": 130130,
      "building": 633352
    },
    {
      "_id": "6372787785902022e65c3bbc",
      "name": "Voice and Movements",
      "instructor": "Sarah King",
      "meeting_day": "Thursday",
      "meeting_time": "9 to 11:50 am",
      "__v": 0,
      "course_id": 485158,
      "building": 765069
    },
    {
      "_id": "6372789c85902022e65c3bbe",
      "name": "Play Writing",
      "instructor": "Manuel Reid",
      "meeting_day": "Friday",
      "meeting_time": "9 to 11:50 am",
      "__v": 0,
      "course_id": 466345,
      "building": 724790
    },
    {
      "_id": "637278bf85902022e65c3bc0",
      "name": "Musical Theatre",
      "instructor": "Manuel Reid",
      "meeting_day": "Monday",
      "meeting_time": "3 to 5:50 pm",
      "__v": 0,
      "course_id": 810043,
      "building": 269360
    },
    {
      "_id": "637278f085902022e65c3bc4",
      "name": "Violin",
      "instructor": "Dawn Pearson",
      "meeting_day": "Tuesday",
      "meeting_time": "6 to 8:50 pm",
      "__v": 0,
      "course_id": 688705,
      "building": 898470
    },
    {
      "_id": "6372790c85902022e65c3bc6",
      "name": "Song Writing",
      "instructor": "Micheal Fernandez",
      "meeting_day": "Friday",
      "meeting_time": "6 to 8:50 pm",
      "__v": 0,
      "course_id": 656169,
      "building": 537714
    },
    {
      "_id": "6372793385902022e65c3bc8",
      "name": "Physics",
      "instructor": "Laura Graves",
      "meeting_day": "Monday",
      "meeting_time": "6 to 8:50 pm",
      "__v": 0,
      "course_id": 160878,
      "building": 633352
    },
    {
      "_id": "6372795485902022e65c3bca",
      "name": "Astronomy",
      "instructor": "Erica Hines",
      "meeting_day": "Tuesday",
      "meeting_time": "12 to 2:50 pm",
      "__v": 0,
      "course_id": 989982,
      "building": 181234
    },
    {
      "_id": "6372797785902022e65c3bcc",
      "name": "Stellar Structure",
      "instructor": "Allan Ross",
      "meeting_day": "Wednesday",
      "meeting_time": "1 to 3:50 pm",
      "__v": 0,
      "course_id": 960736,
      "building": 985124
    },
    {
      "_id": "6372799585902022e65c3bce",
      "name": "Organic Chemistry",
      "instructor": "Johnny Ortega",
      "meeting_day": "Thursday",
      "meeting_time": "1 to 3:50 pm",
      "__v": 0,
      "course_id": 591324,
      "building": 765069
    },
    {
      "_id": "63727a0885902022e65c3bd2",
      "name": "Quantum Mechanics",
      "instructor": "Derek Ellis",
      "meeting_day": "Friday",
      "meeting_time": "6 to 8:50 pm",
      "__v": 0,
      "course_id": 599433,
      "building": 794429
    },
    {
      "_id": "63727a3085902022e65c3bd4",
      "name": "Thermo-dynamics",
      "instructor": "Barry Johnson",
      "meeting_day": "Monday",
      "meeting_time": "12 to 2:50 pm",
      "__v": 0,
      "course_id": 935495,
      "building": 592512
    },
    {
      "_id": "6372b7f660d5582ff3c604d0",
      "course_id": 202009,
      "name": "Network and Web Data Technologies",
      "instructor": "Wayan Pulantara",
      "meeting_day": "Tuesday",
      "meeting_time": "6 to 8:50 pm",
      "__v": 0,
      "building": 724790
    },
    {
      "_id": "6373f84d702a87ec87be084d",
      "course_id": 987658,
      "name": "Website Development",
      "instructor": "Ritika Gandhi",
      "meeting_day": "Monday",
      "meeting_time": "12 to 2:50 pm",
      "building": 123456,
      "__v": 0
    }
  ],
  [
    {
      "_id": "637254a94b6beb13988b8ca5",
      "name": "Cathedral of Learning",
      "address": "4200 Fifth Ave",
      "zipcode": 15213,
      "__v": 0,
      "building_id": 724790
    },
    {
      "_id": "6373a3009ec08e9824b05394",
      "building_id": 269360,
      "name": "Wesley Posvar",
      "address": "230 S. Bouquet Street",
      "zipcode": 15213,
      "__v": 0
    },
    {
      "_id": "6373a3449ec08e9824b05397",
      "building_id": 898470,
      "name": "Barco Law Building",
      "address": "3900 Forbes Avenue",
      "zipcode": 15260,
      "__v": 0
    },
    {
      "_id": "6373a3629ec08e9824b0539a",
      "building_id": 537714,
      "name": "Sennott Square",
      "address": "210 S. Bouquet Street",
      "zipcode": 15213,
      "__v": 0
    },
    {
      "_id": "6373a37c9ec08e9824b0539d",
      "building_id": 633352,
      "name": "Clapp Hall",
      "address": "4249 Fifth Avenue",
      "zipcode": 15260,
      "__v": 0
    },
    {
      "_id": "6373a3949ec08e9824b053a0",
      "building_id": 765069,
      "name": "Music Building",
      "address": "4337 Fifth Avenue",
      "zipcode": 15260,
      "__v": 0
    },
    {
      "_id": "6373a3a99ec08e9824b053a3",
      "building_id": 985124,
      "name": "IS Building",
      "address": "135 N. Bellefield Avenue",
      "zipcode": 15213,
      "__v": 0
    },
    {
      "_id": "6373a3cb9ec08e9824b053a6",
      "building_id": 181234,
      "name": "Swanson School of Engineering",
      "address": "3700 O'Hara Street",
      "zipcode": 15261,
      "__v": 0
    },
    {
      "_id": "6373a3e09ec08e9824b053a9",
      "building_id": 592512,
      "name": "Langley Hall",
      "address": "5th and Ruskin Avenue",
      "zipcode": 15260,
      "__v": 0
    },
    {
      "_id": "6373a5361b0b59ee12453d0b",
      "building_id": 794429,
      "name": "Stephen Foster Memorial",
      "address": "4301 Forbes Avenue",
      "zipcode": 15213,
      "__v": 0
    }
  ]
]
```

### On the main page you have 4 options available i.e., Students, Courses, Buildings, Get courses in each building

### Students

### When clicked on `students`

#### On the frontend, you are taken to another page that shows you a table with all the students in the database. It shows the student ID, first name, last name and the courses taken by that student.

#### On the backend, it executes the following

`GET /api/students`

### On clicking the student ID

#### On the frontend, you are taken to another page which shows details about the student

#### On the backend, it executes the following

`GET /api/student/:id`

### On clicking the course ID

#### On the frontend, you are taken to another page that shows the details of that course

#### On the backend, it executes the following

`GET /api/course/:id`

### On clicking the pencil icon (edit)

#### On the frontend, you are taken to another page which has a prefilled form with the values of that student. Here you can edit the details of the student. Be sure to fill every field otherwise you won't be allowed to save the changes.

#### On the backend, it executes the following

`PUT /api/student/:id`

### On clicking the trash icons (delete)

#### On the frontend, nothing really exciting happens. The page refreshes and the student you deleted, well, gets deleted

#### On the backend, it executes the following

`DELETE /api/student/:id`

### On clicking the add a student link

#### On the frontend, you are taken to another page with a form to fill out to add a new student. Make sure to fill out all the fields, otherwise you won't be allowed to add the student.

#### On the backend, it executes the following

`POST /api/student`

#### This needs to be done via Postman or URL. This gets the courses taken by a student via the student ID

`GET /api/student/:id/courses`

```json
{
  "id": "523169",
  "course1": "250355",
  "course2": "878489",
  "course3": "183799"
}
```

### Courses

### When clicked on `courses`

#### On the frontend, you are taken to another page that shows you a table with all the courses in the database. It shows the course ID, name, instructor, meeting day, meeting time and the building the course is taught in

#### On the backend, it executes the following

`GET /api/courses`

### On clicking the course ID

#### On the frontend, you are taken to another page that shows the details of that course

#### On the backend, it executes the following

`GET /api/course/:id`

### On clicking the building ID

#### On the frontend, you are taken to another page that shows the details of the building

#### On the backend, it executes the following

`GET /api/building/:id`

### On clicking the pencil icon (edit)

#### On the frontend, you are taken to another page which has a prefilled form with the values of that course. Here you can edit the details of the course. Be sure to fill every field otherwise you won't be allowed to save the changes.

#### On the backend, it executes the following

`PUT /api/course/:id`

### On clicking the trash icons (delete)

#### On the frontend, nothing really exciting happens. The page refreshes and the course you deleted, well, gets deleted

#### On the backend, it executes the following

`DELETE /api/course/:id`

### On clicking the add a course link

#### On the frontend, you are taken to another page with a form to fill out to add a new course. Make sure to fill out all the fields, otherwise you won't be allowed to add the student.

#### On the backend, it executes the following

`POST /api/course`

### Buildings

### When clicked on `buildings`

#### On the frontend, you are taken to another page that shows you a table with all the buildings in the database. It shows the building ID, name, address, and zipcode

#### On the backend, it executes the following

`GET /api/buildings`

### On clicking the building ID

#### On the frontend, you are taken to another page that shows the details of the building

#### On the backend, it executes the following

`GET /api/building/:id`

### On clicking the pencil icon (edit)

#### On the frontend, you are taken to another page which has a prefilled form with the values of that building. Here you can edit the details of the building. Be sure to fill every field otherwise you won't be allowed to save the changes.

#### On the backend, it executes the following

`PUT /api/building/:id`

### On clicking the trash icons (delete)

#### On the frontend, nothing really exciting happens. The page refreshes and the building you deleted, well, gets deleted

#### On the backend, it executes the following

`DELETE /api/building/:id`

### On clicking the add a building link

#### On the frontend, you are taken to another page with a form to fill out to add a new building. Make sure to fill out all the fields, otherwise you won't be allowed to add the student.

#### On the backend, it executes the following

`POST /api/building`

### Advanced Operation (retrieve a list of items with filter options)

### On clicking the `Get courses in each building`

#### On the frontend, it takes you to another page that contains a dropdown populated with all the buildings in the database. Once you select a building and click on the 'view courses' button a new page shows you a table of the courses held in that building.

#### On the backend, it takes the id of the building you select, retrives all the courses and then filters the courses to find which course contains that building id

`GET /courses/:building_id`

#### On entering an invalid url

```json
{
  "code": 400,
  "error": "Bad request",
  "message": "Incorrect URL"
}
```

#### On entering an invalid resource ID

```json
{
  "code": 400,
  "error": "failed to load resource",
  "message": "Incorrect URL"
}
```
