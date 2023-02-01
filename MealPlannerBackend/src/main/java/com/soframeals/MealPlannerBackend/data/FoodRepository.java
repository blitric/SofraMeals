package com.soframeals.MealPlannerBackend.data;
import com.soframeals.MealPlannerBackend.models.Food;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodRepository extends JpaRepository <Food, Integer> {
}
