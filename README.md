# Interactive Data Dashboard
Overview
The Interactive Data Dashboard is a modern, dynamic web application designed to visualize data in an intuitive and engaging manner. This dashboard allows users to filter data by date range, toggle between light and dark themes, and visualize key metrics through interactive charts. Built with HTML, CSS, JavaScript, and Chart.js, this dashboard can be easily extended or integrated with real-time data sources, such as APIs.

The dashboard includes:

Data Filtering: Users can apply a date range filter to view specific subsets of data.
Interactive Chart: Visualize the data in a line chart that updates dynamically when data is filtered.
Theme Toggle: Switch between a light theme and a dark theme for better user experience.
Loading Spinner: Provides feedback while data is being fetched or processed.
Features
1. Interactive Chart
The core feature of this dashboard is an interactive line chart created using Chart.js. The chart dynamically displays data over time, with the X-axis representing dates and the Y-axis representing values. When data is filtered by date range, the chart updates in real time.

2. Date Range Filter
Users can select a start date and end date using date pickers to filter the displayed data. This allows them to focus on specific time periods, enhancing the ability to analyze trends and patterns.

3. Theme Toggle
The application includes a dark/light theme toggle button, enabling users to switch between themes based on personal preferences or ambient lighting conditions. The dark theme improves visibility in low-light environments, while the light theme is designed for readability during the day.

4. Loading Spinner
While data is being fetched or processed, a loading spinner is displayed to provide feedback to the user, ensuring a smooth experience when interacting with the dashboard.

Technology Stack
HTML: Provides the basic structure of the web pages.
CSS: Used to style the dashboard, including custom styles for the dark and light themes, and responsiveness.
JavaScript: Handles the logic for fetching data, updating the table and chart, and implementing the date filtering and theme toggle functionalities.
Chart.js: A powerful JavaScript library used for creating interactive charts. It renders the data as a line chart for better visualization of trends over time.
Mock Data: Data is fetched from a mock JSON file (can be replaced with a real API) for demonstration purposes.
Installation
To run this project locally, follow these steps:

1. Clone the repository
bash:
git clone [https://github.com/yourusername/interactive-data-dashboard.git](https://github.com/tFretheim/interactive_data_dashboard)
2. Navigate to the project folder
bash:
cd interactive-data-dashboard
3. Open index.html in a browser
Simply open the index.html file in your browser of choice. There’s no server-side setup required, as this project is a static web app.

If you'd like to test it with live server functionality, you can use an extension like Live Server in Visual Studio Code or serve it with any other HTTP server.

File Structure
bash:
/interactive-dashboard
  /assets
    /css
      styles.css
    /js
      app.js
      chartHandler.js
  /data
    mockData.json
  index.html
index.html: The main HTML file that structures the layout of the dashboard.
assets/css/styles.css: CSS file containing all styles for the dashboard, including dark/light theme and general layout styles.
assets/js/app.js: JavaScript that handles data fetching, theme toggling, and date filtering logic.
assets/js/chartHandler.js: JavaScript responsible for rendering and updating the Chart.js line chart.
data/mockData.json: A mock data file used for demonstration purposes. It contains an array of data objects with a date, category, and value.
How to Use
Toggle Theme: To switch between light and dark themes, simply click the "Switch Theme" button located in the top-right corner of the dashboard header. The theme will change instantly, and the layout will adjust accordingly.

Apply Date Filter:

Select a start date and end date from the date input fields.
Click Apply Filter to update the data displayed in the table and chart based on your selected date range.
View Data: Data will be displayed in a table and a line chart. The table lists each entry with the date, category, and value. The chart shows the data points over time, with the X-axis representing the date and the Y-axis representing the value.

Customization
You can customize and extend this dashboard by:

Replacing the mock data: Replace the mockData.json file with a real API that returns dynamic data.
Customizing the chart: You can change the type of chart, colors, or the way data is represented (e.g., bar chart, pie chart, etc.).
Adding more filters: Besides date, you can add filters for category, value ranges, or other parameters.
Theme Enhancements: If you have specific branding or design preferences, you can update the CSS to match the style of your application.
Potential Improvements
Responsive Design: The dashboard is partially responsive, but it can be enhanced further to support more screen sizes, especially for mobile and tablet devices.
Data Pagination: For large datasets, adding pagination or infinite scrolling would help improve performance and usability.
Real-time Data: Integrate with a real-time data API to fetch live data, which would automatically update the dashboard with fresh information.
Authentication: Implement user authentication to allow personalized dashboards with multiple users and user-specific data.
License
This project is open-source and available under the MIT License.

Acknowledgments
Chart.js for providing a great library to create interactive charts.
CSS-Tricks and Stack Overflow for numerous helpful resources and examples on implementing theme toggles and data visualization techniques.
