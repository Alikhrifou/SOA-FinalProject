package com.soa_product.productCrud_soa;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class ProductCrudSoaApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProductCrudSoaApplication.class, args);
	}

}
