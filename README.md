# Simple GraphQL Rating System

This is a starter project to get a working rating system. The idea is to having some solutions to grab reviews, ratings and feedbacks for any webpage or product.

* Node.js
* GraphQL
* MongoDB

## Installation

Install dependencies
```
yarn
```

## Usage
Start local server
```
yarn start
```
Access GraphQL playground on http://localhost:4000

### GraphQL Query
#### Get likes count for a webpage
```
query {
  like(url: "https://example.com"){
  	_id
    url
    count
  }
}
```

### GraphQL Mutation
#### Perform a like on some webpage and receive updated data
```
mutation {
  addLike(
    url: "https://example.com"
  ){
    count
  }
}
```

## TODOs
- [x] Like
- [ ] Like Dislike
- [ ] Star Ratings
- [ ] Reviews