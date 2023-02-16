"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/services/videoServices.js":
/*!***************************************!*\
  !*** ./src/services/videoServices.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"videoService\": function() { return /* binding */ videoService; }\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"./node_modules/@supabase/supabase-js/dist/module/index.js\");\n\nconst PROJECT_URL = \"https://njctzpwoofrfaprrnscw.supabase.co\";\nconst PUBLIC_KEY = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3cmtybGJncmRzYWNzanpqeWZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzODk1OTIsImV4cCI6MTk4Mzk2NTU5Mn0.TNKw_ndwn1A4rWkNu-0tNCfjKWJ72swLcBCDFKU79o4\";\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(PROJECT_URL, PUBLIC_KEY);\nfunction videoService() {\n    return {\n        getAllVideos (setPlaylists) {\n            supabase.from(\"video\").select(\"*\").then((dados)=>{\n                const novasPlaylists = {};\n                dados.data((video)=>{\n                    if (!novasPlaylists[video.playlist]) novasPlaylists[video.playlist] = [];\n                    novasPlaylists[video.playlist] = [\n                        video,\n                        ...novasPlaylists[video.playlist]\n                    ];\n                });\n                setPlaylists(novasPlaylists);\n            });\n        },\n        getThumbnail (url) {\n            return \"https://img.youtube.com/vi/\".concat(url.split(\"v=\")[1], \"/hqdefault.jpg\");\n        }\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvdmlkZW9TZXJ2aWNlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFxRDtBQUVyRCxNQUFNQyxjQUFjO0FBQ3BCLE1BQU1DLGFBQWE7QUFDbkIsTUFBTUMsV0FBV0gsbUVBQVlBLENBQUNDLGFBQWFDO0FBRXBDLFNBQVNFLGVBQWU7SUFDN0IsT0FBTztRQUNMQyxjQUFhQyxZQUFZLEVBQUU7WUFDekJILFNBQVNJLElBQUksQ0FBQyxTQUNYQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDLENBQUNDLFFBQVU7Z0JBQzNCLE1BQU1DLGlCQUFpQixDQUFDO2dCQUN4QkQsTUFBTUUsSUFBSSxDQUFDLENBQUNDLFFBQVU7b0JBQ3BCLElBQUksQ0FBQ0YsY0FBYyxDQUFDRSxNQUFNQyxRQUFRLENBQUMsRUFBRUgsY0FBYyxDQUFDRSxNQUFNQyxRQUFRLENBQUMsR0FBRyxFQUFFO29CQUN4RUgsY0FBYyxDQUFDRSxNQUFNQyxRQUFRLENBQUMsR0FBRzt3QkFDL0JEOzJCQUNHRixjQUFjLENBQUNFLE1BQU1DLFFBQVEsQ0FBQztxQkFDbEM7Z0JBQ0g7Z0JBQ0FSLGFBQWFLO1lBQ2Y7UUFDSjtRQUNBSSxjQUFhQyxHQUFHLEVBQUU7WUFDaEIsT0FBTyw4QkFBaUQsT0FBbkJBLElBQUlDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFDO1FBQzFEO0lBQ0Y7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zZXJ2aWNlcy92aWRlb1NlcnZpY2VzLmpzP2M5NWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcIkBzdXBhYmFzZS9zdXBhYmFzZS1qc1wiO1xuXG5jb25zdCBQUk9KRUNUX1VSTCA9ICdodHRwczovL25qY3R6cHdvb2ZyZmFwcnJuc2N3LnN1cGFiYXNlLmNvJ1xuY29uc3QgUFVCTElDX0tFWSA9ICdleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcGMzTWlPaUp6ZFhCaFltRnpaU0lzSW5KbFppSTZJbVozY210eWJHSm5jbVJ6WVdOemFucHFlV1p3SWl3aWNtOXNaU0k2SW1GdWIyNGlMQ0pwWVhRaU9qRTJOamd6T0RrMU9USXNJbVY0Y0NJNk1UazRNemsyTlRVNU1uMC5UTkt3X25kd24xQTRyV2tOdS0wdE5DZmpLV0o3MnN3TGNCQ0RGS1U3OW80J1xuY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQoUFJPSkVDVF9VUkwsIFBVQkxJQ19LRVkpXG5cbmV4cG9ydCBmdW5jdGlvbiB2aWRlb1NlcnZpY2UoKSB7XG4gIHJldHVybiB7XG4gICAgZ2V0QWxsVmlkZW9zKHNldFBsYXlsaXN0cykge1xuICAgICAgc3VwYWJhc2UuZnJvbSgndmlkZW8nKVxuICAgICAgICAuc2VsZWN0KCcqJykudGhlbigoZGFkb3MpID0+IHtcbiAgICAgICAgICBjb25zdCBub3Zhc1BsYXlsaXN0cyA9IHt9O1xuICAgICAgICAgIGRhZG9zLmRhdGEoKHZpZGVvKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW5vdmFzUGxheWxpc3RzW3ZpZGVvLnBsYXlsaXN0XSkgbm92YXNQbGF5bGlzdHNbdmlkZW8ucGxheWxpc3RdID0gW107XG4gICAgICAgICAgICBub3Zhc1BsYXlsaXN0c1t2aWRlby5wbGF5bGlzdF0gPSBbXG4gICAgICAgICAgICAgIHZpZGVvLFxuICAgICAgICAgICAgICAuLi5ub3Zhc1BsYXlsaXN0c1t2aWRlby5wbGF5bGlzdF0sXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNldFBsYXlsaXN0cyhub3Zhc1BsYXlsaXN0cyk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0VGh1bWJuYWlsKHVybCkge1xuICAgICAgcmV0dXJuIGBodHRwczovL2ltZy55b3V0dWJlLmNvbS92aS8ke3VybC5zcGxpdCgndj0nKVsxXX0vaHFkZWZhdWx0LmpwZ2BcbiAgICB9XG4gIH07XG59Il0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsIlBST0pFQ1RfVVJMIiwiUFVCTElDX0tFWSIsInN1cGFiYXNlIiwidmlkZW9TZXJ2aWNlIiwiZ2V0QWxsVmlkZW9zIiwic2V0UGxheWxpc3RzIiwiZnJvbSIsInNlbGVjdCIsInRoZW4iLCJkYWRvcyIsIm5vdmFzUGxheWxpc3RzIiwiZGF0YSIsInZpZGVvIiwicGxheWxpc3QiLCJnZXRUaHVtYm5haWwiLCJ1cmwiLCJzcGxpdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/videoServices.js\n"));

/***/ })

});