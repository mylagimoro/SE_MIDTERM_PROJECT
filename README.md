# Clinic Appointment System — Full CRUD API

**Purpose:** Deliver a working Node.js + Express + MongoDB (Mongoose) REST API for a Clinic / Appointment system. Includes Patients, Doctors, Appointments, seed data, example requests, and a Postman collection.

---

## Endpoints Table

| **Entity**       | **Method** | **Endpoint**            | **Description**                                          |
| ---------------- | ---------- | ----------------------- | -------------------------------------------------------- |
| **Patients**     | POST       | `/api/patients`         | Create a new patient                                     |
|                  | GET        | `/api/patients`         | Retrieve all patients                                    |
|                  | GET        | `/api/patients/:id`     | Retrieve a patient by ID                                 |
|                  | PUT        | `/api/patients/:id`     | Update a patient by ID                                   |
|                  | DELETE     | `/api/patients/:id`     | Delete a patient by ID                                   |
| **Doctors**      | POST       | `/api/doctors`          | Create a new doctor                                      |
|                  | GET        | `/api/doctors`          | Retrieve all doctors                                     |
|                  | GET        | `/api/doctors/:id`      | Retrieve a doctor by ID                                  |
|                  | PUT        | `/api/doctors/:id`      | Update a doctor by ID                                    |
|                  | DELETE     | `/api/doctors/:id`      | Delete a doctor by ID                                    |
| **Appointments** | POST       | `/api/appointments`     | Create a new appointment (checks for schedule conflicts) |
|                  | GET        | `/api/appointments`     | Retrieve all appointments (with patient & doctor info)   |
|                  | GET        | `/api/appointments/:id` | Retrieve an appointment by ID                            |
|                  | PUT        | `/api/appointments/:id` | Update an appointment (checks for overlap)               |
|                  | DELETE     | `/api/appointments/:id` | Delete an appointment by ID                              |

---

## Example Base URL

https://se-midterm-project.onrender.com

Example full request: `GET https://se-midterm-project.onrender.com/api/patients`

---

## Sample JSON Requests & Responses

### 🧍‍♂️ Patients

**POST /api/patients** — Create Patient

```json

{
  "name": "Juan Dela Cruz",
  "birthDate": "1990-05-01",
  "email": "juan@example.com",
  "phone": "09171234567"
}
```

**GET /api/patients** — Retrieve All Patients

```json

[
  {
    "_id": "671a8fa04fc9a1b5c47c1e32",
    "name": "Juan Dela Cruz",
    "email": "juan@example.com",
    "phone": "09171234567"
  }
]
```

### 🩺 Doctors

**POST /api/doctors** — Create Doctor

```json

{
  "name": "Dr. Ana Cruz",
  "specialty": "Pediatrics"
}
```

**GET /api/doctors** — Retrieve All Doctors

```json

[
  {
    "_id": "671a90524fc9a1b5c47c1e55",
    "name": "Dr. Ana Cruz",
    "specialty": "Pediatrics"
  }
]
```

---

### 📅 Appointments

**POST /api/appointments** — Create Appointment

```json

{
  "patientId": "671a8fa04fc9a1b5c47c1e32",
  "doctorId": "671a90524fc9a1b5c47c1e55",
  "startAt": "2025-10-25T09:00:00.000Z",
  "endAt": "2025-10-25T09:30:00.000Z",
  "notes": "Initial consultation"
}
```


**GET /api/appointments** — Retrieve All Appointments

```json

[
  {
    "_id": "671a91b24fc9a1b5c47c1e70",
    "patientId": {
      "_id": "671a8fa04fc9a1b5c47c1e32",
      "name": "Juan Dela Cruz"
    },
    "doctorId": {
      "_id": "671a90524fc9a1b5c47c1e55",
      "name": "Dr. Ana Cruz"
    },
    "startAt": "2025-10-25T09:00:00.000Z",
    "endAt": "2025-10-25T09:30:00.000Z",
    "notes": "Initial consultation"
  }
]
```



