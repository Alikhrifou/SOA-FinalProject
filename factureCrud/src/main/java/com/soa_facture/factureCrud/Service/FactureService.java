package com.soa_facture.factureCrud.Service;

import com.soa_facture.factureCrud.Entity.Facture;
import com.soa_facture.factureCrud.Repository.FactureRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class FactureService {
    private static final Logger logger = LoggerFactory.getLogger(FactureService.class);
    @Autowired
    private FactureRepository factureRepository;

    public Facture generateFacture(Long clientId, List<Long> productIds, Double totalAmount) {
        logger.info("Generating facture for clientId: {}, productIds: {}, totalAmount: {}", clientId, productIds, totalAmount);
        Facture facture = new Facture();
        facture.setClientId(clientId);
        facture.setProductIds(String.join(",", productIds.stream().map(String::valueOf).toList())); // Convert list to string
        facture.setTotalAmount(totalAmount);
        facture.setInvoiceDate(LocalDate.now());
        facture.setStatus("Generated");
        Facture savedFacture = factureRepository.save(facture);
        logger.info("Facture generated: {}", savedFacture);
        return savedFacture;
    }

    public List<Facture> getFacturesByClientId(Long clientId) {
        return factureRepository.findByClientId(clientId);
    }

    public List<Facture> getAllFactures() {
        return factureRepository.findAll();
    }

}
