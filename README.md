# Urban Scan
Welcome to Urban Scan, a real-time obstacle mapping web application built using React, Firebase and Tailwind CSS. Urban Scan allows users to mark obstacles on the map in real-time using their live location, along with photo proofs. Users can seamlessly navigate through the streets, reducing accident rates and allowing authorities to take action on priority basis.


# Features

- **Real-Time**: Live location of user is fetched and Google Maps API is used for real-time navigation and detection.
- **Photo/Video Inputs**: Users can submit photo or video proofs along with descriptions for better credibility.
- **Login/Siqnup Support**: User account creation and login facility is also incorporated.
- **Fetching Obstacles**: Database of obstacle is maintained to fetch all nearby obstacles by all users.

# Technologies Used

- React.js
- Tailwind CSS
- Firebase
- Google Maps API

# Getting Started

Follow these instructions to get the project up and running on your local machine:

1. **Clone the repository**: (git clone https://github.com/your-username/urban-scan.git)

2. **Navigate to the project directory**: (cd urban-scan)

3. **Install dependencies**: (npm install) 

4. **Add Google Maps API key**:
In the .env file in the root directory: (REACT_APP_URBAN_SCAN_API_KEY=your-api-key)

5. **Start the development server**: (npm start)
Open your browser and navigate to http://localhost:3000 to view the application.

# Usage
- Upon opening the application, users are prompted to allow location access to view the map around their current location.
- Click on the map to mark a landmark.
- Fill in the type of landmark, add a description (optional), and upload a photo.
- Click the submit button to add the landmark to the map.

# Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:
- Fork the repository.
- Create a new branch (git checkout -b feature/new-feature).
- Make your changes.
- Commit your changes (git commit -m "Add new feature").
- Push to the branch (git push origin feature/new-feature).
- Open a pull request.

# License
This project is licensed under the MIT License.
