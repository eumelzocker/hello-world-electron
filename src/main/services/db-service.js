const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');
const { app } = require('electron');

class DbService {
  constructor() {
    this.db = null;
    this.initDb();
  }

  initDb() {
    // Get the user data directory
    const userDataPath = app ? app.getPath('userData') : './';
    const dbPath = path.join(userDataPath, 'database.sqlite');

    // Create the database connection
    this.db = new Database(dbPath);

    // Create table if not exists
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        text TEXT NOT NULL
      )
    `);

    // Insert initial data if the table is empty
    const count = this.db.prepare('SELECT COUNT(*) as count FROM messages').get();
    if (count.count === 0) {
      this.db.prepare('INSERT INTO messages (text) VALUES (?)').run('Hello from SQLite!');
    }
  }

  getMessage() {
    try {
      const message = this.db.prepare('SELECT text FROM messages ORDER BY id DESC LIMIT 1').get();
      return message ? message.text : 'No message found';
    } catch (error) {
      console.error('Error getting message:', error);
      return 'Error retrieving message';
    }
  }
}

module.exports = new DbService();
