"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("../../dist/client");
const prefectures_org_json_1 = __importDefault(require("../json/prefectures_org.json"));
const industries_org_json_1 = __importDefault(require("../json/industries_org.json"));
const job_type_org_json_1 = __importDefault(require("../json/job_type_org.json"));
const languages_org_json_1 = __importDefault(require("../json/languages_org.json"));
const country_en_org_json_1 = __importDefault(require("../json/country_en_org.json"));
const rec_characteristics_org_json_1 = __importDefault(require("../json/rec_characteristics_org.json"));
const visa_org_json_1 = __importDefault(require("../json/visa_org.json"));
const prisma = new client_1.PrismaClient();
const waitFor = (ms) => new Promise((r) => setTimeout(r, ms));
async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}
async function main() {
    console.log("main");
    const checkdata = await prisma.systemLangauge.count();
    if (checkdata === 0) {
        const listLanguage = [
            { language_code: "ja", is_default: true },
            { language_code: "en", is_default: false },
            { language_code: "mn", is_default: false },
        ];
        await prisma.systemLangauge.createMany({
            data: listLanguage,
        });
    }
    const createPrefecture = async () => {
        let list_id;
        const checkdataPrefecture = await prisma.referenceList.findFirst({
            where: {
                list_name: "Prefecture",
            },
        });
        if (checkdataPrefecture === null) {
            const a = await prisma.referenceList.create({
                data: {
                    list_name: "Prefecture",
                },
            });
            list_id = a.list_id;
        }
        else {
            list_id = checkdataPrefecture.list_id;
        }
        let i = 0;
        await asyncForEach(prefectures_org_json_1.default, async (element) => {
            await waitFor(50);
            i++;
            const dictfromMaxId = await prisma.dictionary.aggregate({
                _max: {
                    dictionary_id: true,
                },
            });
            const dictMaxId = dictfromMaxId._max.dictionary_id === null
                ? 1
                : dictfromMaxId._max.dictionary_id + 1;
            await prisma.dictionary.create({
                data: {
                    dictionary_id: dictMaxId,
                    language_code: "en",
                    dic_value: element.category,
                },
            });
            await prisma.referenceListItems.create({
                data: {
                    list_id: list_id,
                    dictionary_id: dictMaxId,
                    code: `${i}`,
                    value: element.category,
                },
            });
        });
        console.log("Prefecture done");
    };
    const createIndustries = async () => {
        let list_id;
        const checkdata = await prisma.referenceList.findFirst({
            where: {
                list_name: "Industries",
            },
        });
        if (checkdata === null) {
            const a = await prisma.referenceList.create({
                data: {
                    list_name: "Industries",
                },
            });
            list_id = a.list_id;
        }
        else {
            list_id = checkdata.list_id;
        }
        let i = 0;
        await asyncForEach(industries_org_json_1.default, async (element) => {
            await waitFor(50);
            i++;
            const dictfromMaxId = await prisma.dictionary.aggregate({
                _max: {
                    dictionary_id: true,
                },
            });
            const dictMaxId = dictfromMaxId._max.dictionary_id === null
                ? 1
                : dictfromMaxId._max.dictionary_id + 1;
            await prisma.dictionary.create({
                data: {
                    dictionary_id: dictMaxId,
                    language_code: "en",
                    dic_value: element.category,
                },
            });
            const parent = await prisma.referenceListItems.create({
                data: {
                    list_id: list_id,
                    dictionary_id: dictMaxId,
                    code: `${i}`,
                    value: element.category,
                },
            });
            await asyncForEach(element.subcategory, async (sub) => {
                await waitFor(30);
                const dictfromMaxId1 = await prisma.dictionary.aggregate({
                    _max: {
                        dictionary_id: true,
                    },
                });
                const dictMaxId1 = dictfromMaxId1._max.dictionary_id === null
                    ? 1
                    : dictfromMaxId1._max.dictionary_id + 1;
                await prisma.dictionary.create({
                    data: {
                        dictionary_id: dictMaxId1,
                        language_code: "en",
                        dic_value: sub.subvalue,
                    },
                });
                await prisma.referenceListItems.create({
                    data: {
                        list_id: list_id,
                        dictionary_id: dictMaxId1,
                        parent_id: parent.listitem_id,
                        value: sub.subvalue,
                    },
                });
            });
        });
        console.log("Industries done");
    };
    const createJob = async () => {
        let list_id;
        const checkdata = await prisma.referenceList.findFirst({
            where: {
                list_name: "Job types",
            },
        });
        if (checkdata === null) {
            const a = await prisma.referenceList.create({
                data: {
                    list_name: "Job types",
                },
            });
            list_id = a.list_id;
        }
        else {
            list_id = checkdata.list_id;
        }
        let i = 0;
        await asyncForEach(job_type_org_json_1.default, async (element) => {
            await waitFor(50);
            i++;
            const dictfromMaxId = await prisma.dictionary.aggregate({
                _max: {
                    dictionary_id: true,
                },
            });
            const dictMaxId = dictfromMaxId._max.dictionary_id === null
                ? 1
                : dictfromMaxId._max.dictionary_id + 1;
            await prisma.dictionary.create({
                data: {
                    dictionary_id: dictMaxId,
                    language_code: "en",
                    dic_value: element.category,
                },
            });
            const parent = await prisma.referenceListItems.create({
                data: {
                    list_id: list_id,
                    dictionary_id: dictMaxId,
                    code: `${i}`,
                    value: element.category,
                },
            });
            await asyncForEach(element.subcategory, async (sub) => {
                await waitFor(30);
                const dictfromMaxId1 = await prisma.dictionary.aggregate({
                    _max: {
                        dictionary_id: true,
                    },
                });
                const dictMaxId1 = dictfromMaxId1._max.dictionary_id === null
                    ? 1
                    : dictfromMaxId1._max.dictionary_id + 1;
                await prisma.dictionary.create({
                    data: {
                        dictionary_id: dictMaxId1,
                        language_code: "en",
                        dic_value: sub.subvalue,
                    },
                });
                await prisma.referenceListItems.create({
                    data: {
                        list_id: list_id,
                        dictionary_id: dictMaxId1,
                        parent_id: parent.listitem_id,
                        value: sub.subvalue,
                    },
                });
            });
        });
        console.log("Jobs done");
    };
    const createLanuages = async () => {
        let list_id;
        const checkdata = await prisma.referenceList.findFirst({
            where: {
                list_name: "Languages",
            },
        });
        if (checkdata === null) {
            const a = await prisma.referenceList.create({
                data: {
                    list_name: "Languages",
                },
            });
            list_id = a.list_id;
        }
        else {
            list_id = checkdata.list_id;
        }
        let i = 0;
        await asyncForEach(languages_org_json_1.default, async (element) => {
            await waitFor(50);
            i++;
            const dictfromMaxId = await prisma.dictionary.aggregate({
                _max: {
                    dictionary_id: true,
                },
            });
            const dictMaxId = dictfromMaxId._max.dictionary_id === null
                ? 1
                : dictfromMaxId._max.dictionary_id + 1;
            await prisma.dictionary.create({
                data: {
                    dictionary_id: dictMaxId,
                    language_code: "en",
                    dic_value: element.category,
                },
            });
            await prisma.referenceListItems.create({
                data: {
                    list_id: list_id,
                    dictionary_id: dictMaxId,
                    code: `${i}`,
                    value: element.category,
                },
            });
        });
        console.log("Languages done");
    };
    const createJob_Charac = async () => {
        let list_id;
        const checkdata = await prisma.referenceList.findFirst({
            where: {
                list_name: "Recurite Character",
            },
        });
        if (checkdata === null) {
            const a = await prisma.referenceList.create({
                data: {
                    list_name: "Recurite Character",
                },
            });
            list_id = a.list_id;
        }
        else {
            list_id = checkdata.list_id;
        }
        let i = 0;
        await asyncForEach(rec_characteristics_org_json_1.default, async (element) => {
            await waitFor(50);
            i++;
            const dictfromMaxId = await prisma.dictionary.aggregate({
                _max: {
                    dictionary_id: true,
                },
            });
            const dictMaxId = dictfromMaxId._max.dictionary_id === null
                ? 1
                : dictfromMaxId._max.dictionary_id + 1;
            await prisma.dictionary.create({
                data: {
                    dictionary_id: dictMaxId,
                    language_code: "en",
                    dic_value: element.category,
                },
            });
            await prisma.referenceListItems.create({
                data: {
                    list_id: list_id,
                    dictionary_id: dictMaxId,
                    code: `${i}`,
                    value: element.category,
                },
            });
        });
        console.log("Job character done");
    };
    const createCountries = async () => {
        const checkdata = await prisma.referenceList.findFirst({
            where: {
                list_name: "Countries",
            },
        });
        if (checkdata === null) {
            await prisma.referenceList.create({
                data: {
                    list_name: "Countries",
                },
            });
        }
        else {
            const list_id = checkdata.list_id;
            let i = 0;
            await asyncForEach(country_en_org_json_1.default, async (element) => {
                await waitFor(50);
                i++;
                const dictfromMaxId = await prisma.dictionary.aggregate({
                    _max: {
                        dictionary_id: true,
                    },
                });
                const dictMaxId = dictfromMaxId._max.dictionary_id === null
                    ? 1
                    : dictfromMaxId._max.dictionary_id + 1;
                await prisma.dictionary.create({
                    data: {
                        dictionary_id: dictMaxId,
                        language_code: "en",
                        dic_value: element.category,
                    },
                });
                await prisma.referenceListItems.create({
                    data: {
                        list_id: list_id,
                        dictionary_id: dictMaxId,
                        code: `${i}`,
                        value: element.category,
                    },
                });
            });
        }
        console.log("Country done");
    };
    const createVisaTypes = async () => {
        let list_id;
        const checkdata = await prisma.referenceList.findFirst({
            where: {
                list_name: "Visa types",
            },
        });
        if (checkdata === null) {
            const n = await prisma.referenceList.create({
                data: {
                    list_name: "Visa types",
                },
            });
            list_id = n.list_id;
        }
        else {
            list_id = checkdata.list_id;
        }
        let i = 0;
        await asyncForEach(visa_org_json_1.default, async (element) => {
            await waitFor(50);
            i++;
            const dictfromMaxId = await prisma.dictionary.aggregate({
                _max: {
                    dictionary_id: true,
                },
            });
            const dictMaxId = dictfromMaxId._max.dictionary_id === null
                ? 1
                : dictfromMaxId._max.dictionary_id + 1;
            await prisma.dictionary.create({
                data: {
                    dictionary_id: dictMaxId,
                    language_code: "en",
                    dic_value: element.category,
                },
            });
            await prisma.referenceListItems.create({
                data: {
                    list_id: list_id,
                    dictionary_id: dictMaxId,
                    code: `${i}`,
                    value: element.category,
                },
            });
        });
        console.log("visa done");
    };
    await createVisaTypes();
    await createPrefecture();
    await createIndustries();
    await createJob();
    await createLanuages();
    await createCountries();
    await createJob_Charac();
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map