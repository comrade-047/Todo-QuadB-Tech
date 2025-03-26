# To-Do List App

A React-Redux-based To-Do List application with authentication, error handling, and weather API integration.

## Features
- **User Authentication**: Login system with Redux state management.
- **Task Management**: Add, delete, and sort tasks based on priority.
- **Weather Integration**: Fetch weather data for outdoor tasks.
- **Error Handling**: Redirects to an error page when API requests fail.
- **Persistent Storage**: Saves tasks using `localStorage`.

## Technologies Used
- React.js
- Redux Toolkit
- React Router
- Tailwind CSS
- Lucide React (for icons)
- Weather API
- LocalStorage

## Folder Structure
```
/src
│── apis/                  # API request functions
│── assets/                # Static assets (images, icons, etc.)
│── components/            # Reusable UI components
│   ├── InputField/        # Task input field component
│   ├── Button/            # Custom button component
│   ├── ErrorPage/         # Error handling UI
│   ├── Login/             # Authentication UI
│   ├── TaskInput/         # Task input container
│   ├── TodoList/          # To-Do list components
│── redux/                 # Redux store and slices
│   ├── store.js           # Redux store configuration
│   ├── authSlice.js       # Authentication state management
│   ├── taskSlice.js       # Task state management
│── App.jsx                # Main application component
|-- App.css
│── main.jsx               # Entry point of the app
│── index.css              # Global styles
```

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## Usage
- Login to access the task manager.
- Add tasks and specify if they are outdoor.
- If an outdoor task is added, weather data will be fetched.
- If fetching weather fails, the error page will be shown.
- Click "Go Back Home" on the error page to return.

## Contributing
Pull requests are welcome! Please follow standard coding conventions and create issues for bug fixes or improvements.

## License
This project is licensed under the MIT License.

