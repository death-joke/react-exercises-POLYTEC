## Steps for Todo exercise

1. define a tasks array state in the Todo FC (useState)
   Initialize it with task-util INITIAL_TASKS

1. in the \<ul> show the label of each of the tasks in the \<label>
   and sync the \<input> checkbok to show the completed value

1. use the .completed class to show a line-through label if the task is completed

This refers to the style

```css
.todo-list li.completed label {
  color: #d9d9d9;
  text-decoration: line-through;
}
```

1. add an event handler on the button to remove a task

1. add a task when clickin enter on the top form In react 2 ways :

   1. catch onSubmit on the form
   1. catch onKeyUp or onKeyDonw and filter the event on its keyCode: enter key has a keyCode of 13.

1. check/uncheck all tasks with the down arrow on the left of the input task

1. compute remaining tasks and show that number in HTML
