(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{222:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"soft-deleting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#soft-deleting","aria-hidden":"true"}},[t._v("#")]),t._v(" Soft Deleting")]),t._v(" "),a("p",[t._v("The default migration takes advantage of "),a("code",[t._v("onDelete('cascade')")]),t._v(" clauses within the pivot tables to remove relations when a parent record is deleted. If for some reason you can not use cascading deletes in your database, the LaratrustRole and LaratrustPermission classes, and the HasRole trait include event listeners to manually delete records in relevant pivot tables.")]),t._v(" "),a("p",[t._v("In the interest of not accidentally deleting data, the event listeners will "),a("strong",[t._v("not")]),t._v(" delete pivot data if the model uses soft deleting. However, due to limitations in Laravel's event listeners, there is no way to distinguish between a call to "),a("code",[t._v("delete()")]),t._v(" versus a call to "),a("code",[t._v("forceDelete()")]),t._v(". For this reason, "),a("strong",[t._v("before you force delete a model, you must manually delete any of the relationship data")]),t._v(" (unless your pivot tables uses cascading deletes). For example:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token variable"}},[t._v("$role")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Role"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token function"}},[t._v("findOrFail")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Pull back a given role")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Regular Delete")]),t._v("\n"),a("span",{attrs:{class:"token variable"}},[t._v("$role")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("delete")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// This will work no matter what")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Force Delete")]),t._v("\n"),a("span",{attrs:{class:"token variable"}},[t._v("$role")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("users")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("sync")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Delete relationship data")]),t._v("\n"),a("span",{attrs:{class:"token variable"}},[t._v("$role")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("permissions")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("sync")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Delete relationship data")]),t._v("\n\n"),a("span",{attrs:{class:"token variable"}},[t._v("$role")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("forceDelete")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Now force delete will work regardless of whether the pivot table has cascading delete")]),t._v("\n")])])])])}],!1,null,null,null);e.options.__file="soft-deleting.md";s.default=e.exports}}]);