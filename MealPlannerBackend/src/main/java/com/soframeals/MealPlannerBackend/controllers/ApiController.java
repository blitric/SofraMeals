package com.soframeals.MealPlannerBackend.controllers;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.soframeals.MealPlannerBackend.data.MyMealsRepository;
import com.soframeals.MealPlannerBackend.models.Food;
import com.soframeals.MealPlannerBackend.models.MyMeals;
import org.apache.tomcat.util.json.JSONParser;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;
import com.google.gson.Gson;


import java.net.URI;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
public class ApiController {

    @Autowired
    private MyMealsRepository myMealsRepository;

    @Value("${apiKey}")
    String app_key;

    @Value("${uriTest}")
    String uriTest;

    @Value("${uriRecipes}")
    String uriRecipes;

    @Value("${uriRecipe}")
    String uriRecipe;

    @GetMapping("/extapi")
    public ResponseEntity<String> getApi() {

        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders requestHeaders = new HttpHeaders();
        requestHeaders.set("Accept", MediaType.APPLICATION_JSON_VALUE);
        HttpEntity<?> entity = new HttpEntity<>(requestHeaders);

        LinkedMultiValueMap<String, String> allRequestParams = new LinkedMultiValueMap<>();
        allRequestParams.add("apiKey", app_key);

        UriComponentsBuilder builder = UriComponentsBuilder.fromUriString(uriTest).queryParams(allRequestParams);
        UriComponents uriComponents = builder.build().encode();
        ResponseEntity<String> responseEntity = restTemplate.exchange(uriComponents.toUri(), HttpMethod.GET, entity, String.class);
        return responseEntity;
    }

    @GetMapping("/recipes")
    public ResponseEntity<String> getRecipesByIngredients(@RequestParam String ingredients) {

        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders requestHeaders = new HttpHeaders();
        requestHeaders.set("Accept", MediaType.APPLICATION_JSON_VALUE);
        HttpEntity<?> entity = new HttpEntity<>(requestHeaders);

        LinkedMultiValueMap<String, String> allRequestParams = new LinkedMultiValueMap<>();
        allRequestParams.add("apiKey", app_key);
        allRequestParams.add("ingredients", ingredients);

        URI uri = UriComponentsBuilder.fromUriString(uriRecipes).queryParams(allRequestParams).build().encode().toUri();

        ResponseEntity<String> responseEntity = restTemplate.exchange(uri, HttpMethod.GET, entity, String.class);
        return responseEntity;
    }


    @GetMapping("/viewrecipe")
    public ResponseEntity<String> getRecipe(@RequestParam String id) {

        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders requestHeaders = new HttpHeaders();
        requestHeaders.set("Accept", MediaType.APPLICATION_JSON_VALUE);
        HttpEntity<?> entity = new HttpEntity<>(requestHeaders);

        LinkedMultiValueMap<String, String> allRequestParams = new LinkedMultiValueMap<>();
        allRequestParams.add("apiKey", app_key);
        allRequestParams.add("includeNutrition", "true");

        Map<String, String> params = new HashMap<String, String>();
        params.put("id", id);  // path params

        URI uri = UriComponentsBuilder.fromUriString(uriRecipe).buildAndExpand(params).toUri();
        uri = UriComponentsBuilder.fromUri(uri).queryParams(allRequestParams).build().toUri();

        ResponseEntity<String> responseEntity = restTemplate.exchange(uri, HttpMethod.GET, entity, String.class);
        return responseEntity;

    }

    @PostMapping("/addmeal")
    public void addMeal(MyMeals newMeal, @RequestBody String mealId) {
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders requestHeaders = new HttpHeaders();
        requestHeaders.set("Accept", MediaType.APPLICATION_JSON_VALUE);
        HttpEntity<?> entity = new HttpEntity<>(requestHeaders);

        LinkedMultiValueMap<String, String> allRequestParams = new LinkedMultiValueMap<>();
        allRequestParams.add("apiKey", app_key);

        Map<String, String> params = new HashMap<String, String>();
        params.put("id", mealId);

        URI uri = UriComponentsBuilder.fromUriString(uriRecipe).buildAndExpand(params).toUri();
        uri = UriComponentsBuilder.fromUri(uri).queryParams(allRequestParams).build().toUri();

        ResponseEntity<String> responseEntity = restTemplate.exchange(uri, HttpMethod.GET, entity, String.class);

        newMeal = new MyMeals(mealId);
        myMealsRepository.save(newMeal);
    }

    @GetMapping("/mymeals")
    public ArrayList<Map> getMyMeals() {

        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders requestHeaders = new HttpHeaders();
        requestHeaders.set("Accept", MediaType.APPLICATION_JSON_VALUE);
        HttpEntity<?> entity = new HttpEntity<>(requestHeaders);

        LinkedMultiValueMap<String, String> allRequestParams = new LinkedMultiValueMap<>();
        allRequestParams.add("apiKey", app_key);
        allRequestParams.add("includeNutrition", "true");

        ArrayList<Map> listOfResponses = new ArrayList<>();

        for (int i = 0; i < myMealsRepository.findAll().size(); i++) {
            Map<String, String> params = new HashMap<String, String>();
            params.put("id", myMealsRepository.findAll().get(i).getMealId());  // path params
            URI uri = UriComponentsBuilder.fromUriString(uriRecipe).buildAndExpand(params).toUri();
            uri = UriComponentsBuilder.fromUri(uri).queryParams(allRequestParams).build().toUri();
            ResponseEntity<String> responseEntity = restTemplate.exchange(uri, HttpMethod.GET, entity, String.class);

            Gson gson = new Gson();
            Map<String, Object> map = gson.fromJson(responseEntity.getBody(), Map.class);

            listOfResponses.add(map);

        }

            return listOfResponses;

    }

}