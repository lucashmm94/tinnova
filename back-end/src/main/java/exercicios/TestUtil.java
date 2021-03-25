package exercicios;

import java.util.Scanner;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class TestUtil {
	private static final Logger LOGGER = LoggerFactory.getLogger(TestUtil.class);

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		//Exercicio 1
		LOGGER.info("A porcentagem de votos válidos é: " + Util.calcularPercentualVotosValidos());
		LOGGER.info("A porcentagem de votos em branco é: " + Util.calcularPercentualVotosBrancos());
		LOGGER.info("A porcentagem de votos nulos é: " + Util.calcularPercentualVotosNulos());
		
		//Exercicio 2 
		
		Integer vetor[] = { 5, 3, 2, 4, 7, 1, 0, 6 };
		Util.ordernarElemetos(vetor);
		
		
		//Exercicio 3
		LOGGER.info("O fatorial de 5 é : "+ Util.calcularFatorial(5).toString());
		
		//Exercicio 4
		System.out.println("Digite um número para calcular os múltiplo de 3 e 5: ");
		int multiplo = sc.nextInt();
		LOGGER.info("A soma dos multiplos de "+multiplo+ " é: "+Util.getSomaNumerosMultiplos(multiplo));
		
		
		
		sc.close();

	}

}
