package com.lucasti.desafiotinnova.services;

import java.util.List;

import com.lucasti.desafiotinnova.entities.Veiculo;


public interface VeiculoService {
	
	public List<Veiculo> findAll();
	
	public Veiculo findById(Long id);
	
	public Veiculo save(Veiculo usuario);
	
	public Veiculo update(Veiculo usuario, Long id);
	
	public void deleteById(Long id);

}
