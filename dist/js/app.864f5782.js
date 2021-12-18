(function(e){function t(t){for(var a,o,i=t[0],c=t[1],d=t[2],u=0,p=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(p.length)p.shift()();return n.push.apply(n,d||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],a=!0,i=1;i<s.length;i++){var c=s[i];0!==r[c]&&(a=!1)}a&&(n.splice(t--,1),e=o(o.s=s[0]))}return e}var a={},r={app:0},n=[];function o(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=a,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(s,a,function(t){return e[t]}.bind(null,a));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var l=c;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";s("85ec")},"26ca":function(e,t,s){},"2f0f":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("ResultCompiler")],1)},n=[],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._m(0),s("section",{directives:[{name:"show",rawName:"v-show",value:e.displayTop,expression:"displayTop"}],staticClass:"section"},[s("b-field",{attrs:{label:"Dataset for this compilation",grouped:""}},[s("b-select",{attrs:{placeholder:"Select a programme"},on:{input:e.initDb},model:{value:e.selectedProg,callback:function(t){e.selectedProg=t},expression:"selectedProg"}},e._l(e.programmes,(function(t){return s("option",{key:t.code,domProps:{value:t.code}},[e._v(" "+e._s(t.title)+" ")])})),0),e.selectedProg?s("b-select",{attrs:{placeholder:"Select a session"},on:{input:e.initDb},model:{value:e.selectedYear,callback:function(t){e.selectedYear=t},expression:"selectedYear"}},e._l(e.sessions,(function(t){return s("option",{key:t.id,domProps:{value:t.id}},[e._v(" "+e._s(t.id)+" ")])})),0):e._e()],1),s("div",{staticClass:"buttons"},[s("b-button",{staticClass:"is-primary",attrs:{"icon-left":"plus"},on:{click:e.addCourseDialog}},[e._v("Add Courses")]),s("b-button",{staticClass:"is-danger",attrs:{"icon-left":"plus"},on:{click:e.addGradeDialog}},[e._v("Add Grades")])],1)],1),s("CandidateSpace",{attrs:{selectedProg:e.selectedProg,selectedYear:e.selectedYear,sessions:e.sessions,gradeList:e.gradeList,displayTop:e.displayTop},on:{"show-top":e.showTop}})],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"hero is-primary"},[a("div",{staticClass:"hero-body"},[a("p",{staticClass:"image is-32x32"},[a("img",{attrs:{src:s("a3bf")}})]),a("p",{staticClass:"title"},[e._v("Catasys Results Helper :: "),a("i",[e._v("catares-help")])]),a("p",{staticClass:"subtitle"},[e._v(" An ad-hoc results compilation system! Made with 💗 by 0x4b656e. :) ")])])])}],c=s("ade3"),d=s("1da1"),l=(s("96cf"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"modal-card"},[s("header",{staticClass:"modal-card-head"},[s("p",{staticClass:"modal-card-title"},[e._v(" "+e._s("Manage Course Listings for the year "+e.selectedYear)+" ")])]),s("section",{staticClass:"modal-card-body"},[s("b-field",{attrs:{grouped:"","group-multiline":""}},[e.checkedRows.length?s("b-button",{staticClass:"field",attrs:{label:"Delete checked",type:"is-danger","icon-left":"close"},on:{click:e.deleteRows}}):e._e()],1),s("b-tabs",[s("b-tab-item",{attrs:{label:"Table"}},[void 0!=e.repos.courseList[e.selectedYear]?s("b-table",{attrs:{data:e.repos.courseList[e.selectedYear].data,columns:e.courseColumns,focusable:"",checkable:"","checked-rows":e.checkedRows,striped:""},on:{"update:checkedRows":function(t){e.checkedRows=t},"update:checked-rows":function(t){e.checkedRows=t}},scopedSlots:e._u([{key:"empty",fn:function(){return[s("div",{staticClass:"has-text-centered"},[e._v("No records")])]},proxy:!0}],null,!1,2220461136)}):e._e()],1),s("b-tab-item",{attrs:{label:"Entry"}},[s("b-field",{attrs:{label:"Code"}},[s("b-input",{ref:"codeTextbox",attrs:{title:e.course.code},model:{value:e.course.code,callback:function(t){e.$set(e.course,"code",t)},expression:"course.code"}})],1),s("b-field",{attrs:{label:"Title"}},[s("b-input",{attrs:{title:e.course.title},model:{value:e.course.title,callback:function(t){e.$set(e.course,"title",t)},expression:"course.title"}})],1),s("b-field",{attrs:{label:"Credits"}},[s("b-select",{attrs:{placeholder:"Select credits..."},model:{value:e.course.credits,callback:function(t){e.$set(e.course,"credits",t)},expression:"course.credits"}},e._l(Array.from(Array(10).keys()),(function(t,a){return s("option",{key:a,domProps:{value:t}},[e._v(" "+e._s(t)+" ")])})),0),s("b-button",{attrs:{type:"is-primary","icon-left":"check"},on:{click:e.saveCourse}},[e._v("Add")])],1)],1)],1)],1),s("footer",{staticClass:"modal-card-foot"},[s("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(t){return e.$parent.close()}}},[e._v(" Close ")])])])}),u=[],p=(s("a9e3"),s("99af"),s("498a"),s("159b"),s("a434"),{props:{repos:{type:Object,required:!0},selectedYear:{type:Number,required:!0}},computed:{courseInfo:function(){return this.course&&"code"in this.course?"".concat(this.course.code.trim()," : ").concat(this.course.title.trim()):""}},data:function(){return{checkedRows:[],course:{code:"",title:"",credits:-1},gradeColumns:[{field:"id",label:"ID"},{field:"gradeLetter",label:"Grade Letter"}],courseColumns:[{field:"id",label:"ID"},{field:"code",label:"Code"},{field:"title",label:"Title"},{field:"credits",label:"Credits"}]}},methods:{saveCourse:function(){var e=this,t=!1;""!==this.course.code&&""!==this.course.title&&""!==this.course.credits?(this.repos.courseList[this.selectedYear].data.length&&this.repos.courseList[this.selectedYear].data.every((function(s){if(s.code===e.course.code)return t=!0,!1})),t||(this.course.id=this.repos.courseList[this.selectedYear].data.length+1,this.repos.courseList[this.selectedYear].data.push(this.course)),this.course={code:"",title:"",credits:0},this.$refs.codeTextbox.focus(),this.$emit("store-progs")):this.$refs.codeTextbox.focus()},deleteRows:function(){var e=this.repos.courseList[this.selectedYear].data;this.checkedRows.forEach((function(t){e.splice(e.indexOf(t),1)})),this.checkedRows=[],this.$emit("store-progs")}}}),f=p,h=s("2877"),b=Object(h["a"])(f,l,u,!1,null,null,null),m=b.exports,g=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"modal-card"},[s("header",{staticClass:"modal-card-head"},[s("p",{staticClass:"modal-card-title"},[e._v(" "+e._s("Manage Grade Listings for the year "+e.selectedYear)+" ")])]),s("section",{staticClass:"modal-card-body"},[s("b-field",{attrs:{grouped:"","group-multiline":""}},[e.checkedRows.length?s("b-button",{staticClass:"field",attrs:{label:"Delete checked",type:"is-danger","icon-left":"close"},on:{click:e.deleteRows}}):e._e()],1),s("b-tabs",[s("b-tab-item",{attrs:{label:"Table"}},[void 0!=e.gradeList[e.selectedYear]?s("b-table",{attrs:{data:e.gradeList[e.selectedYear].data,columns:e.gradeColumns,focusable:"",checkable:"",striped:"","checked-rows":e.checkedRows},on:{"update:checkedRows":function(t){e.checkedRows=t},"update:checked-rows":function(t){e.checkedRows=t}},scopedSlots:e._u([{key:"empty",fn:function(){return[s("div",{staticClass:"has-text-centered"},[e._v("No records")])]},proxy:!0}],null,!1,2220461136)}):e._e()],1),s("b-tab-item",{attrs:{label:"Entry"}},[s("b-field",{attrs:{label:"Grade Letter"}},[s("b-input",{ref:"gradeTextbox",attrs:{title:e.grade.letter},model:{value:e.grade.letter,callback:function(t){e.$set(e.grade,"letter",t)},expression:"grade.letter"}})],1),s("b-field",{attrs:{label:"Points"}},[s("b-select",{attrs:{placeholder:"Select points..."},model:{value:e.grade.points,callback:function(t){e.$set(e.grade,"points",t)},expression:"grade.points"}},e._l(e.gradePoints,(function(t,a){return s("option",{key:a,domProps:{value:t}},[e._v(" "+e._s(t)+" ")])})),0),s("b-button",{attrs:{"icon-left":"check",type:"is-primary"},on:{click:e.saveGrade}},[e._v("Add")])],1)],1)],1)],1),s("footer",{staticClass:"modal-card-foot"},[s("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(t){return e.$parent.close()}}},[e._v(" Close ")])])])},v=[],y=(s("a630"),s("3ca3"),{props:{gradeList:{type:Object,required:!0},selectedYear:{type:Number,required:!0}},computed:{courseInfo:function(){return this.course&&"code"in this.course?"".concat(this.course.code.trim()," : ").concat(this.course.title.trim()):""}},data:function(){return{grade:{letter:"",points:0},gradeColumns:[{field:"id",label:"ID"},{field:"letter",label:"Grade Letter"},{field:"points",label:"Points"}],gradePoints:[],checkedRows:[]}},methods:{populate:function(){var e=this;Array.from("01234").forEach((function(t){e.gradePoints.push(parseFloat(t)),e.gradePoints.push(parseFloat(t)+.25),e.gradePoints.push(parseFloat(t)+.5),e.gradePoints.push(parseFloat(t)+.75)}))},saveGrade:function(){var e=this,t=!1;""!==this.grade.letter&&""!==this.grade.points?(this.gradeList[this.selectedYear]&&this.gradeList[this.selectedYear].data.length&&this.gradeList[this.selectedYear].data.every((function(s){if(s.letter===e.grade.letter)return t=!0,!1})),t||(this.grade.id=this.gradeList[this.selectedYear].data.length+1,this.gradeList[this.selectedYear].data.push(this.grade)),this.grade={letter:"",points:0},this.$refs.gradeTextbox.focus(),this.$emit("store-gradeslist")):this.$refs.gradeTextbox.focus()},deleteRows:function(){var e=this.gradeList[this.selectedYear].data;this.checkedRows.forEach((function(t){e.splice(e.indexOf(t),1)})),this.checkedRows=[],this.$emit("store-gradeslist")}},created:function(){this.populate()}}),C=y,k=Object(h["a"])(C,g,v,!1,null,null,null),w=k.exports,A=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"section",staticStyle:{"padding-top":"0"}},[e.displayTop?[e.selectedProg&&e.selectedYear?s("b-button",{attrs:{type:"is-outlined is-dark","icon-left":"animation"},on:{click:e.showCandidateListDialog}},[e._v("Load Candidate")]):e._e(),s("hr")]:e._e(),s("p",{directives:[{name:"show",rawName:"v-show",value:!e.displayTop,expression:"!displayTop"}],staticClass:"content cand-info"},[s("span",[e._v(e._s(e.dispayName))])]),s("div",{staticClass:"block"},[e.displayTop?e._e():s("b-button",{staticStyle:{"margin-top":"10px"},attrs:{"icon-left":"arrow-down",type:"is-primary is-rounded"},on:{click:function(t){e.$emit("show-top",!0),e.saveWork()}}},[e._v(e._s(e.tableUpdated?"Save Work &":"")+" Hide Space")])],1),e.courseList.length&&!e.displayTop?[s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("b-field",{attrs:{grouped:"","group-multiline":""}},[s("b-select",{attrs:{placeholder:"Select course...",multiple:"","native-size":"12"},model:{value:e.selectedCourses,callback:function(t){e.selectedCourses=t},expression:"selectedCourses"}},e._l(e.courseList,(function(t){return s("option",{key:t.code,domProps:{value:t}},[e._v(" "+e._s(t.code+" : "+t.title)+" ")])})),0)],1),s("b-field",{attrs:{grouped:"","group-multiline":""}},[s("b-field",[s("b-button",{attrs:{type:"is-primary","icon-left":"check-outline"},on:{click:e.addToTable}},[e._v("Add to Table")])],1),s("b-select",{attrs:{placeholder:"Dataset..."},model:{value:e.dataset,callback:function(t){e.dataset=t},expression:"dataset"}},e._l(e.datasets,(function(t){return s("option",{key:t,domProps:{value:t}},[e._v(" "+e._s(t)+" ")])})),0),e.bypassGradeYear||e.dataset?s("b-select",{attrs:{placeholder:"Pass grade..."},model:{value:e.passGrade,callback:function(t){e.passGrade=t},expression:"passGrade"}},e._l(e.gradeList[e.bypassGradeYear?e.bypassGradeYear:e.dataset.split("_")[0]].data,(function(t){return s("option",{key:t.id,domProps:{value:t.letter}},[e._v(" "+e._s(t.letter)+" ")])})),0):e._e()],1),s("b-field",{attrs:{label:"Grade List Bypass"}},[s("div",{staticClass:"block"},e._l(e.gradeYears,(function(t){return s("b-radio",{key:t,attrs:{name:"gradeYear","native-value":t},model:{value:e.bypassGradeYear,callback:function(t){e.bypassGradeYear=t},expression:"bypassGradeYear"}},[e._v(" "+e._s(t)+" ")])})),1)])],1),s("div",{staticClass:"table-container"},[s("b-field",[s("b-table",{ref:"table",attrs:{data:e.data,detailed:"",striped:"",hoverable:"","custom-detail-row":"","detail-key":"description"},on:{"details-open":function(t,s){return e.$buefy.toast.open("Expanded "+t.description)}},scopedSlots:e._u([{key:"detail",fn:function(t){return e._l(t.row.items,(function(t){return s("tr",{key:t.code,class:e.markGoodRetake(t)?"has-text-primary":"",style:t.grade>e.passGrade?"color: #f14668":""},[s("td"),s("td",[e._v(" "+e._s(t.description))]),s("td",{staticClass:"has-text-centered"},[e._v(" "+e._s(t.grade)+" ")]),s("td",{staticClass:"has-text-centered"},[e._v(" "+e._s(t.credits)+" ")]),s("td",{staticClass:"has-text-centered"},[e._v(" "+e._s(t.points)+" ")]),s("td",{staticClass:"has-text-centered"},[e._v(" "+e._s(e.fmtNum(t.gradePoints))+" ")]),s("td",[s("b-field",{attrs:{grouped:""}},[s("b-button",{staticStyle:{display:"table"},attrs:{"icon-left":"arrow-up",type:"is-primary is-rounded",size:"is-small"},on:{click:function(s){return e.changeGrade(t)}}}),s("b-button",{staticStyle:{"margin-left":"5px",display:"table"},attrs:{"icon-left":"arrow-down",type:"is-danger is-rounded",size:"is-small"},on:{click:function(s){return e.changeGrade(t,!1)}}})],1)],1)])}))}},{key:"empty",fn:function(){return[s("div",{staticClass:"has-text-centered"},[e._v("No records")])]},proxy:!0}],null,!1,588720214)},[s("b-table-column",{attrs:{field:"description",label:"Description",width:"600"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("b",[e._v(e._s(t.row.description))])]}}],null,!1,487150926)}),s("b-table-column",{attrs:{centered:"",field:"grade",label:"Grade"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("b",[e._v(e._s(t.row.grade))])]}}],null,!1,2806139933)}),s("b-table-column",{attrs:{centered:"",field:"credits",label:"Credits"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("b",[e._v(e._s(t.row.credits))])]}}],null,!1,1955150486)}),s("b-table-column",{attrs:{centered:"",field:"points",label:"Points"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("b",[e._v(e._s(t.row.points))])]}}],null,!1,300279799)}),s("b-table-column",{attrs:{centered:"",field:"gradePoints",label:"Grade Points"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("b",[e._v(e._s(e.fmtNum(t.row.gradePoints)))])]}}],null,!1,1401355434)}),s("b-table-column",{attrs:{centered:""},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[s("b",[e._v(e._s("GPA: "+(a.gradePoints>0?e.fmtNum(a.gradePoints/a.credits):0))+" ")])]}}],null,!1,2130885261)})],1)],1)],1),s("div",{staticClass:"content is-summary has-text-danger-light"},[s("p",{staticClass:"\n            heading\n            is-italic\n            has-text-grey-dark has-background-primary-light has-text-centered\n          "},[e._v(" SUMMARY ")]),s("p",{staticClass:"detail"},[e._v(" CTGP : "),s("b",[e._v(e._s(e.totals.totalgradepoints))]),s("br"),e._v(" CTUR : "),s("b",[e._v(e._s(e.totals.totalcredits))]),s("br"),e._v(" CGPA : "),s("b",[e._v(e._s(e.fmtNum(e.totals.CGPA)))])]),e.collatedCarryovers.length?[s("p",{staticClass:"heading is-italic has-background-danger has-text-centered"},[e._v(" CARRY OVERS ")]),s("p",{staticClass:"detail"},[e._v(e._s(e.collatedCarryovers))])]:e._e()],2)])]:e._e()],2)},_=[],x=(s("1276"),s("ac1f"),s("d81d"),s("b64b"),s("a15b"),s("7db0"),s("a4d3"),s("e01a"),s("b680"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[e._m(0),s("section",{staticClass:"modal-card-body"},[s("b-field",{attrs:{grouped:"","group-multiline":""}},[e.checkedRows.length?s("b-button",{staticClass:"field",attrs:{label:"Delete checked",type:"is-danger","icon-left":"close"},on:{click:e.deleteRows}}):e._e()],1),s("b-tabs",[s("b-tab-item",{attrs:{label:"Table"}},[s("b-table",{attrs:{data:e.candidateList,focusable:"",striped:""},scopedSlots:e._u([{key:"empty",fn:function(){return[s("div",{staticClass:"has-text-centered"},[e._v("No records")])]},proxy:!0}])},[s("b-table-column",{attrs:{field:"id",label:"ID"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.id))]}}])}),s("b-table-column",{attrs:{field:"name",label:"Candidate's name"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.name.split("$")[0]))]}}])}),s("b-table-column",{attrs:{field:"datasets",label:"Active datasets"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.datasets))]}}])}),s("b-table-column",{scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[s("b-field",[s("b-button",{staticStyle:{"margin-right":"5px"},attrs:{type:"is-danger is-rounded","icon-left":"trash-can"},on:{click:function(t){return e.deleteRow(a)}}}),s("b-button",{attrs:{type:"is-primary is-rounded","icon-left":"animation"},on:{click:function(t){return e.initSpace(a.name)}}},[e._v("Load")])],1)]}}])})],1)],1),s("b-tab-item",{attrs:{label:"Entry"}},[s("b-field",{attrs:{label:"Candidate's name"}},[s("b-input",{ref:"candNameTextbox",attrs:{title:e.candidate},model:{value:e.candidate,callback:function(t){e.candidate=t},expression:"candidate"}})],1),s("b-button",{attrs:{"icon-left":"check",type:"is-primary"},on:{click:function(t){return e.initSpace(e.candidate+"$"+e.selectedProg)}}},[e._v("Add")])],1)],1)],1),s("footer",{staticClass:"modal-card-foot"},[s("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(t){return e.$parent.close()}}},[e._v(" Close ")])])])}),P=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("header",{staticClass:"modal-card-head"},[s("p",{staticClass:"modal-card-title"},[e._v("Processed Candidate Listings in Repository")])])}];s("b0c0"),s("d3b7");function L(e){return fetch("".concat("http://ec2-3-140-49-1.us-east-2.compute.amazonaws.com:3000/api","/candidates/").concat(e)).then((function(e){return e.json()}))}function E(e){return fetch("".concat("http://ec2-3-140-49-1.us-east-2.compute.amazonaws.com:3000/api","/results/").concat(e),{method:"DELETE"}).then((function(e){return e.json()}))}function Y(e){return fetch("".concat("http://ec2-3-140-49-1.us-east-2.compute.amazonaws.com:3000/api","/results/").concat(e)).then((function(e){return e.json()}))}function N(e,t){return fetch("".concat("http://ec2-3-140-49-1.us-east-2.compute.amazonaws.com:3000/api","/results/").concat(e),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})}function T(e){return fetch("".concat("http://ec2-3-140-49-1.us-east-2.compute.amazonaws.com:3000/api","/progs/").concat(e)).then((function(e){return e.json()}))}function R(e,t){return fetch("".concat("http://ec2-3-140-49-1.us-east-2.compute.amazonaws.com:3000/api","/progs/").concat(e),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})}function O(e){return fetch("".concat("http://ec2-3-140-49-1.us-east-2.compute.amazonaws.com:3000/api","/grades"),{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})}function j(){return fetch("".concat("http://ec2-3-140-49-1.us-east-2.compute.amazonaws.com:3000/api","/grades")).then((function(e){return e.json()}))}var S={props:{selectedProg:{type:String,required:!0}},data:function(){return{checkedRows:[],candidate:"",candidateList:[]}},mounted:function(){var e=this;L(this.selectedProg).then((function(t){e.candidateList=t}))},methods:{initSpace:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:t.$emit("init-space",e),t.$parent.close();case 2:case"end":return s.stop()}}),s)})))()},deleteRow:function(e){var t=this;this.$buefy.dialog.confirm({title:"Deleting candidate",message:"Are you sure you want to <b>delete</b> this candidate? This action cannot be undone.",confirmText:"Delete Candidate",type:"is-danger",hasIcon:!0,onConfirm:function(){var s=Object(d["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,E(e.name).then((function(e){return t.candidateList=e}));case 2:t.$buefy.toast.open("Candidate deleted!");case 3:case"end":return s.stop()}}),s)})));function a(){return s.apply(this,arguments)}return a}()})}}},Q=S,D=Object(h["a"])(Q,x,P,!1,null,null,null),G=D.exports,F={computed:{dispayName:function(){return this.candidate.split("$")[0]},datasets:function(){var e=[];return this.sessions.map((function(t){e.push(t.id+"_1"),e.push(t.id+"_2")})),e},totals:function(){var e=0,t=0;return this.data.forEach((function(s){e+=s.credits,t+=s.gradePoints})),{CGPA:t>0?t/e:0,totalcredits:e,totalgradepoints:t}},gradeYears:function(){return Object.keys(this.gradeList)},collatedCarryovers:function(){var e=this,t=[];return this.data.forEach((function(s){s.items.forEach((function(s){var a=s.code.split("_")[0],r=t.indexOf(a);e.passGrade<s.grade?-1===r&&t.push(a):-1!==r&&(e.passedCarryovers.push({courseCode:a,dataset:s.code.split("_").splice(1,2).join("_")}),t.splice(r,1))}))})),t.join(", ")}},props:{gradeList:{type:Object,required:!0},selectedProg:{type:String,required:!0},selectedYear:{type:Number,required:!0},sessions:{type:Array,required:!0},displayTop:{type:Boolean,default:!0}},data:function(){return{data:[],courseList:[],course:{code:"",title:"",credits:-1},dataset:null,selectedCourses:[],bypassGradeYear:"",candidate:"",passGrade:null,passedCarryovers:[],tableUpdated:!1}},methods:{initDb:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=null,t.next=3,T(e.selectedProg.toLowerCase()).then((function(e){return s=e}));case 3:a=s?s.courseList:null,a&&(e.courseList=a[e.selectedYear].data),e.$emit("show-top",!1);case 6:case"end":return t.stop()}}),t)})))()},addToTable:function(){var e=this;if(this.dataset){var t=this.data.find((function(t){var s=t.description;return s===e.dataset}));void 0===t?(t={},t.items=[],t.description=this.dataset,t.credits=0,t.grade="*",t.points=0,t.gradePoints=0):this.data.splice(this.data.indexOf(t),1),this.selectedCourses.forEach((function(s){t.items.find((function(e){return e.code.split("_")[0]===s.code}))||t.items.push({code:s.code+"_"+e.dataset,description:s.code+" : "+s.title,credits:s.credits,grade:"F",points:0,gradePoints:0})})),this.data.push(t),this.tableUpdated=!0}},changeGrade:function(e){var t=arguments,s=this;return Object(d["a"])(regeneratorRuntime.mark((function a(){var r,n,o,i,c,d;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:r=!(t.length>1&&void 0!==t[1])||t[1],n=s.gradeList[s.bypassGradeYear?s.bypassGradeYear:s.dataset.split("_")[0]],n?(o=n.data.find((function(t){return t.letter===e.grade})),i=n.data.indexOf(o),c=r?i>0?n.data[--i]:o:i!=n.data.length-1?n.data[++i]:o,e.grade=c.letter,e.points=c.points,e.gradePoints=c.points*e.credits,d=s.data.find((function(t){return t.description==e.code.split("_").splice(-2,2).join("_")})),d.credits=d.points=d.gradePoints=0,d.items.forEach((function(e){d.credits+=e.credits,d.points+=e.points,d.gradePoints+=e.gradePoints})),s.tableUpdated=!0):s.$buefy.toast.open({duration:5e3,message:"You've not created a grades list for the year ".concat(s.dataset.split("_")[0],", or bypass."),position:"is-bottom",type:"is-danger"});case 3:case"end":return a.stop()}}),a)})))()},fmtNum:function(e){return Number(Math.round(parseFloat(e)+"e2")+"e-2").toFixed(2)},showCandidateListDialog:function(){var e=this;this.$buefy.modal.open({parent:this,component:G,props:{selectedProg:this.selectedProg},hasModalCard:!0,events:{"init-space":function(t){e.initSpace(t)}}})},initSpace:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return t.initDb(),t.candidate=e,a=null,s.next=5,Y(e).then((function(e){return a=e}));case 5:a&&e&&(t.data=a||[]),t.$buefy.toast.open({duration:5e3,type:"is-success",message:"Candidate space loaded for ".concat(t.dispayName,".")});case 7:case"end":return s.stop()}}),s)})))()},markGoodRetake:function(e){var t=!1;return this.passedCarryovers.forEach((function(s){t||(t=s.courseCode==e.code.split("_")[0]&&s.dataset==e.code.split("_").splice(1,2).join("_"))})),t},saveWork:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.tableUpdated){t.next=3;break}return t.next=3,N(e.candidate,e.data);case 3:case"end":return t.stop()}}),t)})))()}}},q=F,V=(s("8ad2"),Object(h["a"])(q,A,_,!1,null,null,null)),H=V.exports,M={components:{CandidateSpace:H},data:function(){return{repos:{courseList:{}},gradeList:{},sessions:[],programmes:[{code:"ABENFT",title:"Agric/Bio-Environmental Engineering ND Fulltime"},{code:"ABEHFT",title:"Agric/Bio-Environmental Engineering HND Fulltime"},{code:"ACCNFT",title:"Accounting ND Fulltime"},{code:"ACCNPT",title:"Accounting ND Parttime"},{code:"ACCHFT",title:"Accounting HND Fulltime"},{code:"ACCHPT",title:"Accounting HND Parttime"},{code:"CEGNFT",title:"Computer Engineering ND Fulltime"},{code:"CEGHFT",title:"Computer Engineering HND Fulltime"},{code:"EEENFT",title:"Electrical/Electronics Engineering ND Fulltime"},{code:"EEEHFT",title:"Electrical/Electronics Engineering HND Fulltime"},{code:"QUSNFT",title:"Quantity Surveying ND Fulltime"},{code:"QUSNPT",title:"Quantity Surveying ND Parttime"},{code:"QUSHFT",title:"Quantity Surveying HND Fulltime"},{code:"QUSHPT",title:"Quantity Surveying HND Parttime"}],selectedYear:0,selectedProg:"",displayTop:!0}},methods:{populate:function(){for(var e=2002,t=(new Date).getFullYear(),s=e;s<t+1;s++)this.sessions.push({id:s})},addCourseDialog:function(){var e=this;this.$buefy.modal.open({parent:this,component:m,props:{repos:this.repos,selectedYear:this.selectedYear},hasModalCard:!0,events:{"store-progs":function(){return e.storeProgs()}}})},addGradeDialog:function(){var e=this;this.$buefy.modal.open({parent:this,component:w,props:{gradeList:this.gradeList,selectedYear:this.selectedYear},hasModalCard:!0,events:{"store-gradeslist":function(){return e.storeGradesList()}}})},initDb:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.selectedYear||!e.selectedProg){t.next=6;break}return t.next=3,j().then((function(t){return e.gradeList=t}));case 3:return t.next=5,T(e.selectedProg.toLowerCase()).then((function(t){return e.repos=t}));case 5:"courseList"in e.repos&&e.repos["courseList"]["courseList"]||(e.repos["courseList"]=Object(c["a"])({},e.selectedYear,{data:[]}),e.selectedYear in e.gradeList||(e.gradeList[e.selectedYear]={data:[]}));case 6:case"end":return t.stop()}}),t)})))()},storeProgs:function(){R(this.selectedProg.toLowerCase(),this.repos)},storeGradesList:function(){this.gradeList&&O(this.gradeList)},showTop:function(e){this.displayTop=e}},created:function(){this.populate()}},z=M,Z=(s("5f74"),Object(h["a"])(z,o,i,!1,null,null,null)),B=Z.exports,W={name:"App",components:{ResultCompiler:B}},X=W,J=(s("034f"),Object(h["a"])(X,r,n,!1,null,null,null)),U=J.exports,K=s("289d");s("5abe");a["a"].config.productionTip=!1,a["a"].use(K["a"]),new a["a"]({render:function(e){return e(U)}}).$mount("#app")},"5f74":function(e,t,s){"use strict";s("26ca")},"85ec":function(e,t,s){},"8ad2":function(e,t,s){"use strict";s("2f0f")},a3bf:function(e,t){e.exports="data:image/png;base64,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"}});
//# sourceMappingURL=app.864f5782.js.map