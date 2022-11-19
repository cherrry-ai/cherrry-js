# cherrry-js

![cherry]("/images/cherrry_banner.svg")

Cherrry Javascript SDK

## Installation + API keys

### npm package

Install the package from npm with your favorite package manager
`npm install @cherrry-ai/cherrry-js`

### API Keys

From cherrry.com/dashboard/api to get your API Keys

#### Private Key

This is your private key, **keep it secret and never use it client-side**. It has service role privilages: it can read + write data.

#### Public Key

This is your public key.

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
