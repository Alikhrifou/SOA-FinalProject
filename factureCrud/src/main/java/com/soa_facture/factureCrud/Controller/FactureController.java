package com.soa_facture.factureCrud.Controller;

import com.soa_facture.factureCrud.DTO.FactureRequest;
import com.soa_facture.factureCrud.Entity.Facture;
import com.soa_facture.factureCrud.Service.FactureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/factures")
public class FactureController {

    private final FactureService factureService;

    @Autowired
    public FactureController(FactureService factureService) {
        this.factureService = factureService;
    }

    @PostMapping
    public ResponseEntity<Facture> generateFacture(@RequestBody FactureRequest request) {
        Facture facture = factureService.generateFacture(request.getClientId(), request.getProductIds(), request.getTotalAmount());
        return ResponseEntity.ok(facture);
    }

    @GetMapping("/client/{clientId}")
    public ResponseEntity<List<Facture>> getFactureByClientId(@PathVariable Long clientId) {
        List<Facture> factures = factureService.getFacturesByClientId(clientId);
        return ResponseEntity.ok(factures);
    }

    @GetMapping
    public ResponseEntity<List<Facture>> getAllInvoices() {
        List<Facture> factures = factureService.getAllFactures();
        return ResponseEntity.ok(factures);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleException(Exception ex) {
        // Log the exception
        return ResponseEntity.status(500).body("Internal Server Error: " + ex.getMessage());
    }
}
