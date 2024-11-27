## Dentist Fantastic 

### 📖 Project Description  
The **Dentist Fantastic** client is a React-based front-end application designed to provide users with a seamless interface for managing services, reviews, and user accounts for a dental clinic. It integrates Firebase authentication and ensures secure data handling with JWT-protected routes.  

---

### 🌐 Live Site  
Explore the live project here: [Dentist Fantastic](https://dentist-fantastic.web.app/)

---

### 🚀 Features and Functionalities  

- **Service Management**  
  - Users can add new services to the system.  
  - Logged-in users are required to add or modify services.  

- **Review System**  
  - Users can review services, update reviews, and delete their reviews.  
  - User reviews are securely stored and fetched using JWT-protected APIs.  

- **User Authentication**  
  - Register or log in using email and password.  
  - Option to log in with a Google account.  

---

### 🛠️ Technologies Used  

- **Frontend**: React.js  
- **UI Library**: DaisyUI, Tailwind CSS  
- **Routing**: React Router DOM  
- **Notifications**: React Hot Toast  
- **Image Viewer**: React Photo View  
- **Authentication**: Firebase  
- **Helmet**: React Helmet for SEO optimization  

---

### ⚙️ Installation and Setup  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/rakibul58/dentist-fantastic-client.git  
   ```  

2. Navigate to the project directory:  
   ```bash  
   cd dentist-fantastic-client  
   ```  

3. Install dependencies:  
   ```bash  
   npm install  
   ```  

4. Start the development server:  
   ```bash  
   npm start  
   ```  

The app will run locally at [http://localhost:3000](http://localhost:3000).

---

### 🔐 Environment Variables  

Create a `.env.local` file in the root directory and add the following variables:  

```plaintext  
REACT_APP_FIREBASE_API_KEY=your-firebase-api-key  
REACT_APP_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain  
REACT_APP_FIREBASE_PROJECT_ID=your-firebase-project-id  
REACT_APP_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket  
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id  
REACT_APP_FIREBASE_APP_ID=your-firebase-app-id  
```  

Replace `your-firebase-*` values with your Firebase project configuration.

---

### 📜 License  

This project is open-source and available under the MIT License.

---
