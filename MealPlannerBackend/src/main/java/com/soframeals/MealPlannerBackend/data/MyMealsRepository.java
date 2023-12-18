package com.soframeals.MealPlannerBackend.data;

import com.soframeals.MealPlannerBackend.models.MyMeals;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MyMealsRepository extends JpaRepository<MyMeals, Integer> {
}

