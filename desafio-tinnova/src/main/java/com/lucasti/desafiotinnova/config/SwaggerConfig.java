package com.lucasti.desafiotinnova.config;

import java.util.ArrayList;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

public class SwaggerConfig {

	@EnableSwagger2
	@Configuration
	public class DevConfig implements CommandLineRunner {
		
		
		
		@Bean
	    public Docket apis() {
	        return new Docket(DocumentationType.SWAGGER_2)
	                .select()
	                .apis(RequestHandlerSelectors.basePackage("com.lucasti.desafiotinnova"))
	                .paths(PathSelectors.any())
	                .build()
	                .apiInfo(apiInfo());
	    }
		
		private ApiInfo apiInfo() {
			
	        return new ApiInfo(
	                "API para o crud de veiculos",
	                "",
	                "0.01",
	                "",
	                new Contact("Lucas Hermont","https://www.linkedin.com/in/lucas-hermont-0b3a54180/", "lucas.hermont@hotmail.com"),
	                "",
	                "",
	                new ArrayList<>()
	        );
			 
	    }
		
		@Override
		public void run(String... args) throws Exception {
			
		}
		
	}

}
