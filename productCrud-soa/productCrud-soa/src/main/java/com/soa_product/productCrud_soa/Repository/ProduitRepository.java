package com.soa_product.productCrud_soa.Repository;

import com.soa_product.productCrud_soa.entitys.Produit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProduitRepository extends JpaRepository<Produit, Long> {
}
