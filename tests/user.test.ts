import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const API_BASE = 'https://favqs.com/api';
const API_KEY = process.env.API_KEY!;
const headers = {
  Authorization: `Token token="${API_KEY}"`
};

const timestamp = Date.now().toString().slice(-6);
let userToken = '';
let login = `test_user_${timestamp}`;
let email = `test_${timestamp}@example.com`;

describe('Favqs API User Tests', () => {
  test('Create user and verify login', async () => {
    const createRes = await axios.post(`${API_BASE}/users`, {
      user: { login, email, password: 'Test1234' }
    }, { headers });
    expect(createRes.status).toBe(200);
    userToken = createRes.data['User-Token'];
    expect(userToken).toBeDefined();

    const getRes = await axios.get(`${API_BASE}/users/${login}`, {
      headers: {
        ...headers,
        'User-Token': userToken
      }
    });

    expect(getRes.status).toBe(200);
    expect(getRes.data.login).toBe(login);
  });

  test('Update user and verify new login', async () => {
    const newLogin = login + '_upd';
    const newEmail = `updated_${timestamp}@example.com`;

    const updateRes = await axios.put(`${API_BASE}/users/${login}`, {
      user: { login: newLogin, email: newEmail }
    }, {
      headers: {
        ...headers,
        'User-Token': userToken
      }
    });

    expect(updateRes.status).toBe(200);

    const getRes = await axios.get(`${API_BASE}/users/${newLogin}`, {
      headers: {
        ...headers,
        'User-Token': userToken
      }
    });
    console.log('Get Updated User Response:', getRes.data);
    expect(getRes.status).toBe(200);
    expect(getRes.data.login).toBe(newLogin);
  });
});