# React Dark/Light Mode Checklist System
This project is a React-based application that features a simple checklist system with dark and light mode toggling functionality. It showcases various styled components, responsive design, and modern frontend practices using styled-components.

# Table of Contents
* Project Overview
* Features
* Technologies Used
* Usage
* File Structure
* Components
  
# Project Overview
The React Dark/Light Mode Checklist System is an interactive web application that allows users to manage and view a checklist while toggling between a dark and light theme. The app is built with React and utilizes styled-components for custom styling and theming. It includes responsive layouts and various modern CSS techniques to ensure a great user experience across multiple devices.

# Features
* Dark/Light Mode Toggle: Switches the theme between dark and light mode based on user preferences.
* Responsive Design: Automatically adjusts the layout for different screen sizes using media queries.
* Interactive Checklist: Displays a list of items with the ability to toggle between different themes.
* Styled Components: Utilizes styled-components for scoped and dynamic styling based on props (e.g., toggle for dark/light modes).
* Modern React Practices: Uses functional components and hooks for managing state and lifecycle methods.
  
# Technologies Used
* React: JavaScript library for building user interfaces.
* styled-components: Library for writing CSS in JavaScript and applying dynamic styles based on props.
* Media Queries: For responsive design, adjusting layout based on screen size.
* Flexbox: Used for layout and alignment of elements in the app.

# Usage
Upon running the app, users are greeted with a checklist that allows them to toggle between dark and light themes using the "Toggle" button. The following components are rendered:
* Header: Contains the "Checklist System" title and the toggle button.
* ListContainer: Displays the list of checklist items.
* ListItem: Displays individual checklist items with dynamic background colors based on the theme.
* ErrorMsg: Displays any error messages in case of issues (e.g., invalid input).
 Users can interact with the app by switching between dark and light modes, and the layout automatically adapts to various screen sizes.

# Components
* Container
This is the main wrapper component for the app that controls the background color, layout, and theme switching based on the toggle prop passed down from the parent component.

* Header
A fixed header that contains the title of the app and a toggle button to switch between dark and light themes. It adjusts its appearance based on the toggle prop.

* ChecklistSystem
The title displayed at the top of the application. The color changes based on the theme.

* ToggleButton
A button component used for toggling between dark and light modes. It dynamically updates the color based on the toggle prop.

* DashboardHeading
A dynamic heading that adjusts its font size based on the screen size, making it responsive to smaller screens.

* ListContainer
A container component that holds a list of checklist items. The list container’s background color is dynamically set based on the toggle prop.

* ListItem
Each individual checklist item is displayed here. It includes dynamic styling (border color, background color) based on the theme, as well as responsiveness to different screen sizes.

* ChecklistRules, Span, and Condition
These components represent textual content related to the checklist rules, conditions, and additional text, with dynamic styling based on the theme.

* ErrorMsg
Displays error messages in red color when needed, styled based on the theme (dark or light mode).
# Deployed Backend Dashboard API in Render 
* Deployed Backend Dashboard API URL :- https://transition-computing-backend-assignment-q78x.onrender.com
* Through this API we are sending request by using hook like useEffect in Frontend Client Side to retrieve the Checklist data related to Dashboard.

# Deployed the Frontend Dashboard in VERCEL 
* Deployed URL :- https://dashboard-eight-nu-47.vercel.app/
