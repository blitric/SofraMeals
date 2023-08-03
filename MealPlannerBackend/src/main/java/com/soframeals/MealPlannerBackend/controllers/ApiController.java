package com.soframeals.MealPlannerBackend.controllers;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;


@RestController
public class ApiController {

    @Value("${apiKey}")
    String app_key;

    @Value("${uriTest}")
    String uriTest;

    @Value("${uriRecipes}")
    String uriRecipes;

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

        UriComponentsBuilder builder = UriComponentsBuilder.fromUriString(uriRecipes).queryParams(allRequestParams);
        UriComponents uriComponents = builder.build().encode();
        ResponseEntity<String> responseEntity = restTemplate.exchange(uriComponents.toUri(), HttpMethod.GET, entity, String.class);
        return responseEntity;
    }





}
