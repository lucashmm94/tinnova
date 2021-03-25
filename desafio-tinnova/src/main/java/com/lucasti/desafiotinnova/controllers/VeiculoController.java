package com.lucasti.desafiotinnova.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.lucasti.desafiotinnova.entities.Veiculo;
import com.lucasti.desafiotinnova.services.VeiculoService;


@RestController
@RequestMapping(value = "/veiculos")
public class VeiculoController {
	
	@Autowired
	VeiculoService service;
	
	
	@GetMapping
	public ResponseEntity<List<Veiculo>> findAll() {
		List<Veiculo> lsVeiculos = service.findAll();
		return ResponseEntity.ok().body(lsVeiculos);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Veiculo> findById(@PathVariable Long id) {
		Veiculo veiculo = service.findById(id);
		return ResponseEntity.ok().body(veiculo);
	}


	@PostMapping
	public ResponseEntity<Veiculo> save(@RequestBody Veiculo veiculo) {
		veiculo = service.save(veiculo);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(veiculo.getId())
				.toUri();
		return ResponseEntity.created(uri).body(veiculo);
	}
	
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<Veiculo> update(@PathVariable Long id, @RequestBody Veiculo veiculo) {
		veiculo = service.update(veiculo, id);
		return ResponseEntity.ok().body(veiculo);

	}

	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Veiculo> deleteById(@PathVariable Long id) {
		service.deleteById(id);
		return ResponseEntity.noContent().build();
	}
	

}
