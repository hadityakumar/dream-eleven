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
| **Next.js**       | Frontend framework for React.         | ![Next.js](https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg) |
| **Tailwind CSS**  | Utility-first CSS framework.          | ![Tailwind](https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg) |
| **TypeScript**    | Typed superset of JavaScript.         | ![TypeScript](https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg) |
| **Node.js**       | Backend runtime environment.          | ![Node.js](https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg) |
| **XGBoost**       | Gradient boosting machine learning.   | ![XGBoost](https://upload.wikimedia.org/wikipedia/commons/6/69/XGBoost_logo.png) |
| **OpenAI API**    | Chatbot for answering team queries.   | ![OpenAI](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/768px-OpenAI_Logo.svg.png) |

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
| ![Demo1](public/Screenshot (1).png)   | ![Demo2](public/Screenshot (2).png)   | ![Demo3](public/Screenshot (3).png)   |  

**Demo Video**  
[Watch the Full Demo](public/demo.mp4)

---

## 🔗 Connect with Me  
[![LinkedIn](https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png) LinkedIn](https://linkedin.com/in/hadityakumar)

---

With this project, we have demonstrated the fusion of cricket analytics, machine learning, and modern web technologies to solve a real-world problem innovatively. 