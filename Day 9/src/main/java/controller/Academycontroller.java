package com.connect.connect.controller;

import com.connect.connect.dto.Academydto;
import com.connect.connect.service.Academyservice;

import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.transaction.Transactional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/academy")
@CrossOrigin(origins="*")
@RestController
public class Academycontroller {

    private final Academyservice academyservice;

    public Academycontroller(Academyservice academyservice) {
        this.academyservice = academyservice;
    }

    @Tag(name="Get", description="Listing details")
    @Transactional
    @GetMapping
    public ResponseEntity<List<Academydto>> getAllAcademies() {
        List<Academydto> academies = academyservice.getAllAcademies();
        return new ResponseEntity<>(academies, HttpStatus.OK);
    }

    @Tag(name="Get", description="Listing the details by their name")
    @Transactional
    @GetMapping("/{name}")
    public ResponseEntity<Academydto> getAcademyByName(@PathVariable String name) {
        Academydto academy = academyservice.getAcademyByName(name);
        if (academy != null) {
            return new ResponseEntity<>(academy, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @Tag(name="Post", description="Adding details")
    @Transactional
    @PostMapping
    public ResponseEntity<Academydto> createAcademy(@RequestBody Academydto academy) {
        Academydto createdAcademy = academyservice.createAcademy(academy);
        return new ResponseEntity<>(createdAcademy, HttpStatus.CREATED);
    }

    @Tag(name="Update ", description="Updating details by their name")
    @Transactional
    @PutMapping("/{name}")
    public ResponseEntity<Academydto> updateAcademyByName(@PathVariable String name, @RequestBody Academydto updatedAcademy) {
        Academydto updatedAcademyDto = academyservice.updateAcademyByName(name, updatedAcademy);
        if (updatedAcademyDto != null) {
            return new ResponseEntity<>(updatedAcademyDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @Tag(name="Delete", description="Deleting details by their name")
    @Transactional
    @DeleteMapping("/{name}")
    public ResponseEntity<Void> deleteAcademyByName(@PathVariable String name) {
        academyservice.deleteAcademyByName(name);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
