package com.soframeals.MealPlannerBackend.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class MyMeals {

    @Id
    @GeneratedValue
    private int id;

    private String mealId;

    public MyMeals(String mealId) {
        this.mealId = mealId;
    }

    public MyMeals() { }

    public String getMealId() {
        return mealId;
    }

    public void setMealId(String mealId) { this.mealId= mealId; }

}

