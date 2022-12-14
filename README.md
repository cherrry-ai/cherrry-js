# cherrry-js

## Cherrry Javascript SDK

<img width="644" alt="CleanShot 2022-11-30 at 21 40 41@2x" src="https://user-images.githubusercontent.com/42971022/204960579-371f96b7-1281-4c7a-b95a-81e4c3139020.png">

[App](https://cherrry.com/dashboard) | [Docs](https://cherrry.com/docs) | [Blog](https://cherrry.com/blog)

## Installation + API keys

### npm package

Install the package from npm with your favorite package manager

```js
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

```js
const CherrryClient = require("@cherrry-ai/cherrry-js");
```

or

```js
import CherrryClient from "@cherrry-ai/cherrry-js";
```

initialize the client

```js
const client = new CherrryClient(api_key);
```

## Concepts

### Table

A table is a collection of documents.

### Document

A document is respresented as a JSON object literal with three fields: `text`, `image`, and `metadata`.
These fields are also JSON object literals, where the keys can be strings with any contents, and their values are also strings.

`text` and `image` are semantically searchable each by their type respectively. Each document must have either a `text` or `image` field. It can also have both fields.
`metadata` is used to store additional information and for filtering (feature in progress), it is an optional field.

## Basic Functions

### Create Table

```js
var { data, error } = await client.create_table("example_table");
```

### Insert a Doc

Documents must be of the following form

```js
{
    "text": {
        "a name for your text": "your desired text in a string"
    },
    "image": {
        "a name for your image": "a url to your downloadable image"
    },
    "metadata": {
        "key": "value"
    }
}
```

for example:

```js
var { data, error } = await client.from("recipes").insert({
    text: {
        name: "Octopus Cherry Pie"
    },
    image: {
        preview: "https://i.imgur.com/lFC8p0L.jpeg"
    },
    data: {
        author_name: "Davy Jones",
        author_email: "octo@pus.com"
    }
});
```

### Search

```js
var { data, error } = await client
    .from("blogs")
    .search({ prompt: "sea creature desert", size: 1, search_type: "image" });
```

### Get Doc by ID

The ID of documents are returned in the responses of `/search` or `/doc`

```js
var { data, error } = await client.from("blogs").doc("1234");
```

### Delete a Doc

```js
var { success, error } = await client.from("blogs").delete("1234");
```
