package com.soframeals.MealPlannerBackend.controllers;

import com.soframeals.MealPlannerBackend.data.FoodRepository;
import com.soframeals.MealPlannerBackend.models.Food;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping("api/")
public class FoodController {

    @Autowired
    private FoodRepository foodRepository;

    @GetMapping("food")
    public List<Food> getFood() {
     return  this.foodRepository.findAll();
    }

    @GetMapping("food/{id}")
    public Food getFoodItem(@PathVariable Integer id) {
        return this.foodRepository.getReferenceById(id);
    }
}
