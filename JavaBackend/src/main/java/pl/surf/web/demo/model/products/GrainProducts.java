package pl.surf.web.demo.model.products;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;

@Entity
@Table(name="grainProducts")
@PrimaryKeyJoinColumn(name="ID")
public class GrainProducts extends Product {

    @ElementCollection(targetClass=GrainType.class)
    @Enumerated(EnumType.STRING)
    @CollectionTable(name="grain_types")
    @Column(name="grains")
    private List<GrainType> grains;

    @Column
    private String size;

    public GrainProducts(String name, BigDecimal price) {
        super(name, price);
    }

    public List<GrainType> getGrains() {
        return grains;
    }

    public void setGrains(List<GrainType> grains) {
        this.grains = grains;
    }
}
