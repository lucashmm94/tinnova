package com.lucasti.desafiotinnova.controllers;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
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
	
	@PostMapping
	public ResponseEntity<Veiculo> save(@RequestBody Veiculo veiculo) {
		veiculo = service.save(veiculo);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(veiculo.getId())
				.toUri();
		return ResponseEntity.created(uri).body(veiculo);
	}

}
