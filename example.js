const CherrryClient = require("./index");
const private_key = "your_private_key";
const client = new CherrryClient(private_key);

const createTableTest = async () => {
    var { success, error } = await client.create_table("doc-sections");
    console.log("create table error::", success);
    console.log("error::", error);
};

const insertTest = async () => {
    var { data, error } = await client.from("blogs").insert({
        text: {
            title: "Grey's Anatomy"
        },
        image: {
            banner: "https://i.imgur.com/rCi9ooQ.jpeg"
        },
        metadata: {
            author_name: "Kermit The Frog",
            author_email: "frog@dog.com"
        }
    });

    var { data, error } = await client.from("blogs").insert({
        text: {
            title: "Octopus Cherry Pie"
        },
        image: {
            banner: "https://i.imgur.com/lFC8p0L.jpeg"
        },
        data: {
            author_name: "Davy Jones",
            author_email: "octo@pus.com"
        }
    });

    console.log("insert::", data);
    console.log("error::", error);
};

const searchTest = async () => {
    var { data, error } = await client
        .from("docs")
        .search({ prompt: "python", size: 3, search_type: "text" });

    console.log("search::", data);
    console.log("error::", error);
};

const docTest = async () => {
    var { data, error } = await client.from("blogs").doc("6423958");
    console.log("doc::", data);
    console.log("error::", error);
};

const deleteTest = async () => {
    var { success, error } = await client.from("blogs").delete("6423958");
    console.log("delete::", success);
    console.log("error::", error);
};

const run = async () => {
    // await createTableTest();
    // await insertTest();
    // await searchTest();
    // await docTest();
    // await deleteTest();
};

run();
