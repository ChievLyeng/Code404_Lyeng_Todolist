# Todo List App
This todo app is designed for users to note their task easier and manage their daily task. App built with React and style with css. This app has add feature,edti feature and delete featue. 

# [Demo App](https://code404-lyeng-todolist.vercel.app/)

### Tech stack

* React JS
* CSS
* Figma
* Draw IO

### App Feature
* Add Task : Users can add their tasks by typing the text on the input box.
* Delete Task : Users can delete their tasks by click the delete button.
* Edit Task : Users can edit the task by clicking on the edit button then input text will   pop up after edited they can click the save button to save back the task. 

# Convention Guide
[Convention Guide](https://www.notion.so/ToDoList-Convention-Guide-92e163c2fbb2494994c690f6831d19ee)


# Figma Design 
[Link to UI](https://www.figma.com/file/qpieMsiwcrkflRcjBKsdVD/TodoList-App?type=design&node-id=1%3A258&mode=design&t=cqTbVijeff8pIL4D-1)


# App Flow
[Todo App Flow](https://drive.google.com/file/d/1k2qe328zNwtFWB900mDUHQAfEbuZyamz/view?usp=sharing)

# Git Flow Method

[Link to git flow method](https://docs.google.com/document/d/1wRInKYodz4TyN_iqpGjZ4uzlRAfKKQRmqXqdiF4KPTY/edit?usp=sharing)

# App components Flow
There are 4 components in this todolist app.
* CreateTodo.jsx : this components use to create todo by get call of app.jsx then it has the input text and received the text from user. After recieved text it pass the prop back to app.jsx. There also have the popup dailog box when no data.
* TodoDisplay.jsx : this components also get call by app.jsx.It recieve the state that store todo data that pass from createTodo.jsx and the display todo data to the screen.
* DeleteModal.jsx : this components is work as the delete pop up confirmation modal. If users click the delete button or cancel button it will pass the prop back to TodoDisplay.jsx.
* ModifyTodo.jsx : this component is use for pop up the edit modal and reciecve what users want to edit then pass the data back via prop to TodoDisplay.jsx.


# Module
* Installed npm module.
* Installed react-icons.

# Reflection
* I realize that follow the tutorial is make me know just a thing but if I followed it and try to do the project on my own I will get the longterm knowledge.

# What I've learned 
* In this redo Todo list project I have understand alot about react between passing prop and state management. 
* I have learned how to manage components and make it usable.
* I have learned how to create the pop up modal box for confirmation from users.
    
# Other
* I have done this todo list project by studied from the udemy course that recommended by school. I also doing more research on google too.
