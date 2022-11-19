const CherrryClient = require("./index");
const token = "your token";
const client = new CherrryClient(token);

const createTableTest = async () => {
    var { success, error } = await client.create_table("blogs");
    console.log("create table error::", success, error);
};

const insertTest = async () => {
    var { data, error } = await client.from("blogs").insert({
        text: "Grey's Anatomy",
        image: "https://i.imgur.com/rCi9ooQ.jpeg",
        data: {
            author_name: "Kermit The Frog",
            author_email: "frog@dog.com"
        }
    });

    var { data, error } = await client.from("blogs").insert({
        text: "Octopus Cherry Pie",
        image: "https://i.imgur.com/lFC8p0L.jpeg",
        data: {
            author_name: "Davy Jones",
            author_email: "octo@pus.com"
        }
    });

    console.log("insert::", data, error);
};

const searchTest = async () => {
    var { data, error } = await client
        .from("blogs")
        .search({ prompt: "pirates", size: 1, search_type: "image" });

    console.log("search::", data, error);
    console.log(data[0]["row_data"]["row_data"]["texts"]);
};

const docTest = async () => {
    var { data, error } = await client.from("blogs").doc("6423958");
    console.log("doc::", data, error);
};

const deleteTest = async () => {
    var { success, error } = await client.from("blogs").delete("6423958");
    console.log("delete::", success, error);
};

const run = async () => {
    // await createTableTest();
    // await insertTest();
    // await searchTest();
    // await docTest();
    // await deleteTest();
};

run();
