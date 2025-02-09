package com.soa_facture.factureCrud;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class FactureCrudApplication {

	public static void main(String[] args) {
		SpringApplication.run(FactureCrudApplication.class, args);
	}

}
