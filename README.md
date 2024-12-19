# **Innovative Solution for Inter IIIT Tech Meet 13.0**

This project was developed as a solution to a complex and competitive problem statement presented at **Inter IIIT Tech Meet 13.0**. The challenge involved creating a comprehensive system to **predict cricket player performances** and recommend **winning fantasy cricket teams** for Dream11. This solution had to consider a multitude of factors, including historical player data, match contexts, and team strategies, all while delivering reliable, real-time outputs.

## **Problem Statement**

The problem required:
1. **Player Performance Prediction**: Develop a system to accurately predict cricket players' performances for upcoming matches based on historical data and contextual variables like venue, pitch, and weather conditions.
2. **Fantasy Team Optimization**: Recommend the best possible team composition adhering to Dream11 constraints.
3. **Data Challenges**: Handle edge cases such as retired players, future matches with unknown variables, and missing or incomplete data.

We tackled this problem using a **full-stack solution** powered by **state-of-the-art machine learning** and robust web technologies.

---

## 🌟 Project Overview  
This application integrates cutting-edge technologies across **frontend**, **backend**, and **machine learning** domains to deliver a seamless, feature-rich experience for cricket enthusiasts. It consists of:

1. **Frontend**: Built with **Next.js** and **Tailwind CSS** for a dynamic, responsive, and visually appealing user interface.
2. **Backend**: Powered by a robust **Node.js** API layer to manage data processing and communication.
3. **Machine Learning**: Employs an **XGBoost model** to predict player performance based on extensive cricket datasets.

---

## 🖥️ Tech Stack  

| Technology       | Description                           | Logo          |
|-------------------|---------------------------------------|---------------|
| **Next.js**       | Frontend framework for React.         | <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" alt="Next.js" width="40"> |
| **Tailwind CSS**  | Utility-first CSS framework.          | <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS" width="40"> |
| **TypeScript**    | Typed superset of JavaScript.         | <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript" width="40"> |
| **Node.js**       | Backend runtime environment.          | <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js" width="40"> |
| **XGBoost**       | Gradient boosting machine learning.   | <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/XGBoost_logo.png" alt="XGBoost" width="40"> |
| **OpenAI API**    | Chatbot for answering team queries.   | <img src="https://commons.wikimedia.org/wiki/File:OpenAI_Logo.svg#/media/File:OpenAI_Logo.svg" alt="OpenAI" width="40"> |

---

## 🎨 Frontend  
The frontend was developed using **Next.js** for its server-side rendering capabilities and enhanced performance. **Tailwind CSS** was utilized to achieve a clean, responsive, and user-friendly design. The interface provides:  
- Interactive inputs for match details and player preferences.  
- Visualizations of predicted scores and optimal team configurations.  
- Chatbot integration for user queries.  

---

## 🔧 Backend  
The backend is implemented with **Node.js**, handling data preprocessing and interactions between the user interface and machine learning models. APIs are optimized for low-latency responses, ensuring smooth user experiences during real-time interactions.

---

## 🤖 Machine Learning  
Our **XGBoost**-based model was meticulously crafted to predict player performances. Key highlights include:  
- **Dataset**: Trained on **CricSheet ball-by-ball data** spanning 2001–2024.  
- **Feature Engineering**: Incorporated metrics like venue, pitch, weather, and player momentum.  
- **Experiments**: Tested advanced models like **Neural Networks**, **LightGBM**, **CatBoost**, and **N-BEATS**, but XGBoost consistently outperformed others.  
- **Challenges**:  
  - Handling **retired players** and ensuring accurate predictions for their historical performance.  
  - Managing **future dates** effectively to avoid data leakage.  

[**View the Machine Learning Model**](https://www.kaggle.com/code/adityakumar2003/dream11-final-model)

---

## 🧠 Chatbot  
To enhance usability, a **chatbot powered by OpenAI API** was integrated, allowing users to query the rationale behind player selections. For example:  
> *"Why was MS Dhoni chosen for this match?"*  
The chatbot explains player selection based on recent form, historical performance, and contextual match factors.

---

## **Key Features**

### **Frontend**
- **User-Centric Design**: Built for ease of use and accessibility.
- **Dynamic Fantasy Recommendations**: Displays optimized fantasy teams based on real-time model predictions.
- **Seamless Navigation**: Intuitive routing and navigation built with Next.js' powerful app router.

### **Backend**
- **Data-Driven APIs**: APIs handle player performance data, team constraints, and real-time predictions.
- **Scalability**: Designed to handle large traffic with high concurrency.

### **Machine Learning**
- **Player Performance Predictions**: The XGBoost model predicts fantasy points for players with high accuracy.
- **Fantasy Team Optimization**: Recommends team combinations within Dream11's constraints.
- **Continuous Improvements**: The model can be updated with fresh data to improve accuracy over time.

---

## **Challenges Faced**
- **Handling Retired Players**:  
  Incorporating logic to identify retired players and exclude them from fantasy team recommendations while maintaining historical data integrity.  
- **Future Match Predictions**:  
  Developing fallback strategies for missing or speculative inputs like pitch conditions, weather forecasts, or team line-ups.  
- **Data Cleaning and Feature Engineering**:  
  Processing and merging large datasets required significant computational resources and careful feature selection.

---

Here’s the updated **Demos** section with larger images displayed one below the other:

---

## 📸 Demos  

**Screenshots of the Application**  

**Screenshot 1**  
![Demo1](public/Screenshot1.png)  

**Screenshot 2**  
![Demo2](public/Screenshot2.png)  

**Screenshot 3**  
![Demo3](public/Screenshot3.png)  

**Demo Video**  
[Watch the Full Demo](public/demo.mp4)  

---

## **How to run in localhost?**

### Development Environment Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/project.git
   cd project
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   Access the app at [localhost](http://localhost:3000).

### Backend Setup
- Start the backend server:
  Refer to [Edge11 Backend](https://github.com/hadityakumar/Edge11backend)

---

## 🔗 Connect with Me  
[LinkedIn](https://linkedin.com/in/hadityakumar)

---

With this project, we have demonstrated the fusion of cricket analytics, machine learning, and modern web technologies to solve a real-world problem innovatively. 












<!-- Here’s the updated README.md with smaller icons for a cleaner look:

---

# 🏏 Fantasy Cricket Team Generator for Dream11

### 🚀 Problem Statement - Inter IIIT Tech Meet 13.0  
This project was developed as part of the **Inter IIIT Tech Meet 13.0** to tackle a challenging problem: **Create an AI-powered solution to generate winning fantasy cricket teams on Dream11.** The objective was to predict player performance based on historical cricket data and contextual factors, ensuring the selection of an optimal team lineup for maximum points.

---

## 🌟 Project Overview  
This application integrates cutting-edge technologies across **frontend**, **backend**, and **machine learning** domains to deliver a seamless, feature-rich experience for cricket enthusiasts. It consists of:

1. **Frontend**: Built with **Next.js** and **Tailwind CSS** for a dynamic, responsive, and visually appealing user interface.
2. **Backend**: Powered by a robust **Node.js** API layer to manage data processing and communication.
3. **Machine Learning**: Employs an **XGBoost model** to predict player performance based on extensive cricket datasets.

---

## 🖥️ Tech Stack  

| Technology       | Description                           | Logo          |
|-------------------|---------------------------------------|---------------|
| **Next.js**       | Frontend framework for React.         | <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" alt="Next.js" width="40"> |
| **Tailwind CSS**  | Utility-first CSS framework.          | <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS" width="40"> |
| **TypeScript**    | Typed superset of JavaScript.         | <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript" width="40"> |
| **Node.js**       | Backend runtime environment.          | <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js" width="40"> |
| **XGBoost**       | Gradient boosting machine learning.   | <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/XGBoost_logo.png" alt="XGBoost" width="40"> |
| **OpenAI API**    | Chatbot for answering team queries.   | <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/OpenAI_Logo.svg" alt="OpenAI" width="40"> |

---

## 🎨 Frontend  
The frontend was developed using **Next.js** for its server-side rendering capabilities and enhanced performance. **Tailwind CSS** was utilized to achieve a clean, responsive, and user-friendly design. The interface provides:  
- Interactive inputs for match details and player preferences.  
- Visualizations of predicted scores and optimal team configurations.  
- Chatbot integration for user queries.  

---

## 🔧 Backend  
The backend is implemented with **Node.js**, handling data preprocessing and interactions between the user interface and machine learning models. APIs are optimized for low-latency responses, ensuring smooth user experiences during real-time interactions.

---

## 🤖 Machine Learning  
Our **XGBoost**-based model was meticulously crafted to predict player performances. Key highlights include:  
- **Dataset**: Trained on **CricSheet ball-by-ball data** spanning 2001–2024.  
- **Feature Engineering**: Incorporated metrics like venue, pitch, weather, and player momentum.  
- **Experiments**: Tested advanced models like **Neural Networks**, **LightGBM**, **CatBoost**, and **N-BEATS**, but XGBoost consistently outperformed others.  
- **Challenges**:  
  - Handling **retired players** and ensuring accurate predictions for their historical performance.  
  - Managing **future dates** effectively to avoid data leakage.  

[**View the Machine Learning Model Repository**](#)

---

## 🧠 Chatbot  
To enhance usability, a **chatbot powered by OpenAI API** was integrated, allowing users to query the rationale behind player selections. For example:  
> *"Why was MS Dhoni chosen for this match?"*  
The chatbot explains player selection based on recent form, historical performance, and contextual match factors.

---

## 🛠️ Challenges Overcome  
- **Data Quality**: Cleaning and merging inconsistent historical datasets.  
- **Feature Creation**: Extracting actionable insights from raw data.  
- **Model Generalization**: Ensuring predictions remain reliable across varied match scenarios.  

---

## 📸 Demos  

**Screenshots of the Application**  
| Screenshot 1   | Screenshot 2   | Screenshot 3   |  
|----------------|----------------|----------------|  
| ![Demo1](#)   | ![Demo2](#)   | ![Demo3](#)   |  

**Demo Video**  
[Watch the Full Demo](#)

---

## 🔗 Connect with Me  
[![LinkedIn](https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png) LinkedIn](https://linkedin.com/in/your-profile)

---

This project exemplifies the fusion of cricket analytics, machine learning, and modern web technologies to solve real-world problems innovatively. -->

<!-- # **Innovative Solution for Inter IIIT Tech Meet 13.0**

This project was developed as a solution to a complex and competitive problem statement presented at **Inter IIIT Tech Meet 13.0**. The challenge involved creating a comprehensive system to **predict cricket player performances** and recommend **winning fantasy cricket teams** for Dream11. This solution had to consider a multitude of factors, including historical player data, match contexts, and team strategies, all while delivering reliable, real-time outputs.

---

## **Problem Statement**

The problem required:
1. **Player Performance Prediction**: Develop a system to accurately predict cricket players' performances for upcoming matches based on historical data and contextual variables like venue, pitch, and weather conditions.
2. **Fantasy Team Optimization**: Recommend the best possible team composition adhering to Dream11 constraints.
3. **Data Challenges**: Handle edge cases such as retired players, future matches with unknown variables, and missing or incomplete data.

We tackled this problem using a **full-stack solution** powered by **state-of-the-art machine learning** and robust web technologies.

---

## **Technologies Used**

### **Frontend**
![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js&style=flat-square)  
![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript&style=flat-square)  
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-blue?logo=tailwindcss&style=flat-square)  

The frontend leverages **Next.js** for its hybrid static and server-side rendering capabilities, **TypeScript** for type-safe development, and **Tailwind CSS** for rapid, modern UI design. The interface is fully responsive, ensuring seamless user experiences across devices.

---

### **Backend**
![Node.js](https://img.shields.io/badge/Node.js-green?logo=node.js&style=flat-square)  
![Express.js](https://img.shields.io/badge/Express.js-grey?logo=express&style=flat-square)  

The backend, built with **Node.js** and **Express.js**, provides a scalable and secure API layer. Key features include:
- **Dynamic Data Handling**: Fetches and processes large datasets efficiently.
- **Secure Authentication**: Implements robust session and token-based authentication mechanisms.
- **Integration with ML Models**: Connects seamlessly with the machine learning APIs for real-time predictions.

---

### **Machine Learning**
![Python](https://img.shields.io/badge/Python-blue?logo=python&style=flat-square)  
![XGBoost](https://img.shields.io/badge/XGBoost-orange?logo=&style=flat-square)  
![Flask](https://img.shields.io/badge/Flask-black?logo=flask&style=flat-square)  

The heart of the project lies in its **Machine Learning Model**:
- **Final Model**: Developed using **XGBoost**, which provided the most accurate results compared to other models we experimented with, including **Neural Networks**, **LightGBM**, **CatBoost**, and **N-BEATS**.
- **Data Source**: Trained on the **Cricsheet ball-by-ball data** from 2001 to 2024, containing detailed match information.
- **Challenges**:
  - **Retired Players**: Devising strategies to handle players no longer active in cricket while ensuring realistic recommendations.
  - **Future Matches**: Predicting outcomes for matches where conditions like team composition, pitch, and weather are yet unknown.

A Flask-based REST API serves the model, making it accessible to the backend and frontend.

Explore the full machine learning repository [here](#).

---

## **Key Features**

### **Frontend**
- **User-Centric Design**: Built for ease of use and accessibility.
- **Dynamic Fantasy Recommendations**: Displays optimized fantasy teams based on real-time model predictions.
- **Seamless Navigation**: Intuitive routing and navigation built with Next.js' powerful app router.

### **Backend**
- **Data-Driven APIs**: APIs handle player performance data, team constraints, and real-time predictions.
- **Scalability**: Designed to handle large traffic with high concurrency.

### **Machine Learning**
- **Player Performance Predictions**: The XGBoost model predicts fantasy points for players with high accuracy.
- **Fantasy Team Optimization**: Recommends team combinations within Dream11's constraints.
- **Continuous Improvements**: The model can be updated with fresh data to improve accuracy over time.

---

## **Challenges Faced**
- **Handling Retired Players**:  
  Incorporating logic to identify retired players and exclude them from fantasy team recommendations while maintaining historical data integrity.  
- **Future Match Predictions**:  
  Developing fallback strategies for missing or speculative inputs like pitch conditions, weather forecasts, or team line-ups.  
- **Data Cleaning and Feature Engineering**:  
  Processing and merging large datasets required significant computational resources and careful feature selection.

---

## **Getting Started**

### Development Environment Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/project.git
   cd project
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   Access the app at [http://localhost:3000](http://localhost:3000).

### Backend Setup
- Start the backend server:
  ```bash
  npm run start
  ```

### Machine Learning API
- Clone the ML model repository:
  ```bash
  git clone https://github.com/your-repo/ml-model.git
  cd ml-model
  ```
- Install Python dependencies:
  ```bash
  pip install -r requirements.txt
  ```
- Start the Flask API server:
  ```bash
  python app.py
  ```

---

## **Demo**

### Images  
| ![Demo Image 1](https://via.placeholder.com/300x200) | ![Demo Image 2](https://via.placeholder.com/300x200) | ![Demo Image 3](https://via.placeholder.com/300x200) |  
|:---------------------------------------------------:|:---------------------------------------------------:|:---------------------------------------------------:|

### Video  
[![Watch the Demo](https://via.placeholder.com/300x200)](https://www.youtube.com/watch?v=dQw4w9WgXcQ)  

---

## **Connect with Me**  

For professional inquiries or collaborations:  

[![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?logo=linkedin&style=flat-square)](https://linkedin.com/in/your-linkedin-profile)

--- 

This README is structured to emphasize the problem-solving aspect of your project, the technologies used, and the practical challenges faced, making it a standout presentation for technical audiences. -->