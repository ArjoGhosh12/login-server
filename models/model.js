const pool = require('../config/db');

// 🔍 Find user by email
async function findUserByEmail(email) {
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
  return result.rows[0];
}

// ➕ Create a new user
async function createUser(name, email, password) {
  await pool.query(
    "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
    [name, email, password]
  );
}

module.exports = { findUserByEmail, createUser };

