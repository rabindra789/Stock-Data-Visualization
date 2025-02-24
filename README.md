# Stock Data Visualization

The **Stock Data Visualization** project is a web application designed to display stock market data interactively. Users can select a company from a list to view its stock performance over time through dynamic charts.

## Features

- **Company List**: Browse a list of companies sourced from a CSV file.
- **Interactive Charts**: Visualize selected company stock data using dynamic charts.
- **Responsive Design**: Accessible on various devices, including desktops and mobile devices.

## Project Structure

```
Stock-Data-Visualization/
├── data/
│        └── dump.csv          # Source data file containing stock information
├── public/
│   ├── css/ 
 |     |        └── styles.css   # CSS for styling the application
│   ├── js/
│    |        └── script.js    # JavaScript for frontend functionality
│   ├── index.html        # Main frontend HTML file
├── .gitignore            # Specifies files to ignore in the repository
├── package.json          # Node.js project metadata and dependencies
├── package-lock.json     # Locks the versions of dependencies
└── server.js             # Express.js backend server
```

## Prerequisites

- **Node.js**: Ensure you have Node.js installed. [Download Node.js](https://nodejs.org/)

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/rabindra789/Stock-Data-Visualization.git
   cd Stock-Data-Visualization
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

## Running the Application

1. **Start the Backend Server**:
   ```bash
   npm start 
   (or)
   npm run dev 
   ```
   The server will run on `http://localhost:8000/`.

2. **Access the Application**:
   Open your browser and navigate to `http://localhost:8000/` to view the application.

## Usage

- **Viewing Data**: Click on a company name from the list on the left to display its stock data chart on the right canvas.
- **Responsive Design**: The application adjusts to different screen sizes for optimal viewing on various devices (currently in mobile and computer).

## Technologies Used

- **Frontend**:
  - HTML
  - CSS
  - JavaScript
  - [Chart.js](https://www.chartjs.org/) (for data visualization)

- **Backend**:
  - [Node.js](https://nodejs.org/)
  - [Express.js](https://expressjs.com/)
  - [csv-parser](https://www.npmjs.com/package/csv-parser) (for reading CSV files)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the developers of [Chart.js](https://www.chartjs.org/) for their excellent charting library.
 