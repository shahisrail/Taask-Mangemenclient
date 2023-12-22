import React from "react";

const About = () => {
  return (
    <div>
      <h2 className="text-center text-5xl">About Us </h2>
      <h3 className="text-center text-3xl mt-5">Todo List Web Page</h3>
      <p className="text-center text-2xl mt-5">
        Task Display: A list or multiple lists displaying tasks categorized
        based on their status (e.g., "todo," "in progress," "completed").
      </p>
      <p className="text-center text-2xl">
      Task
        Creation: A form or input field to add new tasks to the list. 
      </p>
      <p className="text-center text-2xl">
      Task
        Management: Drag-and-drop functionality or buttons to change the status
        of tasks (e.g., from "todo" to "completed").
      </p>
      <p className="text-center text-2xl">
      Task Details: Information
        about each task, such as title, description, priority, deadline, etc.
        
      </p>
      <p className="text-center text-2xl">
      User Interaction: Buttons or options to edit or delete tasks. 
      </p>
      <p className="text-center text-2xl">
      User
        Authentication: Login functionality to allow users to save their tasks
        or access them across sessions. Additional Features: Search, filter, or
        sort options for tasks, task categories, notifications, etc.
      </p>
    </div>
  );
};

export default About;
