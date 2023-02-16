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

/***/ "./src/components/RegisterVideo/index.js":
/*!***********************************************!*\
  !*** ./src/components/RegisterVideo/index.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RegisterVideo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/RegisterVideo/styles.js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @supabase/supabase-js */ \"./node_modules/@supabase/supabase-js/dist/module/index.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nfunction useForm(propsDoForm) {\n    _s();\n    const [values, setValues] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(propsDoForm.initialValues);\n    return {\n        values,\n        handleChange: (evento)=>{\n            console.log(evento.target);\n            const value = evento.target.value;\n            const name = evento.target.name;\n            setValues({\n                ...values,\n                [name]: value\n            });\n        },\n        clearForm () {\n            setValues({});\n        }\n    };\n}\n_s(useForm, \"BIYExSth+WYKJ6/LYKi6Ip+Sfck=\");\nconst PROJECT_URL = \"https://njctzpwoofrfaprrnscw.supabase.co\";\nconst PUBLIC_KEY = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rc3Rhcm9qdWR3eG1qZGN1aGVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ4OTU1OTUsImV4cCI6MTk4MDQ3MTU5NX0.shktap50ImF9SqhqcsugSpg38trqKe7aNEP4RvhpQE0\";\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_3__.createClient)(PROJECT_URL, PUBLIC_KEY);\n// get youtube thumbnail from video url\nfunction getThumbnail(url) {\n    return \"https://img.youtube.com/vi/\".concat(url.split(\"v=\")[1], \"/hqdefault.jpg\");\n}\nfunction RegisterVideo() {\n    _s1();\n    const formCadastro = useForm({\n        initialValues: {\n            titulo: \"CAMINHOS PARA SER UM DEV FRONT-END EM 2023\",\n            url: \"https://www.youtube.com/watch?v=30nlBGjPRYM\"\n        }\n    });\n    const [formVisivel, setFormVisivel] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    /*\n    ## O que precisamos para o form funcionar?\n    - pegar os dados, que precisam vir do state\n        - titulo\n        - url do vídeo \n    - precisamos ter um onSubmit do nosso form\n    - Limpar o formulário após o Submit\n    */ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.StyledRegisterVideo, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"add-video\",\n                onClick: ()=>setFormVisivel(true),\n                children: \"+\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erick\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Programa\\xe7\\xe3o\\\\React.js\\\\CodeTube\\\\CodeTube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this),\n            formVisivel ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: (evento)=>{\n                    evento.preventDefault();\n                    console.log(formCadastro.values);\n                    // Contrato entre o nosso Front e o BackEnd\n                    supabase.from(\"video\").insert({\n                        title: formCadastro.values.titulo,\n                        url: formCadastro.values.url,\n                        thumb: getThumbnail(formCadastro.values.url),\n                        playlist: \"jogos\"\n                    }).then((oqueveio)=>{\n                        console.log(oqueveio);\n                    }).catch((err)=>{\n                        console.log(err);\n                    });\n                    setFormVisivel(false);\n                    formCadastro.clearForm();\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            className: \"close-modal\",\n                            onClick: ()=>setFormVisivel(false),\n                            children: \"X\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erick\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Programa\\xe7\\xe3o\\\\React.js\\\\CodeTube\\\\CodeTube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                            lineNumber: 79,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            placeholder: \"Titulo do v\\xeddeo\",\n                            name: \"titulo\",\n                            value: formCadastro.values.titulo,\n                            onChange: formCadastro.handleChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erick\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Programa\\xe7\\xe3o\\\\React.js\\\\CodeTube\\\\CodeTube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                            lineNumber: 82,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            placeholder: \"URL\",\n                            name: \"url\",\n                            value: formCadastro.values.url,\n                            onChange: formCadastro.handleChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erick\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Programa\\xe7\\xe3o\\\\React.js\\\\CodeTube\\\\CodeTube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                            lineNumber: 88,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Cadastrar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erick\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Programa\\xe7\\xe3o\\\\React.js\\\\CodeTube\\\\CodeTube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                            lineNumber: 94,\n                            columnNumber: 29\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\erick\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Programa\\xe7\\xe3o\\\\React.js\\\\CodeTube\\\\CodeTube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                    lineNumber: 78,\n                    columnNumber: 25\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erick\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Programa\\xe7\\xe3o\\\\React.js\\\\CodeTube\\\\CodeTube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                lineNumber: 57,\n                columnNumber: 21\n            }, this) : false\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\erick\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Programa\\xe7\\xe3o\\\\React.js\\\\CodeTube\\\\CodeTube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, this);\n}\n_s1(RegisterVideo, \"D6rASRn6VaOT1KiQqEnUQ71Yqp8=\", false, function() {\n    return [\n        useForm\n    ];\n});\n_c = RegisterVideo;\nvar _c;\n$RefreshReg$(_c, \"RegisterVideo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWdpc3RlclZpZGVvL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFDcUI7QUFDTTtBQUVyRCxTQUFTRyxRQUFRQyxXQUFXLEVBQUU7O0lBQzFCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTixxREFBYyxDQUFDSSxZQUFZSSxhQUFhO0lBRXBFLE9BQU87UUFDSEg7UUFDQUksY0FBYyxDQUFDQyxTQUFXO1lBQ3RCQyxRQUFRQyxHQUFHLENBQUNGLE9BQU9HLE1BQU07WUFDekIsTUFBTUMsUUFBUUosT0FBT0csTUFBTSxDQUFDQyxLQUFLO1lBQ2pDLE1BQU1DLE9BQU9MLE9BQU9HLE1BQU0sQ0FBQ0UsSUFBSTtZQUMvQlQsVUFBVTtnQkFDTixHQUFHRCxNQUFNO2dCQUNULENBQUNVLEtBQUssRUFBRUQ7WUFDWjtRQUNKO1FBQ0FFLGFBQVk7WUFDUlYsVUFBVSxDQUFDO1FBQ2Y7SUFDSjtBQUNKO0dBbEJTSDtBQW9CVCxNQUFNYyxjQUFjO0FBQ3BCLE1BQU1DLGFBQWE7QUFDbkIsTUFBTUMsV0FBV2pCLG1FQUFZQSxDQUFDZSxhQUFhQztBQUUzQyx1Q0FBdUM7QUFDdkMsU0FBU0UsYUFBYUMsR0FBRyxFQUFFO0lBQ3ZCLE9BQU8sOEJBQWlELE9BQW5CQSxJQUFJQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBQztBQUM1RDtBQUVlLFNBQVNDLGdCQUFnQjs7SUFDcEMsTUFBTUMsZUFBZXJCLFFBQVE7UUFDekJLLGVBQWU7WUFBRWlCLFFBQVE7WUFBOENKLEtBQUs7UUFBOEM7SUFDOUg7SUFDQSxNQUFNLENBQUNLLGFBQWFDLGVBQWUsR0FBRzNCLHFEQUFjLENBQUMsS0FBSztJQUMxRDs7Ozs7OztJQU9BLEdBRUEscUJBQ0ksOERBQUNDLHdEQUFtQkE7OzBCQUNoQiw4REFBQzJCO2dCQUFPQyxXQUFVO2dCQUFZQyxTQUFTLElBQU1ILGVBQWUsSUFBSTswQkFBRzs7Ozs7O1lBS2xFRCw0QkFFTyw4REFBQ0s7Z0JBQUtDLFVBQVUsQ0FBQ3RCLFNBQVc7b0JBQ3hCQSxPQUFPdUIsY0FBYztvQkFDckJ0QixRQUFRQyxHQUFHLENBQUNZLGFBQWFuQixNQUFNO29CQUUvQiwyQ0FBMkM7b0JBQzNDYyxTQUFTZSxJQUFJLENBQUMsU0FBU0MsTUFBTSxDQUFDO3dCQUMxQkMsT0FBT1osYUFBYW5CLE1BQU0sQ0FBQ29CLE1BQU07d0JBQ2pDSixLQUFLRyxhQUFhbkIsTUFBTSxDQUFDZ0IsR0FBRzt3QkFDNUJnQixPQUFPakIsYUFBYUksYUFBYW5CLE1BQU0sQ0FBQ2dCLEdBQUc7d0JBQzNDaUIsVUFBVTtvQkFDYixHQUNDQyxJQUFJLENBQUMsQ0FBQ0MsV0FBYTt3QkFDakI3QixRQUFRQyxHQUFHLENBQUM0QjtvQkFDZixHQUNDQyxLQUFLLENBQUMsQ0FBQ0MsTUFBUTt3QkFDYi9CLFFBQVFDLEdBQUcsQ0FBQzhCO29CQUNmO29CQUVEZixlQUFlLEtBQUs7b0JBQ3BCSCxhQUFhUixTQUFTO2dCQUMxQjswQkFDSSw0RUFBQzJCOztzQ0FDRyw4REFBQ2Y7NEJBQU9nQixNQUFLOzRCQUFTZixXQUFVOzRCQUFjQyxTQUFTLElBQU1ILGVBQWUsS0FBSztzQ0FBRzs7Ozs7O3NDQUdwRiw4REFBQ2tCOzRCQUNHQyxhQUFZOzRCQUNaL0IsTUFBSzs0QkFDTEQsT0FBT1UsYUFBYW5CLE1BQU0sQ0FBQ29CLE1BQU07NEJBQ2pDc0IsVUFBVXZCLGFBQWFmLFlBQVk7Ozs7OztzQ0FFdkMsOERBQUNvQzs0QkFDR0MsYUFBWTs0QkFDWi9CLE1BQUs7NEJBQ0xELE9BQU9VLGFBQWFuQixNQUFNLENBQUNnQixHQUFHOzRCQUM5QjBCLFVBQVV2QixhQUFhZixZQUFZOzs7Ozs7c0NBRXZDLDhEQUFDbUI7NEJBQU9nQixNQUFLO3NDQUFTOzs7Ozs7Ozs7Ozs7Ozs7O3VCQU1oQyxLQUFLOzs7Ozs7O0FBR3ZCLENBQUM7SUFyRXVCckI7O1FBQ0NwQjs7O0tBRERvQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9SZWdpc3RlclZpZGVvL2luZGV4LmpzPzM0NWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU3R5bGVkUmVnaXN0ZXJWaWRlbyB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcIkBzdXBhYmFzZS9zdXBhYmFzZS1qc1wiO1xuXG5mdW5jdGlvbiB1c2VGb3JtKHByb3BzRG9Gb3JtKSB7XG4gICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IFJlYWN0LnVzZVN0YXRlKHByb3BzRG9Gb3JtLmluaXRpYWxWYWx1ZXMpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWVzLFxuICAgICAgICBoYW5kbGVDaGFuZ2U6IChldmVudG8pID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50by50YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBldmVudG8udGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGV2ZW50by50YXJnZXQubmFtZVxuICAgICAgICAgICAgc2V0VmFsdWVzKHtcbiAgICAgICAgICAgICAgICAuLi52YWx1ZXMsXG4gICAgICAgICAgICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBjbGVhckZvcm0oKSB7XG4gICAgICAgICAgICBzZXRWYWx1ZXMoe30pO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuY29uc3QgUFJPSkVDVF9VUkwgPSBcImh0dHBzOi8vbmpjdHpwd29vZnJmYXBycm5zY3cuc3VwYWJhc2UuY29cIjtcbmNvbnN0IFBVQkxJQ19LRVkgPSBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwYzNNaU9pSnpkWEJoWW1GelpTSXNJbkpsWmlJNkltOXJjM1JoY205cWRXUjNlRzFxWkdOMWFHVmhJaXdpY205c1pTSTZJbUZ1YjI0aUxDSnBZWFFpT2pFMk5qUTRPVFUxT1RVc0ltVjRjQ0k2TVRrNE1EUTNNVFU1TlgwLnNoa3RhcDUwSW1GOVNxaHFjc3VnU3BnMzh0cnFLZTdhTkVQNFJ2aHBRRTBcIjtcbmNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KFBST0pFQ1RfVVJMLCBQVUJMSUNfS0VZKTtcblxuLy8gZ2V0IHlvdXR1YmUgdGh1bWJuYWlsIGZyb20gdmlkZW8gdXJsXG5mdW5jdGlvbiBnZXRUaHVtYm5haWwodXJsKSB7XG4gICAgcmV0dXJuIGBodHRwczovL2ltZy55b3V0dWJlLmNvbS92aS8ke3VybC5zcGxpdChcInY9XCIpWzFdfS9ocWRlZmF1bHQuanBnYDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVnaXN0ZXJWaWRlbygpIHtcbiAgICBjb25zdCBmb3JtQ2FkYXN0cm8gPSB1c2VGb3JtKHtcbiAgICAgICAgaW5pdGlhbFZhbHVlczogeyB0aXR1bG86IFwiQ0FNSU5IT1MgUEFSQSBTRVIgVU0gREVWIEZST05ULUVORCBFTSAyMDIzXCIsIHVybDogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PTMwbmxCR2pQUllNXCIgfVxuICAgIH0pO1xuICAgIGNvbnN0IFtmb3JtVmlzaXZlbCwgc2V0Rm9ybVZpc2l2ZWxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIC8qXG4gICAgIyMgTyBxdWUgcHJlY2lzYW1vcyBwYXJhIG8gZm9ybSBmdW5jaW9uYXI/XG4gICAgLSBwZWdhciBvcyBkYWRvcywgcXVlIHByZWNpc2FtIHZpciBkbyBzdGF0ZVxuICAgICAgICAtIHRpdHVsb1xuICAgICAgICAtIHVybCBkbyB2w61kZW8gXG4gICAgLSBwcmVjaXNhbW9zIHRlciB1bSBvblN1Ym1pdCBkbyBub3NzbyBmb3JtXG4gICAgLSBMaW1wYXIgbyBmb3JtdWzDoXJpbyBhcMOzcyBvIFN1Ym1pdFxuICAgICovXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkUmVnaXN0ZXJWaWRlbz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWRkLXZpZGVvXCIgb25DbGljaz17KCkgPT4gc2V0Rm9ybVZpc2l2ZWwodHJ1ZSl9PlxuICAgICAgICAgICAgICAgICtcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgey8qIFRlcm7DoXJpbyAqL31cbiAgICAgICAgICAgIHsvKiBPcGVyYWRvcmVzIGRlIEN1cnRvLWNpcmN1aXRvICovfVxuICAgICAgICAgICAge2Zvcm1WaXNpdmVsXG4gICAgICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZXZlbnRvKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudG8ucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZvcm1DYWRhc3Ryby52YWx1ZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDb250cmF0byBlbnRyZSBvIG5vc3NvIEZyb250IGUgbyBCYWNrRW5kXG4gICAgICAgICAgICAgICAgICAgICAgICBzdXBhYmFzZS5mcm9tKFwidmlkZW9cIikuaW5zZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogZm9ybUNhZGFzdHJvLnZhbHVlcy50aXR1bG8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBmb3JtQ2FkYXN0cm8udmFsdWVzLnVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHVtYjogZ2V0VGh1bWJuYWlsKGZvcm1DYWRhc3Ryby52YWx1ZXMudXJsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5bGlzdDogXCJqb2dvc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKG9xdWV2ZWlvKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cob3F1ZXZlaW8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEZvcm1WaXNpdmVsKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1DYWRhc3Ryby5jbGVhckZvcm0oKTtcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlLW1vZGFsXCIgb25DbGljaz17KCkgPT4gc2V0Rm9ybVZpc2l2ZWwoZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdHVsbyBkbyB2w61kZW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGl0dWxvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1DYWRhc3Ryby52YWx1ZXMudGl0dWxvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybUNhZGFzdHJvLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVSTFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1cmxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybUNhZGFzdHJvLnZhbHVlcy51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtQ2FkYXN0cm8uaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhZGFzdHJhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBmYWxzZX1cbiAgICAgICAgPC9TdHlsZWRSZWdpc3RlclZpZGVvPlxuICAgIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJTdHlsZWRSZWdpc3RlclZpZGVvIiwiY3JlYXRlQ2xpZW50IiwidXNlRm9ybSIsInByb3BzRG9Gb3JtIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidXNlU3RhdGUiLCJpbml0aWFsVmFsdWVzIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnRvIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwibmFtZSIsImNsZWFyRm9ybSIsIlBST0pFQ1RfVVJMIiwiUFVCTElDX0tFWSIsInN1cGFiYXNlIiwiZ2V0VGh1bWJuYWlsIiwidXJsIiwic3BsaXQiLCJSZWdpc3RlclZpZGVvIiwiZm9ybUNhZGFzdHJvIiwidGl0dWxvIiwiZm9ybVZpc2l2ZWwiLCJzZXRGb3JtVmlzaXZlbCIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJmb3JtIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImZyb20iLCJpbnNlcnQiLCJ0aXRsZSIsInRodW1iIiwicGxheWxpc3QiLCJ0aGVuIiwib3F1ZXZlaW8iLCJjYXRjaCIsImVyciIsImRpdiIsInR5cGUiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/RegisterVideo/index.js\n"));

/***/ })

});