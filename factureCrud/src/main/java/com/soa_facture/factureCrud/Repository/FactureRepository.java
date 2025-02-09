package com.soa_facture.factureCrud.Repository;

import com.soa_facture.factureCrud.Entity.Facture;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FactureRepository  extends JpaRepository<Facture , Long> {
    List<Facture> findByClientId(Long clientId);
}
