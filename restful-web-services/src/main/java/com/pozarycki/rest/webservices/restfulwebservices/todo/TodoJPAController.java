package com.pozarycki.rest.webservices.restfulwebservices.todo;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoJPAController {

    private final TodoHardcodedService todoHardcodedService;

    private final TodoJPARepository todoJPARepository;

    public TodoJPAController(TodoHardcodedService todoHardcodedService, TodoJPARepository todoJPARepository) {
        this.todoHardcodedService = todoHardcodedService;
        this.todoJPARepository = todoJPARepository;
    }

    @GetMapping("/jpa/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username) {
        return todoJPARepository.findByUsername(username);
//        return todoHardcodedService.findAll();
    }

    @GetMapping("/jpa/users/{username}/todos/{id}")
    public Todo getTodo(@PathVariable String username, @PathVariable long id) {
        return todoJPARepository.findById(id).get();
//        return todoHardcodedService.findById(id);
    }

    @PutMapping("/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todo todo) {
//        Todo todoUpdated = todoHardcodedService.save(todo);
        Todo todoUpdated = todoJPARepository.save(todo);
        return new ResponseEntity<Todo>(todoUpdated, HttpStatus.OK);
    }

    @PostMapping("/jpa/users/{username}/todos")
    public ResponseEntity<Void> createTodo(@PathVariable String username, @RequestBody Todo todo) {
//        Todo todoCreated = todoHardcodedService.save(todo);
        todo.setUsername(username  );
        Todo todoCreated = todoJPARepository.save(todo);

        // Location
        //Get current resource url
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(todoCreated.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }

    @DeleteMapping("/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
//        Todo todo = todoHardcodedService.deleteById(id);
        todoJPARepository.deleteById(id);

        return ResponseEntity.noContent().build();

    }
}
