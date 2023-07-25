package com.soframeals.MealPlannerBackend.controllers;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
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

    @Value("${uriTest}")
    String uri;

    @GetMapping("/extapi")
    public ResponseEntity<String> getApi() {

        // String type = "public";
        // String q = "cheese";

        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders requestHeaders = new HttpHeaders();
        requestHeaders.set("Accept", MediaType.APPLICATION_JSON_VALUE);
        HttpEntity<?> entity = new HttpEntity<>(requestHeaders);

        LinkedMultiValueMap<String, String> allRequestParams = new LinkedMultiValueMap<>();
        allRequestParams.add("apiKey", app_key);
        //allRequestParams.add("type", type);
        //allRequestParams.add("q", q);

        UriComponentsBuilder builder = UriComponentsBuilder.fromUriString(uri).queryParams(allRequestParams);
        UriComponents uriComponents = builder.build().encode();
        ResponseEntity<String> responseEntity = restTemplate.exchange(uriComponents.toUri(), HttpMethod.GET, entity, String.class);
        return responseEntity;
    }
}
