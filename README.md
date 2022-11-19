# cherrry-js

## Cherrry Javascript SDK

![Banner](https://user-images.githubusercontent.com/42971022/202865221-5fc4b9d0-0ead-46ae-9a2c-27399dac6a4a.jpg)

## Installation + API keys

### npm package

Install the package from npm with your favorite package manager
```
npm install @cherrry-ai/cherrry-js
```

### API Keys

From https://cherrry.com/dashboard/api to get your API Keys

#### Private Key

Private keys start with `ch_prv`

**keep it secret and never use it client-side**. It has service role privilages: it can read + write data.

#### Public Key

Public keys start with `ch_pub`

They're intended to be use client-side and have read-only privilages.

### Initalize

```
const CherrryClient = require("@cherrry-ai/cherrry-js")
```

or

```
import CherrryClient from "@cherrry-ai/cherrry-js"
```

initialize the client

```
const client = new CherrryClient(api_key)
```

## Basic Functions

### Create Table

```
var {data, error} = await client.create_table("example_table");
```

### Insert a Doc

```
var { data, error } = await client.from("blogs").insert({
    text: "Octopus Pie",
    image: "https://i.imgur.com/lFC8p0L.jpeg",
    data: {
        author_name: "Davy Jones",
        author_email: "octo@pus.com"
    }
});
```

### Search

```
var { data, error } = await client
    .from("blogs")
    .search(
        {   prompt: "sea creature desert",
            size: 1,
            search_type: "image"
         });
```

### Get Doc by ID

```
var { data, error } = await client.from("blogs").doc("1234");
```

### Delete a Doc

```
var { success, error } = await client.from("blogs").delete("1234");
```
