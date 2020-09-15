package pl.surf.web.demo.model.products;

public enum GrainType {
    TEFF(""),
    WHEAT(""),
    OATS(""),
    RICE(""),
    CRON(""),
    BARLEY(""),
    SORGHUM(""),
    RYE(""),
    MILLTER(""),
    TRITICALE(""),
    AMARANTH(""),
    BUCKWEATH(""),
    QUINOA(""),
    OTHER("");

    private String description;
    GrainType(String description){
        this.description = description;
    }
}
