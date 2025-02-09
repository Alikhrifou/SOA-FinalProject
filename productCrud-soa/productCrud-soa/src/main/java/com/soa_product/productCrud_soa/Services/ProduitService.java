package com.soa_product.productCrud_soa.Services;


import com.soa_product.productCrud_soa.Repository.ProduitRepository;
import com.soa_product.productCrud_soa.entitys.Produit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProduitService {

    @Autowired
    private ProduitRepository produitRepository;

    // Create or Update a Produit
    public Produit saveProduit(Produit produit) {
        return produitRepository.save(produit);
    }

    // Get all Produits
    public List<Produit> getAllProduits() {
        return produitRepository.findAll();
    }

    // Get Produit by ID
    public Optional<Produit> getProduitById(Long id) {
        return produitRepository.findById(id);
    }

    // Delete Produit by ID
    public void deleteProduit(Long id) {
        produitRepository.deleteById(id);
    }
}