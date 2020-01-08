More on Forms
Form elements include <input>, <textarea>, <select>, and <form> itself. When we talk about inputs in this lesson, we broadly mean the form elements (<input>, <textarea>, <select>) and not always specifically just <input>.

To control the value of these inputs, we use a prop specific to that type of input:

For <input>, <textarea>, and <option>, we use value, as we have seen.

For <input type="checkbox"> and <input type="radio">, we use checked

Each of these attributes can be set based on a state value. Each also has an onChange event listener, allowing us to update state when a user interacts with a form.