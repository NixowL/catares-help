(function(e){function t(t){for(var a,n,i=t[0],c=t[1],d=t[2],u=0,p=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&p.push(r[n][0]),r[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,d||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],a=!0,i=1;i<s.length;i++){var c=s[i];0!==r[c]&&(a=!1)}a&&(o.splice(t--,1),e=n(n.s=s[0]))}return e}var a={},r={app:0},o=[];function n(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=a,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(s,a,function(t){return e[t]}.bind(null,a));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var l=c;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"2f0f":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("ResultCompiler")],1)},o=[],n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._m(0),s("section",{directives:[{name:"show",rawName:"v-show",value:e.displayTop,expression:"displayTop"}],staticClass:"section"},[s("b-field",{attrs:{label:"Dataset for this compilation",grouped:""}},[s("b-select",{attrs:{placeholder:"Select a programme"},on:{input:function(t){e.selectedYear&&e.initDb}},model:{value:e.selectedProg,callback:function(t){e.selectedProg=t},expression:"selectedProg"}},e._l(e.programmes,(function(t){return s("option",{key:t.code,domProps:{value:t.code}},[e._v(" "+e._s(t.title)+" ")])})),0),e.selectedProg?s("b-select",{attrs:{placeholder:"Select a session"},on:{input:e.initDb},model:{value:e.selectedYear,callback:function(t){e.selectedYear=t},expression:"selectedYear"}},e._l(e.sessions,(function(t){return s("option",{key:t.id,domProps:{value:t.id}},[e._v(" "+e._s(t.id)+" ")])})),0):e._e()],1),s("div",{staticClass:"buttons"},[s("b-button",{staticClass:"is-primary",attrs:{"icon-left":"plus"},on:{click:e.addCourseDialog}},[e._v("Add Courses")]),s("b-button",{staticClass:"is-danger",attrs:{"icon-left":"plus"},on:{click:e.addGradeDialog}},[e._v("Add Grades")])],1)],1),s("CandidateSpace",{attrs:{selectedProg:e.selectedProg,selectedYear:e.selectedYear,sessions:e.sessions,gradeList:e.gradeList,displayTop:e.displayTop},on:{"show-top":e.showTop}})],1)},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"hero is-primary"},[s("div",{staticClass:"hero-body"},[s("p",{staticClass:"title"},[e._v("Catasys Results Helper :: "),s("i",[e._v("catares-help")])]),s("p",{staticClass:"subtitle"},[e._v(" An ad-hoc results compilation system! Made with 💗 by NixowL. :) ")])])])}],c=s("1da1"),d=(s("96cf"),s("d3b7"),s("99af"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"modal-card"},[s("header",{staticClass:"modal-card-head"},[s("p",{staticClass:"modal-card-title"},[e._v(" "+e._s("Manage Course Listings for the year "+e.selectedYear)+" ")])]),s("section",{staticClass:"modal-card-body"},[s("b-field",{attrs:{grouped:"","group-multiline":""}},[e.checkedRows.length?s("b-button",{staticClass:"field",attrs:{label:"Delete checked",type:"is-danger","icon-left":"close"},on:{click:e.deleteRows}}):e._e()],1),s("b-tabs",[s("b-tab-item",{attrs:{label:"Table"}},[void 0!=e.repos.courseList[e.selectedYear]?s("b-table",{attrs:{data:e.repos.courseList[e.selectedYear].data,columns:e.courseColumns,focusable:"",checkable:"","checked-rows":e.checkedRows,striped:""},on:{"update:checkedRows":function(t){e.checkedRows=t},"update:checked-rows":function(t){e.checkedRows=t}},scopedSlots:e._u([{key:"empty",fn:function(){return[s("div",{staticClass:"has-text-centered"},[e._v("No records")])]},proxy:!0}],null,!1,2220461136)}):e._e()],1),s("b-tab-item",{attrs:{label:"Entry"}},[s("b-field",{attrs:{label:"Code"}},[s("b-input",{ref:"codeTextbox",attrs:{title:e.course.code},model:{value:e.course.code,callback:function(t){e.$set(e.course,"code",t)},expression:"course.code"}})],1),s("b-field",{attrs:{label:"Title"}},[s("b-input",{attrs:{title:e.course.title},model:{value:e.course.title,callback:function(t){e.$set(e.course,"title",t)},expression:"course.title"}})],1),s("b-field",{attrs:{label:"Credits"}},[s("b-select",{attrs:{placeholder:"Select credits..."},model:{value:e.course.credits,callback:function(t){e.$set(e.course,"credits",t)},expression:"course.credits"}},e._l(Array.from(Array(10).keys()),(function(t,a){return s("option",{key:a,domProps:{value:t}},[e._v(" "+e._s(t)+" ")])})),0),s("b-button",{attrs:{type:"is-primary","icon-left":"check"},on:{click:e.saveCourse}},[e._v("Add")])],1)],1)],1)],1),s("footer",{staticClass:"modal-card-foot"},[s("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(t){return e.$parent.close()}}},[e._v(" Close ")])])])}),l=[],u=(s("a9e3"),s("498a"),s("159b"),s("a434"),{props:{repos:{type:Object,required:!0},selectedYear:{type:Number,required:!0}},computed:{courseInfo:function(){return this.course&&"code"in this.course?"".concat(this.course.code.trim()," : ").concat(this.course.title.trim()):""}},data:function(){return{checkedRows:[],course:{code:"",title:"",credits:-1},gradeColumns:[{field:"id",label:"ID"},{field:"gradeLetter",label:"Grade Letter"}],courseColumns:[{field:"id",label:"ID"},{field:"code",label:"Code"},{field:"title",label:"Title"},{field:"credits",label:"Credits"}]}},methods:{saveCourse:function(){var e=this,t=!1;""!==this.course.code&&""!==this.course.title&&""!==this.course.credits?(this.repos.courseList[this.selectedYear]&&this.repos.courseList[this.selectedYear].data.length&&this.repos.courseList[this.selectedYear].data.every((function(s){if(s.code===e.course.code)return t=!0,!1})),t||(this.course.id=this.repos.courseList[this.selectedYear].data.length+1,this.repos.courseList[this.selectedYear].data.push(this.course)),this.course={code:"",title:"",credits:0},this.$refs.codeTextbox.focus(),this.$emit("store-db")):this.$refs.codeTextbox.focus()},deleteRows:function(){var e=this.repos.courseList[this.selectedYear].data;this.checkedRows.forEach((function(t){e.splice(e.indexOf(t),1)}))}}}),p=u,f=s("2877"),h=Object(f["a"])(p,d,l,!1,null,null,null),b=h.exports,m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"modal-card"},[s("header",{staticClass:"modal-card-head"},[s("p",{staticClass:"modal-card-title"},[e._v(" "+e._s("Manage Grade Listings for the year "+e.selectedYear)+" ")])]),s("section",{staticClass:"modal-card-body"},[s("b-field",{attrs:{grouped:"","group-multiline":""}},[e.checkedRows.length?s("b-button",{staticClass:"field",attrs:{label:"Delete checked",type:"is-danger","icon-left":"close"},on:{click:e.deleteRows}}):e._e()],1),s("b-tabs",[s("b-tab-item",{attrs:{label:"Table"}},[void 0!=e.gradeList[e.selectedYear]?s("b-table",{attrs:{data:e.gradeList[e.selectedYear].data,columns:e.gradeColumns,focusable:"",checkable:"",striped:"","checked-rows":e.checkedRows},on:{"update:checkedRows":function(t){e.checkedRows=t},"update:checked-rows":function(t){e.checkedRows=t}},scopedSlots:e._u([{key:"empty",fn:function(){return[s("div",{staticClass:"has-text-centered"},[e._v("No records")])]},proxy:!0}],null,!1,2220461136)}):e._e()],1),s("b-tab-item",{attrs:{label:"Entry"}},[s("b-field",{attrs:{label:"Grade Letter"}},[s("b-input",{ref:"gradeTextbox",attrs:{title:e.grade.letter},model:{value:e.grade.letter,callback:function(t){e.$set(e.grade,"letter",t)},expression:"grade.letter"}})],1),s("b-field",{attrs:{label:"Points"}},[s("b-select",{attrs:{placeholder:"Select points..."},model:{value:e.grade.points,callback:function(t){e.$set(e.grade,"points",t)},expression:"grade.points"}},e._l(e.gradePoints,(function(t,a){return s("option",{key:a,domProps:{value:t}},[e._v(" "+e._s(t)+" ")])})),0),s("b-button",{attrs:{"icon-left":"check",type:"is-primary"},on:{click:e.saveGrade}},[e._v("Add")])],1)],1)],1)],1),s("footer",{staticClass:"modal-card-foot"},[s("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(t){return e.$parent.close()}}},[e._v(" Close ")])])])},v=[],g=(s("a630"),s("3ca3"),{props:{gradeList:{type:Object,required:!0},selectedYear:{type:Number,required:!0}},computed:{courseInfo:function(){return this.course&&"code"in this.course?"".concat(this.course.code.trim()," : ").concat(this.course.title.trim()):""}},data:function(){return{grade:{letter:"",points:0},gradeColumns:[{field:"id",label:"ID"},{field:"letter",label:"Grade Letter"},{field:"points",label:"Points"}],gradePoints:[],checkedRows:[]}},methods:{populate:function(){var e=this;Array.from("01234").forEach((function(t){e.gradePoints.push(parseFloat(t)),e.gradePoints.push(parseFloat(t)+.25),e.gradePoints.push(parseFloat(t)+.5),e.gradePoints.push(parseFloat(t)+.75)}))},saveGrade:function(){var e=this,t=!1;""!==this.grade.letter&&""!==this.grade.points?(this.gradeList[this.selectedYear]&&this.gradeList[this.selectedYear].data.length&&this.gradeList[this.selectedYear].data.every((function(s){if(s.letter===e.grade.letter)return t=!0,!1})),t||(this.grade.id=this.gradeList[this.selectedYear].data.length+1,this.gradeList[this.selectedYear].data.push(this.grade)),this.grade={letter:"",points:0},this.$refs.gradeTextbox.focus(),this.$emit("store-db")):this.$refs.gradeTextbox.focus()},deleteRows:function(){var e=this.gradeList[this.selectedYear].data;this.checkedRows.forEach((function(t){e.splice(e.indexOf(t),1)}))}},created:function(){this.populate()}}),y=g,_=Object(f["a"])(y,m,v,!1,null,null,null),C=_.exports,k=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"section",staticStyle:{"padding-top":"0"}},[e.displayTop?[e.selectedProg&&e.selectedYear?s("b-button",{attrs:{type:"is-outlined is-dark","icon-left":"animation"},on:{click:e.showCandidateListDialog}},[e._v("Load Candidate")]):e._e(),s("hr")]:e._e(),s("p",{directives:[{name:"show",rawName:"v-show",value:!e.displayTop,expression:"!displayTop"}],staticClass:"content cand-info"},[s("span",[e._v(e._s(e.candidate))])]),s("div",{staticClass:"block"},[e.displayTop?e._e():s("b-button",{staticStyle:{"margin-top":"10px"},attrs:{"icon-left":"arrow-down",type:"is-primary is-rounded"},on:{click:function(t){return e.$emit("show-top",!0)}}},[e._v("Show Top")])],1),e.courseList.length&&!e.displayTop?[s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("b-field",{attrs:{grouped:"","group-multiline":""}},[s("b-select",{attrs:{placeholder:"Select course...",multiple:"","native-size":"12"},model:{value:e.selectedCourses,callback:function(t){e.selectedCourses=t},expression:"selectedCourses"}},e._l(e.courseList,(function(t){return s("option",{key:t.code,domProps:{value:t}},[e._v(" "+e._s(t.code+" : "+t.title)+" ")])})),0),s("b-field",[s("b-button",{attrs:{type:"is-primary","icon-left":"check-outline"},on:{click:e.addToTable}},[e._v("Add to Table")])],1),s("b-select",{attrs:{placeholder:"Dataset..."},model:{value:e.dataset,callback:function(t){e.dataset=t},expression:"dataset"}},e._l(e.datasets,(function(t){return s("option",{key:t,domProps:{value:t}},[e._v(" "+e._s(t)+" ")])})),0),e.bypassGradeYear||e.dataset?s("b-select",{attrs:{placeholder:"Pass grade..."},model:{value:e.passGrade,callback:function(t){e.passGrade=t},expression:"passGrade"}},e._l(e.gradeList[e.bypassGradeYear?e.bypassGradeYear:e.dataset.split("_")[0]].data,(function(t){return s("option",{key:t.id,domProps:{value:t.letter}},[e._v(" "+e._s(t.letter)+" ")])})),0):e._e()],1),s("b-field",{attrs:{label:"Grade List Bypass"}},[s("div",{staticClass:"block"},e._l(e.gradeYears,(function(t){return s("b-radio",{key:t,attrs:{name:"gradeYear","native-value":t},model:{value:e.bypassGradeYear,callback:function(t){e.bypassGradeYear=t},expression:"bypassGradeYear"}},[e._v(" "+e._s(t)+" ")])})),1)])],1),s("div",{staticStyle:{"border-left":"1px solid #ccc"}},[s("b-field",[s("b-table",{ref:"table",attrs:{data:e.data,detailed:"",striped:"",hoverable:"","custom-detail-row":"","detail-key":"description"},on:{"details-open":function(t,s){return e.$buefy.toast.open("Expanded "+t.description)}},scopedSlots:e._u([{key:"detail",fn:function(t){return e._l(t.row.items,(function(t){return s("tr",{key:t.code,class:e.markGoodRetake(t)?"has-text-primary":"",style:t.grade>e.passGrade?"color: #f14668":""},[s("td"),s("td",[e._v(" "+e._s(t.description))]),s("td",{staticClass:"has-text-centered"},[e._v(" "+e._s(t.grade)+" ")]),s("td",{staticClass:"has-text-centered"},[e._v(" "+e._s(t.credits)+" ")]),s("td",{staticClass:"has-text-centered"},[e._v(" "+e._s(t.points)+" ")]),s("td",{staticClass:"has-text-centered"},[e._v(" "+e._s(e.fmtNum(t.gradePoints))+" ")]),s("td",[s("b-field",{attrs:{grouped:""}},[s("b-button",{staticStyle:{display:"table"},attrs:{"icon-left":"arrow-up",type:"is-primary is-rounded",size:"is-small"},on:{click:function(s){return e.changeGrade(t)}}}),s("b-button",{staticStyle:{"margin-left":"5px",display:"table"},attrs:{"icon-left":"arrow-down",type:"is-danger is-rounded",size:"is-small"},on:{click:function(s){return e.changeGrade(t,!1)}}})],1)],1)])}))}},{key:"empty",fn:function(){return[s("div",{staticClass:"has-text-centered"},[e._v("No records")])]},proxy:!0}],null,!1,588720214)},[s("b-table-column",{attrs:{field:"description",label:"Description",width:"600"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("b",[e._v(e._s(t.row.description))])]}}],null,!1,487150926)}),s("b-table-column",{attrs:{centered:"",field:"grade",label:"Grade"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("b",[e._v(e._s(t.row.grade))])]}}],null,!1,2806139933)}),s("b-table-column",{attrs:{centered:"",field:"credits",label:"Credits"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("b",[e._v(e._s(t.row.credits))])]}}],null,!1,1955150486)}),s("b-table-column",{attrs:{centered:"",field:"points",label:"Points"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("b",[e._v(e._s(t.row.points))])]}}],null,!1,300279799)}),s("b-table-column",{attrs:{centered:"",field:"gradePoints",label:"Grade Points"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("b",[e._v(e._s(e.fmtNum(t.row.gradePoints)))])]}}],null,!1,1401355434)}),s("b-table-column",{attrs:{centered:""},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[s("b",[e._v(e._s("GPA: "+(a.gradePoints>0?e.fmtNum(a.gradePoints/a.credits):0))+" ")])]}}],null,!1,2130885261)})],1)],1)],1),s("div",{staticClass:"content is-summary"},[s("p",{staticClass:"heading"},[e._v("SUMMARY")]),s("p",{staticClass:"detail"},[e._v(" CTGP : "),s("b",[e._v(e._s(e.totals.totalgradepoints))]),s("br"),e._v(" CTUR : "),s("b",[e._v(e._s(e.totals.totalcredits))]),s("br"),e._v(" CGPA : "),s("b",[e._v(e._s(e.fmtNum(e.totals.CGPA)))])]),e.collatedCarryovers.length?[s("p",{staticClass:"heading",staticStyle:{color:"#f14668"}},[e._v("CARRY OVERS")]),s("p",{staticClass:"detail"},[e._v(e._s(e.collatedCarryovers))])]:e._e()],2)])]:e._e()],2)},w=[],x=(s("d81d"),s("b64b"),s("1276"),s("ac1f"),s("a15b"),s("7db0"),s("a4d3"),s("e01a"),s("b680"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[e._m(0),s("section",{staticClass:"modal-card-body"},[s("b-field",{attrs:{grouped:"","group-multiline":""}},[e.checkedRows.length?s("b-button",{staticClass:"field",attrs:{label:"Delete checked",type:"is-danger","icon-left":"close"},on:{click:e.deleteRows}}):e._e()],1),s("b-tabs",[s("b-tab-item",{attrs:{label:"Table"}},[s("b-table",{attrs:{data:e.candidateList,focusable:"",striped:""},scopedSlots:e._u([{key:"empty",fn:function(){return[s("div",{staticClass:"has-text-centered"},[e._v("No records")])]},proxy:!0}])},[s("b-table-column",{attrs:{field:"id",label:"ID"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.id))]}}])}),s("b-table-column",{attrs:{field:"name",label:"Candidate's name"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.name))]}}])}),s("b-table-column",{attrs:{field:"datasets",label:"Active datasets"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.datasets))]}}])}),s("b-table-column",{scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[s("b-field",[s("b-button",{staticStyle:{"margin-right":"5px"},attrs:{type:"is-danger is-rounded","icon-left":"trash-can"},on:{click:function(t){return e.deleteRow(a)}}}),s("b-button",{attrs:{type:"is-primary is-rounded","icon-left":"animation"},on:{click:function(t){return e.initSpace(a.name)}}},[e._v("Load")])],1)]}}])})],1)],1),s("b-tab-item",{attrs:{label:"Entry"}},[s("b-field",{attrs:{label:"Candidate's name"}},[s("b-input",{ref:"candNameTextbox",attrs:{title:e.candidate},model:{value:e.candidate,callback:function(t){e.candidate=t},expression:"candidate"}})],1),s("b-button",{attrs:{"icon-left":"check",type:"is-primary"},on:{click:function(t){return e.initSpace(e.candidate)}}},[e._v("Add")])],1)],1)],1),s("footer",{staticClass:"modal-card-foot"},[s("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(t){return e.$parent.close()}}},[e._v(" Close ")])])])}),P=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("header",{staticClass:"modal-card-head"},[s("p",{staticClass:"modal-card-title"},[e._v("Processed Candidate Listings in Repository")])])}],S=(s("b0c0"),{computed:{candidateList:function(){var e=this,t=[];if(this.results){var s=Object.keys(this.results),a=0;s.forEach((function(s){var r=e.results[s].map((function(e){return e.description}));t.push({id:++a,name:s,datasets:r.join(", ")})}))}return t}},data:function(){return{checkedRows:[],candidate:"",results:{}}},mounted:function(){var e=this;fetch("".concat("http://ec2-3-135-142-102.us-east-2.compute.amazonaws.com:3000/api","/results")).then((function(e){return e.json()})).then((function(t){return e.results=t}))},methods:{initSpace:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:t.$emit("init-space",e),t.$parent.close();case 2:case"end":return s.stop()}}),s)})))()},deleteRow:function(e){var t=this;this.$buefy.dialog.confirm({title:"Deleting candidate",message:"Are you sure you want to <b>delete</b> this candidate? This action cannot be undone.",confirmText:"Delete Candidate",type:"is-danger",hasIcon:!0,onConfirm:function(){t.results&&(delete t.results[e.name],fetch("".concat("http://ec2-3-135-142-102.us-east-2.compute.amazonaws.com:3000/api","/results"),{method:"POST","Content-Type":"application/json",body:JSON.stringify(t.results)})),t.$buefy.toast.open("Candidate delete!")}})}}}),L=S,T=Object(f["a"])(L,x,P,!1,null,null,null),Y=T.exports,R={computed:{datasets:function(){var e=[];return this.sessions.map((function(t){e.push(t.id+"_1"),e.push(t.id+"_2")})),e},totals:function(){var e=0,t=0;return this.data.forEach((function(s){e+=s.credits,t+=s.gradePoints})),{CGPA:t>0?t/e:0,totalcredits:e,totalgradepoints:t}},gradeYears:function(){return Object.keys(this.gradeList)},collatedCarryovers:function(){var e=this,t=[];return this.data.forEach((function(s){s.items.forEach((function(s){var a=s.code.split("_")[0],r=t.indexOf(a);e.passGrade<s.grade?-1===r&&t.push(a):-1!==r&&(e.passedCarryovers.push({courseCode:a,dataset:s.code.split("_").splice(1,2).join("_")}),t.splice(r,1))}))})),t.join(", ")}},props:{gradeList:{type:Object,required:!0},selectedProg:{type:String,required:!0},selectedYear:{type:Number,required:!0},sessions:{type:Array,required:!0},displayTop:{type:Boolean,default:!0}},data:function(){return{data:[],courseList:[],course:{code:"",title:"",credits:-1},dataset:null,selectedCourses:[],bypassGradeYear:"",candidate:"",passGrade:null,passedCarryovers:[]}},methods:{initDb:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=null,t.next=3,fetch("".concat("http://ec2-3-135-142-102.us-east-2.compute.amazonaws.com:3000/api","/progs/").concat(e.selectedProg.toLowerCase())).then((function(e){return e.json()})).then((function(e){return s=e}));case 3:a=s?s.courseList:null,a&&(e.courseList=a[e.selectedYear].data),e.$emit("show-top",!1);case 6:case"end":return t.stop()}}),t)})))()},addToTable:function(){var e=this;if(this.dataset){var t=this.data.find((function(t){var s=t.description;return s==e.dataset}));void 0===t?(t={},t.items=[],t.description=this.dataset,t.credits=0,t.grade="*",t.points=0,t.gradePoints=0):this.data.splice(this.data.indexOf(t),1),this.selectedCourses.forEach((function(s){t.items.find((function(e){return e.code.split("_")[0]==s.code}))||t.items.push({code:s.code+"_"+e.dataset,description:s.code+" : "+s.title,credits:s.credits,grade:"F",points:0,gradePoints:0})})),this.data.push(t)}},changeGrade:function(e){var t=arguments,s=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var r,o,n,i,c,d,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r=!(t.length>1&&void 0!==t[1])||t[1],o=s.gradeList[s.bypassGradeYear?s.bypassGradeYear:s.dataset.split("_")[0]],!o){a.next=21;break}return n=o.data.find((function(t){return t.letter==e.grade})),i=o.data.indexOf(n),c=r?i>0?o.data[--i]:n:i!=o.data.length-1?o.data[++i]:n,e.grade=c.letter,e.points=c.points,e.gradePoints=c.points*e.credits,d=s.data.find((function(t){return t.description==e.code.split("_").splice(-2,2).join("_")})),d.credits=d.points=d.gradePoints=0,d.items.forEach((function(e){d.credits+=e.credits,d.points+=e.points,d.gradePoints+=e.gradePoints})),l=null,a.next=15,fetch("".concat("http://ec2-3-135-142-102.us-east-2.compute.amazonaws.com:3000/api","/results")).then((function(e){return e.json()})).then((function(e){return l=e}));case 15:if(!l){a.next=19;break}return l[s.candidate]=s.data,a.next=19,fetch("".concat("http://ec2-3-135-142-102.us-east-2.compute.amazonaws.com:3000/api","/results"),{method:"POST","Content-Type":"application/json",body:JSON.stringify(l)});case 19:a.next=22;break;case 21:s.$buefy.toast.open({duration:5e3,message:"You've not created a grades list for the year ".concat(s.dataset.split("_")[0],", or bypass."),position:"is-bottom",type:"is-danger"});case 22:case"end":return a.stop()}}),a)})))()},fmtNum:function(e){return Number(Math.round(parseFloat(e)+"e2")+"e-2").toFixed(2)},showCandidateListDialog:function(){var e=this;this.$buefy.modal.open({parent:this,component:Y,hasModalCard:!0,events:{"init-space":function(t){e.initSpace(t)}}})},initSpace:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return t.$buefy.toast.open({duration:5e3,type:"is-success",message:"Candidate space loaded for ".concat(e,".")}),t.initDb(),t.candidate=e,a=null,s.next=6,fetch("".concat("http://ec2-3-135-142-102.us-east-2.compute.amazonaws.com:3000/api","/results")).then((function(e){return e.json()})).then((function(e){return a=e}));case 6:a&&e&&(a=a[e],t.data=a||[]);case 7:case"end":return s.stop()}}),s)})))()},markGoodRetake:function(e){var t=!1;return this.passedCarryovers.forEach((function(s){t||(t=s.courseCode==e.code.split("_")[0]&&s.dataset==e.code.split("_").splice(1,2).join("_"))})),t}}},O=R,j=(s("8ad2"),Object(f["a"])(O,k,w,!1,null,null,null)),G=j.exports,D={components:{CandidateSpace:G},computed:{},data:function(){return{repos:{courseList:{}},gradeList:{},sessions:[],programmes:[{code:"ACCHFT",title:"Accounting HND Fulltime"},{code:"ACCHPT",title:"Accounting HND Parttime"},{code:"ACCNFT",title:"Accounting ND Fulltime"},{code:"ACCNPT",title:"Accounting ND Parttime"},{code:"QUSHFT",title:"Quantity Surveying HND Fulltime"},{code:"QUSHPT",title:"Quantity Surveying HND Parttime"},{code:"QUSNFT",title:"Quantity Surveying ND Fulltime"},{code:"QUSNPT",title:"Quantity Surveying ND Parttime"}],selectedYear:0,selectedProg:"",displayTop:!0}},methods:{populate:function(){for(var e=2002,t=(new Date).getFullYear(),s=e;s<t+1;s++)this.sessions.push({id:s})},addCourseDialog:function(){var e=this;this.$buefy.modal.open({parent:this,component:b,props:{repos:this.repos,selectedYear:this.selectedYear},hasModalCard:!0,events:{"store-db":function(){return e.storeDb()}}})},addGradeDialog:function(){var e=this;this.$buefy.modal.open({parent:this,component:C,props:{gradeList:this.gradeList,selectedYear:this.selectedYear},hasModalCard:!0,events:{"store-db":function(){return e.storeDb()}}})},initDb:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("http://ec2-3-135-142-102.us-east-2.compute.amazonaws.com:3000/api","/grades")).then((function(e){return e.json()})).then((function(t){return e.gradeList=t}));case 2:return t.next=4,fetch("".concat("http://ec2-3-135-142-102.us-east-2.compute.amazonaws.com:3000/api","/progs/").concat(e.selectedProg.toLowerCase())).then((function(e){return e.json()})).then((function(t){return e.repos=t||{}}));case 4:e.repos||(s=e.repos.courseList[e.selectedYear],e.repos.courseList[e.selectedYear]=void 0!=s?s:{data:[]},a=e.gradeList[e.selectedYear],e.gradeList[e.selectedYear]=void 0!=a?a:{data:[]});case 5:case"end":return t.stop()}}),t)})))()},storeDb:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("http://ec2-3-135-142-102.us-east-2.compute.amazonaws.com:3000/api","/progs/").concat(e.selectedProg.toLowerCase()),{method:"POST","Content-Type":"application/json",body:JSON.stringify(e.repos)});case 2:if(!e.gradeList){t.next=5;break}return t.next=5,fetch("".concat("http://ec2-3-135-142-102.us-east-2.compute.amazonaws.com:3000/api","/grades"),{method:"POST","Content-Type":"application/json",body:JSON.stringify(e.gradeList)});case 5:case"end":return t.stop()}}),t)})))()},showTop:function(e){this.displayTop=e}},created:function(){this.populate()}},$=D,N=Object(f["a"])($,n,i,!1,null,"2ca3a44d",null),A=N.exports,E={name:"App",components:{ResultCompiler:A}},F=E,z=Object(f["a"])(F,r,o,!1,null,null,null),M=z.exports,H=s("289d");s("5abe");a["a"].config.productionTip=!1,a["a"].use(H["a"]),new a["a"]({render:function(e){return e(M)}}).$mount("#app")},"8ad2":function(e,t,s){"use strict";s("2f0f")}});
//# sourceMappingURL=app.5795fb17.js.map