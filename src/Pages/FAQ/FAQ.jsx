import React from "react";

const FAQ = () => {
  return (
    <div className="mt-5">
      <h1 className="text-center mt-5 text-5xl">FAQ</h1>
      <div className="collapse mt-5 collapse-plus bg-base-200 mb-5">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How do I add tasks to the list?
        </div>
        <div className="collapse-content">
          <p>
            To add tasks to your list, use the input field or form provided on
            the Todo page. Enter the task details and submit to add it to your
            task list.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 mb-5">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Can I organize tasks based on their priority?
        </div>
        <div className="collapse-content">
          <p>
            Yes, you can prioritize tasks by using labels or tags indicating
            their priority level. You can also reorder tasks based on priority
            to manage them effectively.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 mb-5">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Is it possible to track completed tasks?
        </div>
        <div className="collapse-content">
          <p>
            Absolutely! Completed tasks are moved to a separate section or
            marked as completed within the Todo list, allowing you to track
            your progress and review completed tasks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
