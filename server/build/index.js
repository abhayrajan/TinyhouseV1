"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const _ = __importStar(require("lodash"));
const listings_1 = require("./listings");
const app = express_1.default();
const port = 9000;
const one = 1;
const two = 2;
app.use(express_1.default.json());
app.get("/", (_req, res) => res.send(`1 + 2 = ${one + two}`));
app.get("/listings", (_req, res) => {
    res.send(listings_1.listings);
});
app.post("/delete-listings", (req, res) => {
    const id = req.body.id;
    console.log(id);
    const index = _.findIndex(listings_1.listings, l => l.id == id);
    if (index >= 0) {
        res.send(listings_1.listings.splice(index, 1));
    }
    else {
        res.send("id not found");
    }
});
app.listen(port);
console.log(`[app] : http://localhost:${port}`);
//# sourceMappingURL=index.js.map