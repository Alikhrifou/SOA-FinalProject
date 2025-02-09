package com.soa_product.productCrud_soa.Controllers;

import com.soa_product.productCrud_soa.Services.ProduitService;
import com.soa_product.productCrud_soa.entitys.Produit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/produits")
@CrossOrigin
public class ProduitController {

    @Autowired
    private ProduitService produitService;

    // Create a new Produit
    @PostMapping
    public Produit createProduit(@RequestBody Produit produit) {
        return produitService.saveProduit(produit);
    }

    // Get all Produits
    @GetMapping
    public List<Produit> getAllProduits() {
        return produitService.getAllProduits();
    }

    // Get Produit by ID
    @GetMapping("/{id}")
    public Optional<Produit> getProduitById(@PathVariable Long id) {
        return produitService.getProduitById(id);
    }

    // Update Produit by ID
    @PutMapping("/{id}")
    public Produit updateProduit(@PathVariable Long id, @RequestBody Produit produit) {
        produit.setId(id); // Ensure the ID is set for update
        return produitService.saveProduit(produit);
    }

    // Delete Produit by ID
    @DeleteMapping("/{id}")
    public void deleteProduit(@PathVariable Long id) {
        produitService.deleteProduit(id);
    }
}