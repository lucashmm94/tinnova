package com.lucasti.desafiotinnova.services.impl;

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
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Veiculo findById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Veiculo save(Veiculo usuario) {
		return repository.save(usuario);
	}

	@Override
	public Veiculo update(Veiculo usuario, Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteById(Long id) {
		// TODO Auto-generated method stub
		
	}

}
