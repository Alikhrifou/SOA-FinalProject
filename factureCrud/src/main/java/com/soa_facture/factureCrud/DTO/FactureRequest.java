package com.soa_facture.factureCrud.DTO;


import lombok.Setter;
import org.jetbrains.annotations.NotNull;

import java.util.List;

public class FactureRequest {

    @Setter
    @NotNull
    private Long clientId;

    @NotNull
    private List<Long> productIds;

    @NotNull
    private Double totalAmount;

    // Getters and setters
    public @NotNull Long getClientId() {
        return clientId;
    }

    public @NotNull List<Long> getProductIds() {
        return productIds;
    }

    public void setProductIds(@NotNull List<Long> productIds) {
        this.productIds = productIds;
    }

    public @NotNull Double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
    }
}
