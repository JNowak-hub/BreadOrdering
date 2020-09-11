package pl.surf.web.demo.model;


import java.util.List;

public class Bread extends Product {

    private List<GrainType> grains;

    public Bread(String name) {
        super(name);
    }

    public List<GrainType> getGrains() {
        return grains;
    }

    public void setGrains(List<GrainType> grains) {
        this.grains = grains;
    }
}
