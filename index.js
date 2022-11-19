const axios = require("axios");
const url = "http://api.cherrry.com";

class CherrryClient {
    constructor(api_key) {
        this.api_key = api_key;
    }

    validateTable = () => {
        if (!this.table) {
            throw new Error("Table not defined: call .from() first");
        }
    };

    create_table = async (name) => {
        var success = false,
            error;
        try {
            const res = await axios({
                method: "put",
                url: url + "/create_table",
                data: {
                    api_key: this.api_key,
                    name: name
                },
                headers: {
                    "Content-Type": "application/json"
                }
            });
            success = true;
        } catch (err) {
            error = err?.response?.data || err;
        }

        return { success: success, error: error };
    };

    from = (table) => {
        this.table = table;
        return this;
    };

    insert = async (data) => {
        this.validateTable();

        var data, error;
        try {
            const res = await axios({
                method: "put",
                url: url + "/insert",
                data: {
                    api_key: this.api_key,
                    table: this.table,
                    doc: data
                },
                headers: {
                    "Content-Type": "application/json"
                }
            });
            data = res.data;
        } catch (err) {
            error = err?.response?.data || err;
        }
        return { data: data, error: error };
    };

    search = async (params) => {
        this.validateTable();

        var prompt = params.prompt || "";
        var search_type = params.search_type || "text";
        var size = params.size || 1;

        var data, error;
        try {
            const res = await axios({
                method: "get",
                url: url + "/search",
                data: {
                    api_key: this.api_key,
                    table: this.table,
                    prompt: prompt,
                    search_type: search_type,
                    size: size
                },
                headers: {
                    "Content-Type": "application/json"
                }
            });
            data = res.data.result;
        } catch (err) {
            err?.response?.data || err;
        }
        return { data: data, error: error };
    };

    doc = async (id) => {
        this.validateTable();

        var data, error;
        try {
            const res = await axios({
                method: "get",
                url: url + "/doc",
                data: {
                    api_key: this.api_key,
                    table: this.table,
                    doc: id
                },
                headers: {
                    "Content-Type": "application/json"
                }
            });
            data = res.data;
        } catch (err) {
            error = err?.response?.data || err;
        }

        return { data: data, error: error };
    };

    delete = async (id) => {
        this.validateTable();

        var success = false,
            error;
        try {
            const res = await axios({
                method: "delete",
                url: url + "/delete",
                data: {
                    api_key: this.api_key,
                    table: this.table,
                    doc: id
                },
                headers: {
                    "Content-Type": "application/json"
                }
            });
            success = true;
        } catch (err) {
            error = err?.response?.data || err;
        }

        return { success: success, error: error };
    };
}

module.exports = CherrryClient;
