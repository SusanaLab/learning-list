import react from "react";
import './TodoItem.css'
function TodoItem(props){


    return(
        <li className="TodoItem">
          <img className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
             onClick={props.onComplete} alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTcyLjU2MjUsMTQ3LjgxMjVsLTU2LjQzNzUsLTU5LjEyNWw4LjA2MjUsLTEwLjc1bDQ1LjY4NzUsMzIuMjVsNzcuOTM3NSwtNzcuOTM3NWwxMC43NSwxMC43NXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="/>

             <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
             <img className="Icon Icon-delete"
              onClick={props.onDelete} alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTcxLjY2NjY3LDE0LjMzMzMzbC03LjE2NjY3LDcuMTY2NjdoLTQzdjE0LjMzMzMzaDEyOXYtMTQuMzMzMzNoLTQzbC03LjE2NjY3LC03LjE2NjY3ek0zMS4yODQxOCw1MC4xNjY2N2wxMC45NDU5Niw5NS4wNTYzMmMwLjk0Niw3LjA5NSA3LjA1NTAyLDEyLjQ0MzY4IDE0LjIwNzM2LDEyLjQ0MzY4aDU5LjExMWM3LjE1MjMzLDAgMTMuMjY4MTksLTUuMzQwMTggMTQuMjIxMzUsLTEyLjQ5OTY4bDEwLjk0NTk3LC05NS4wMDAzMnoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="/>
           
        </li>
    );
}

export { TodoItem };