# Dashboard Backend
This repository contains the backend implementation for a dynamic dashboard application. The backend is designed to support multiple market data sources and provide user management with access control for different categories.

## Assignment Description
The goal of this project is to develop a backend system for a dashboard with the following features:

- User Management: Users can be assigned access to specific categories, with access control enforced per category.
- Multiple Market Data Sources: Support for various data sources, such as BSE and NSE, with each data source having its own table.
- Dynamic Sections and Sub-Sections: Sections and sub-sections can be dynamically created, updated, or deleted without changing the code. Each section can contain multiple sub-sections, which can be displayed in different views on the frontend.
- APIs: Provide endpoints for managing sections, sub-sections, and user access.
  
## Technologies Used
- Backend: ExpressJS 
- Database: PostgreSQL
  
## Installation
Clone the Repository

```bash
git clone https://github.com/yourusername/dashboard-backend.git
```

```
cd dashboard-backend
```

Install Dependencies
```
npm install
```

Set Up Environment Variables

Create a .env file in the root directory with the following content:

makefile .env
- DATABASE_URL=postgres://username:password@localhost:5432/yourdatabase 
- JWT_SECRET=your_jwt_secret
- PORT=3000


```
npm run start
```
