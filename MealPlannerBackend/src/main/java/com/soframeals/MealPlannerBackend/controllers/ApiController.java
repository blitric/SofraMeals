package com.soframeals.MealPlannerBackend.controllers;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;


@RestController
public class ApiController {

    @Value("${apiKey}")
    String app_key;

    @GetMapping("/extapi")
    public ResponseEntity<String> getApi() {

        //String type = "public";
        // String q = "cheese";
        String uri = "https://api.spoonacular.com/recipes/605537/information";

        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders requestHeaders = new HttpHeaders();
        LinkedMultiValueMap<String, String> allRequestParams = new LinkedMultiValueMap<>();
        allRequestParams.add("apiKey", app_key);
        //allRequestParams.add("type", type);
        //allRequestParams.add("q", q);

        HttpEntity<?> entity = new HttpEntity<>(requestHeaders);
        UriComponentsBuilder builder = UriComponentsBuilder.fromUriString(uri).queryParams(allRequestParams);
        UriComponents uriComponents = builder.build().encode();
        ResponseEntity<String> responseEntity = restTemplate.exchange(uriComponents.toUri(), HttpMethod.GET, entity, String.class);
        return responseEntity;
    }
}