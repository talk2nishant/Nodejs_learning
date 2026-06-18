export default function home() {
    return `
    <html>
      <head>
        <title>Home</title>
      </head>
      <body>
        <h1>Welcome to the Login Page</h1>
        <form action="/submit" method="POST">
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" required><br><br>
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required><br><br>
          <input type="submit" value="Login">
        </form>
      </body>
    </html>
  `;
}