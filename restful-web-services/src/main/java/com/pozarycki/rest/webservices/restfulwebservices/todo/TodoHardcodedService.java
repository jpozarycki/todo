package com.pozarycki.rest.webservices.restfulwebservices.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardcodedService {

    private static List<Todo> todoList = new ArrayList<>();
    private static long idCounter = 0;
    static {
        todoList.add(new Todo(++idCounter,"jpozarycki","Learn to dance", new Date(), false));
        todoList.add(new Todo(++idCounter,"jpozarycki","Learn Spring Boot", new Date(), false));
        todoList.add(new Todo(++idCounter,"jpozarycki","Learn about Angular", new Date(), false));
    }

    public List<Todo> findAll() {
        return todoList;
    }

    public Todo deleteById(long id) {
        Todo todoToDelete = findById(id);
        if (todoToDelete == null) return null;
        todoList.remove(todoToDelete);
        return todoToDelete;
    }

    public Todo findById(long id) {
        Todo todoFound = new Todo();
        for (Todo todo : todoList){
            if (todo.getId() == id) {
                todoFound = todo;
            }
        }
        return todoFound;
    }

    public Todo save(Todo todo) {
        if (todo.getId()==-1 || todo.getId()==0){
            todo.setId(++idCounter);
            todoList.add(todo);

        } else {
            deleteById(todo.getId());
            todoList.add(todo);
        }

        return todo;
    }
}
