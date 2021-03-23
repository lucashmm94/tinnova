package exercicios;

public class Util {
	final static Integer TOTAL_ELEITORES;
	final static Integer TOTAL_VOTOS_VALIDOS;
	final static Integer TOTAL_VOTOS_BRANCOS;
	final static Integer TOTAL_VOTOS_NULOS;

	static {
		TOTAL_ELEITORES = 1000;
		TOTAL_VOTOS_VALIDOS = 800;
		TOTAL_VOTOS_BRANCOS = 150;
		TOTAL_VOTOS_NULOS = 50;

	}

	public static String calcularPercentualVotosValidos() {
		return ((TOTAL_VOTOS_VALIDOS * 100) / TOTAL_ELEITORES) + "%";
	}

	public static String calcularPercentualVotosBrancos() {
		return ((TOTAL_VOTOS_BRANCOS * 100) / TOTAL_ELEITORES) + "%";
	}

	public static String calcularPercentualVotosNulos() {
		return ((TOTAL_VOTOS_NULOS * 100) / TOTAL_ELEITORES) + "%";
	}

	public static void ordernarElemetos(Integer[] vetor) {
		int aux;
		boolean controle;

		for (int i = 0; i < vetor.length; ++i) {
			controle = true;
			for (int j = 0; j < (vetor.length - 1); ++j) {

				if (vetor[j] > vetor[j + 1]) {
					aux = vetor[j];
					vetor[j] = vetor[j + 1];
					vetor[j + 1] = aux;
					controle = false;
				}
			}
			if (controle) {
				break;
			}

		}

		System.out.println("Ordenação dos vetores:");
		for (int i = 0; i < vetor.length; ++i) {
			System.out.print(vetor[i] + " ");
		}
		System.out.println("");
	}

	public static Integer calcularFatorial(Integer numero) {
		if (numero == 0)
			return 1;
		else
			return numero * calcularFatorial(numero - 1);
	}

	public static Integer getSomaNumerosMultiplos(Integer n) {
		int soma = 0;
		while (n >= 3) {
			if (n % 3 == 0 || n % 5 == 0)
				soma += n;
			n--;
		}
		return soma;
	}

}
