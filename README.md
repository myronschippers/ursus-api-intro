# Introduction to APIs

## Key Vocabulary

- API (Application Programming Interface)
- Query String


## Read docs

There are usually *Getting Started* docs for public API's. This is a great place to find answers to questions like 

- What can I do with this API?
- Do I need a key?
- If so, how do I send that key on a request?


## Giphy Search API Endpoint

```
api.giphy.com/v1/gifs/search?api_key=[API_KEY]&q=cheeseburger
```

### Breakdown

#### Search Endpoint

```
api.giphy.com/v1/gifs/search
```

#### Query Parameters

```
?key=value&newKey=newValue
```

> Note: the `?` represents the start of the query and everything after are query parameters. Each parameter has 2 parts a key and a value `key=value`. This key / value pair is considered your query parameter The `&` separates each query parameter signifying that there is a new parameter being used.

#### Giphy Access with API Key

as query parameter

```
?api_key=[YOUR_API_KEY]
```

#### Adding the Search Term

*In the example the search term is `cheeseburger`.*

as a query parameter

```
&q=cheeseburger
```