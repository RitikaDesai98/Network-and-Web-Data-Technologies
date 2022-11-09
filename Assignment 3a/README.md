### University Students and Buildings Record

#### This website allows you to `get`, `post`, `put` and `delete` the university students and buildings.

#### To do so, follow the steps below

1. Go to Postman desktop app and enter the link https://rhd11-assignment3a.glitch.me/ in the workspace request url bar.
2. On the left side, select one of the methods `get`, `post`, `put` or `delete` and according enter the url specified below to get the corresponding results

#### Get all students

`GET /students`

```json
{
  "id": 523169,
  "first_name": "Harvey",
  "last_name": "Specter",
  "courses": [
    {
      "course1": "Ethics Law",
      "course2": "Contracts Law",
      "course3": "Intellectual Law"
    }
  ]
}
```

#### Get student by ID

`GET /student/:id`

```json
{
  "id": "523169",
  "student": [
    {
      "id": 523169,
      "first_name": "Harvey",
      "last_name": "Specter",
      "courses": [
        {
          "course1": "Ethics Law",
          "course2": "Contracts Law",
          "course3": "Intellectual Law"
        }
      ]
    }
  ]
}
```

#### Get the courses taken by a student by student ID

`GET /student/:id/courses`

```json
{
  "id": "523169",
  "courses": [
    {
      "course1": "Ethics Law",
      "course2": "Contracts Law",
      "course3": "Intellectual Law"
    }
  ]
}
```

#### Add a student

`POST \student`

```json
Created
```

#### Update a student by ID

`PUT \student\:id`

```json
OK
```

#### Delete student by ID

`DELETE \student\:id`

```json
OK
```

#### Get all buildings

`GET /buildings`

```json
{
  "id": 463174,
  "name": "Cathedral of Learning",
  "address": "4200 Fifth Avenue",
  "zipcode": 15260
}
```

#### Get building by ID

`GET \building\:id`

```json
{
  "id": "463174",
  "building": [
    {
      "id": 463174,
      "name": "Cathedral of Learning",
      "address": "4200 Fifth Avenue",
      "zipcode": 15260
    }
  ]
}
```

#### Add a building

`POST \building`

```json
Created
```

#### Update a building by ID

`PUT \building\:id`

```json
OK
```

#### Delete a building by ID

`DELETE \building\:id`

```json
OK
```

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
