package com.fon.bg.ac.dipl.domain;

import javax.persistence.*;

@Entity
@Table(name = "image")
public class Image {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;
    private String path;
    @ManyToOne
    private RealEstate realEstate;

    public Image() {
    }

    public Image(String path, RealEstate realEstate) {
        this.path = path;
        this.realEstate = realEstate;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public RealEstate getRealEstate() {
        return realEstate;
    }

    public void setRealEstate(RealEstate realEstate) {
        this.realEstate = realEstate;
    }
}
