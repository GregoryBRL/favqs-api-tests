# Favqs API Test Suite

This project contains automated API tests for [Favqs](https://favqs.com/api/) using **TypeScript**, **Axios**, and **Jest**. It verifies user creation, data retrieval, and user updates via HTTP requests.

---

## 🧪 Technologies Used

- **Node.js** — JavaScript runtime  
- **TypeScript** — Typed superset of JavaScript  
- **Axios** — HTTP client for API requests  
- **Jest** — Testing framework  
- **dotenv** — Environment variable management  

---

## 📦 Why There's No `requirements.txt`

In Python projects, `requirements.txt` lists dependencies.  
In Node.js projects like this one, all dependencies are managed via `package.json`.

To install everything:

```
npm install
```

This reads `package.json` and installs all required modules automatically.

---

## 🚀 How to Run Tests

1. Clone the repository  
2. Create a `.env` file in the root with your Favqs API key:

```
API_KEY=your_favqs_api_key_here
```

3. Run the tests:

```
npm test
```

---

## 📁 Project Structure

```
favqs-api-tests/
├── .env
├── .gitignore
├── jest.config.js
├── package.json
├── tsconfig.json
├── tests/
│   └── user.test.ts
```

---

## ✅ What’s Tested

### 1. Create User
- Sends `POST /users` request  
- Verifies `login` in response  

### 2. Update User
- Sends `PUT /users/:login` request  
- Verifies updated `login` 

---

## 📌 Notes

- All requests include the required `Authorization` and `User-Token` headers
- Axios errors are logged for debugging failed requests

---

## 🛠️ To Customize

You can easily extend this suite to test quote endpoints, authentication flows, or error handling. Just add new `.test.ts` files in the `tests/` folder.

---

## 🧠 Author

Built by Roman Bozhenko — QA Engineer with expertise in modular test design and API validation.
