# 🌟 Discord Bots Examples 🌟

This repository contains basic examples of how to create a Discord bot in different programming languages. Each bot is a minimal implementation to demonstrate how to connect to Discord and respond to a command.

## 📚 Supported Languages
- 🐍 [Python](examples/python/bot.py)
- 📜 [JavaScript](examples/javascript/bot.js)
- 🔷 [TypeScript](examples/typescript/bot.ts)
- 🦀 [Rust](examples/rust/bot.rs)

---

## ⚙️ Installation and Setup

### Step 1: 🚀 Create a Discord Bot
1. Go to the [Discord Developer Portal](https://discord.com/developers/applications).
2. Click "New Application" and give your bot a name.
3. Navigate to the "Bot" tab, click "Add Bot," and confirm.
4. Copy the bot token.

### Step 2: 🔗 Add the Bot to Your Server
1. Go to the "OAuth2" tab and select the "URL Generator."
2. Under "Scopes," select `bot`.
3. Under "Bot Permissions," select the necessary permissions (e.g., `Send Messages`, `Read Message History`).
4. Copy the generated URL, paste it into your browser, and invite the bot to your server.

### Step 3: 🛠️ Run the Bot
1. Clone this repository:
   ```bash
   git clone https://github.com/v3laDev/Discord-Bots-Examples.git
   cd Discord-Bots-Examples
   ```
2. Navigate to the desired language folder and follow the instructions.

---

## 💻 Examples

### 🐍 [Python](examples/python/bot.py)
**Dependencies**: [discord.py](https://pypi.org/project/discord.py/)

1. Install dependencies:
   ```bash
   pip install discord.py
   ```
2. Replace `YOUR_TOKEN_HERE` in `bot.py` with your bot's token.
3. Run the bot:
   ```bash
   python bot.py
   ```

---

### 📜 [JavaScript](examples/javascript/bot.js)
**Dependencies**: [discord.js](https://www.npmjs.com/package/discord.js)

1. Install dependencies:
   ```bash
   npm install discord.js
   ```
2. Replace `YOUR_TOKEN_HERE` in `bot.js` with your bot's token.
3. Run the bot:
   ```bash
   node bot.js
   ```

---

### 🔷 [TypeScript](examples/typescript/bot.ts)
**Dependencies**: [discord.js](https://www.npmjs.com/package/discord.js)

1. Install dependencies:
   ```bash
   npm install discord.js
   ```
2. Replace `YOUR_TOKEN_HERE` in `bot.ts` with your bot's token.
3. Compile and run the bot:
   ```bash
   tsc bot.ts
   node bot.js
   ```

---

### 🦀 [Rust](examples/rust/bot.rs)
**Dependencies**: [serenity](https://crates.io/crates/serenity)

1. Add `serenity` to `Cargo.toml`:
   ```toml
   [dependencies]
   serenity = "0.11"
   tokio = { version = "1", features = ["full"] }
   ```
2. Replace `YOUR_TOKEN_HERE` in `bot.rs` with your bot's token.
3. Build and run the bot:
   ```bash
   cargo run
   ```

---

## 🤝 Contributing
Feel free to open issues or submit pull requests if you want to contribute to this repository.

## 📜 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

✨ Happy coding!
