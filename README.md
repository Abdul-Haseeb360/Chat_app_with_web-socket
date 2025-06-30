# Web Socket.IO Group Chat App

A real-time group chat application built with **Node.js**, **Express**, and **Socket.IO**. Users can join the chat, enter their name, and send messages that are instantly broadcast to all connected users.

## Features

- Real-time group chat with instant message delivery
- Users can set their display name
- Responsive and clean chat UI
- Built with modern JavaScript and Socket.IO

## Demo

![Chat Demo Screenshot](screenshot.png) <!-- Add a screenshot if available -->

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Abdul-Haseeb360/Chat_app_with_web-socket.git
   cd Chat_app_with_web-socket
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```

### Running the App

Start the server:
```sh
npm start
```

Open your browser and go to [http://localhost:8000](http://localhost:8000)

## Project Structure

```
├── index.js            # Main server file (Express + Socket.IO)
├── package.json        # Project metadata and dependencies
├── public/
│   └── index.html      # Client-side chat UI
├── .gitignore          # Node modules and other ignored files
└── node_modules/       # Installed dependencies
```

## Usage
- Enter your name in the input field.
- Type your message and press **Send** or hit **Enter**.
- All messages will appear in the chat window with the sender's name.

## Technologies Used
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Socket.IO](https://socket.io/)

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License. 