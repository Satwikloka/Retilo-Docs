module.exports = {

"[project]/app/page.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function Page({ params, searchParams }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
        children: "My Page"
    }, void 0, false, {
        fileName: "[project]/app/page.jsx",
        lineNumber: 2,
        columnNumber: 12
    }, this);
}
}}),
"[project]/node_modules/nextra/dist/server/page-map/normalize.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "normalizePageMap": (()=>normalizePageMap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$validation$2d$error$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-validation-error/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$server$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nextra/dist/server/schemas.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nextra/dist/server/utils.js [app-rsc] (ecmascript)");
;
;
;
function normalizePageMap(pageMap) {
    if (Array.isArray(pageMap)) {
        return sortFolder(pageMap.map((item)=>"children" in item ? normalizePageMap(item) : item));
    }
    return sortFolder(pageMap);
}
function titlize(item, meta) {
    const titleFromMeta = meta[item.name]?.title;
    if (titleFromMeta) return titleFromMeta;
    if ("frontMatter" in item && item.frontMatter) {
        const titleFromFrontMatter = item.frontMatter.sidebarTitle || item.frontMatter.title;
        if (titleFromFrontMatter) return titleFromFrontMatter;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pageTitleFromFilename"])(item.name);
}
function sortFolder(pageMap) {
    const newChildren = [];
    const isFolder = !Array.isArray(pageMap);
    const folder = isFolder ? {
        ...pageMap
    } : {
        children: pageMap
    };
    const meta = {};
    for (const item of folder.children){
        if (isFolder && "frontMatter" in item && item.frontMatter?.asIndexPage && item.route === folder.route) {
            folder.frontMatter = item.frontMatter;
        } else if ("children" in item) {
            newChildren.push(normalizePageMap(item));
        } else if ("data" in item) {
            for (const [key, titleOrObject] of Object.entries(item.data)){
                const { data, error } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$server$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["metaSchema"].safeParse(titleOrObject);
                if (error) {
                    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$validation$2d$error$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fromZodError"])(error);
                }
                if (key === "*") {
                    delete data.title;
                    delete data.href;
                }
                meta[key] = data;
            }
        } else {
            newChildren.push(item);
        }
    }
    const metaKeys = Object.keys(meta);
    const hasIndexKey = metaKeys.includes("index");
    const items = newChildren.sort((a, b)=>{
        const indexA = metaKeys.indexOf(a.name);
        const indexB = metaKeys.indexOf(b.name);
        if (!hasIndexKey) {
            if (b.name === "index") return 1;
            if (a.name === "index") return -1;
        }
        if (indexA === -1 && indexB === -1) return a.name < b.name ? -1 : 1;
        if (indexA === -1) return 1;
        if (indexB === -1) return -1;
        return indexA - indexB;
    });
    for (const [index, metaKey] of metaKeys.filter((key)=>key !== "*").entries()){
        const metaItem = meta[metaKey];
        const item = items.find((item2)=>item2.name === metaKey);
        if (metaItem.type === "menu" && item) {
            item.items = metaItem.items;
            const { children } = items.find((i)=>i.name === metaKey);
            for (const [key, value] of Object.entries(// @ts-expect-error fixme
            item.items)){
                if (!value.href && children.every((i)=>i.name !== key)) {
                    throw new Error(`Validation of "_meta" file has failed.
The field key "${metaKey}.items.${key}" in \`_meta\` file refers to a page that cannot be found, remove this key from "_meta" file.`);
                }
            }
        }
        if (item) continue;
        const isValid = metaItem.type === "separator" || metaItem.type === "menu" || metaItem.href;
        if (!isValid) {
            throw new Error(`Validation of "_meta" file has failed.
The field key "${metaKey}" in \`_meta\` file refers to a page that cannot be found, remove this key from "_meta" file.`);
        }
        const currentItem = items[index];
        if (currentItem && currentItem.name === metaKey) continue;
        items.splice(index, // index at which to start changing the array
        0, // remove zero items
        // @ts-expect-error fixme
        {
            name: metaKey,
            ...meta[metaKey]
        });
    }
    if (metaKeys.length) {
        items.unshift({
            data: meta
        });
    }
    const itemsWithTitle = items.map((item)=>{
        const isSeparator = "type" in item && item.type === "separator";
        if ("name" in item && !isSeparator) {
            return {
                ...item,
                title: titlize(item, meta)
            };
        }
        return item;
    });
    const result = isFolder ? {
        ...folder,
        title: titlize(folder, {}),
        children: itemsWithTitle
    } : itemsWithTitle;
    return result;
}
;
}}),
"[project]/node_modules/nextra/dist/server/page-map/index.js [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getMetadata": (()=>getMetadata)
});
;
;
;
;
;
function getMetadata(page) {
    return "generateMetadata" in page ? page.generateMetadata({}) : page.metadata;
}
;
}}),
"[project]/node_modules/nextra/dist/server/page-map/placeholder.js?lang= [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "RouteToFilepath": (()=>RouteToFilepath),
    "pageMap": (()=>pageMap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$server$2f$page$2d$map$2f$normalize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nextra/dist/server/page-map/normalize.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$server$2f$page$2d$map$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/nextra/dist/server/page-map/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/page.jsx [app-rsc] (ecmascript)");
;
;
const pageMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$server$2f$page$2d$map$2f$normalize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizePageMap"])([
    {
        name: "index",
        route: "/",
        frontMatter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$server$2f$page$2d$map$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getMetadata"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__)
    }
]);
const RouteToFilepath = {};
}}),

};

//# sourceMappingURL=_a928ec1a._.js.map