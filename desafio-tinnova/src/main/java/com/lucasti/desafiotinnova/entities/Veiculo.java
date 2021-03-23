package com.lucasti.desafiotinnova.entities;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="tb_veiculos")
public class Veiculo implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id ;
	
	@Column(name = "nome", nullable = false)
	private String nome;
	
	@Column(name = "marca", nullable = false)
	private String marca;
	
	@Column(name = "descricao", nullable = false)
	private String descricao;
	
	@Column(name = "ano", nullable = false)
	private Integer ano;
	
	@Column(name = "isVendido", nullable = false)
	private Boolean isVendido;
	
	@Column(name = "criado", nullable = false)
	private LocalDateTime criado;
	
	@Column(name = "atualizado",nullable = false)
	private LocalDateTime atualizado;
	

	public Veiculo(Long id, String nome, String descricao, String marca, Integer ano, Boolean isVendido) {
		this.id = id;
		this.nome = nome;
		this.descricao = descricao;
		this.marca = marca;
		this.ano = ano;
		this.isVendido = isVendido;
		this.criado = LocalDateTime.now();
		this.atualizado = LocalDateTime.now();
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getNome() {
		return nome;
	}


	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public String getDescricao() {
		return descricao;
	}


	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}


	public String getMarca() {
		return marca;
	}


	public void setMarca(String marca) {
		this.marca = marca;
	}


	public Integer getAno() {
		return ano;
	}


	public void setAno(Integer ano) {
		this.ano = ano;
	}


	public Boolean getIsVendido() {
		return isVendido;
	}


	public void setIsVendido(Boolean isVendido) {
		this.isVendido = isVendido;
	}


	public LocalDateTime getCriado() {
		return criado;
	}


	public void setCriado(LocalDateTime criado) {
		this.criado = criado;
	}


	public LocalDateTime getAtualizado() {
		return atualizado;
	}


	public void setAtualizado(LocalDateTime atualizado) {
		this.atualizado = atualizado;
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Veiculo other = (Veiculo) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
	
	
	

}
