package com.lucasti.desafiotinnova.services.impl;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lucasti.desafiotinnova.entities.Veiculo;
import com.lucasti.desafiotinnova.repositories.VeiculoRepository;
import com.lucasti.desafiotinnova.services.VeiculoService;

@Service
public class VeiculoServiceImpl implements VeiculoService{
	
	@Autowired
	VeiculoRepository repository;

	@Override
	public List<Veiculo> findAll() {
		return repository.findAll();
	}

	@Override
	public Veiculo findById(Long id) {
		return repository.findById(id).get();
	}

	@Override
	public Veiculo save(Veiculo usuario) {
		usuario.setCriado(LocalDateTime.now());
		return repository.save(usuario);
	}

	@Override
	public Veiculo update(Veiculo veiculo, Long id) {
		Veiculo veiculoBanco = findById(id);
		veiculoBanco.setId(id);
		return save(veiculoBanco);
		
	}

	@Override
	public void deleteById(Long id) {
		repository.deleteById(id);
		
	}

}
