(this["webpackJsonpresults-overlay"]=this["webpackJsonpresults-overlay"]||[]).push([[0],{16:function(e){e.exports=JSON.parse('{"0":"Porsche 991 GT3","1":"Mercedes AMG GT3","2":"Ferrari 488 GT3","3":"Audi R8 LMS","4":"Lamborghini Huracan GT3","5":"McLaren 650s GT3","6":"Nissan GT R Nismo GT3 (2018)","7":"BMW M6 GT3","8":"Bentley Continental GT3 (2018)","9":"Porsche 991.2 GT3 Cup","10":"Nissan GT-R Nismo GT3 (2017)","11":"Bentley Continental GT3 (2016)","12":"Aston Martin Vantage V12 GT3","13":"Lamborghini Gallardo R-EX","14":"Jaguar G3","15":"Lexus RCF GT3","16":"Lamborghini Huracan Evo (2019)","17":"Honda NSX GT3","18":"Lamborghini Huracan Super Trofeo","19":"Audi R8 LMS Evo (2019)","20":"AMR V8 Vantage (2019)","21":"Honda NS XEvo (2019)","22":"McLaren 720S GT3 (2019)","23":"Porsche 911 II GT3 R (2019)","50":"Alpine A110 GT4","51":"Aston Martin Vantage GT4","52":"Audi R8 LMS GT4","53":"BMW M4 GT4","55":"Chevrolet Camaro GT4","56":"Ginetta G55 GT4","57":"KTM X-Bow GT4","58":"Maserati MCGT4","59":"McLaren 570S GT4","60":"Mercedes AMG GT4","61":"Porsche 718 Cayman GT4"}')},24:function(e,t,n){e.exports=n(36)},29:function(e,t,n){},30:function(e,t,n){},34:function(e){e.exports=JSON.parse("{}")},35:function(e){e.exports=JSON.parse("{}")},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(10),s=n.n(i),c=(n(29),n(30),n(1)),o=n(2),l=n(4),u=n(3),p=n(39),d=(a.Component,n(20)),m=n(14),h=n(6),f=n.n(h),v=n(8),g="driver",E="team",y=n(40),T=n(41),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(c.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{key:this.props.staticTitle,className:"Title"},"".concat(this.props.title," - ").concat(this.props.staticTitle)))}}]),n}(a.Component),C=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e))._handleKeyDown=function(){var e=Object(v.a)(f.a.mark((function e(t){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.keyCode!==a.NEXT_PAGE_KEY){e.next=12;break}if(n=a.currentPage+1,r=a.currentCategoryIndex,n===a.props.content[a.currentCategoryIndex].lines.length&&(n=0,(r+=1)===a.props.content.length&&(r=0,n=-1)),!a.props.content[r]||a.props.content[r].name===a.state.staticTitle||-1===n){e.next=7;break}return e.next=7,a._updateTitle(a.props.content[r].name);case 7:return e.next=9,a._updateEntries(n,r);case 9:if(-1!==n){e.next=12;break}return e.next=12,a._updateTitle("");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a._updateTitle=function(){var e=Object(v.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Promise((function(e){a.setState({staticTitle:""}),setTimeout((function(){a.setState({staticTitle:t}),setTimeout((function(){e()}),200)}),500)})),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a._updateEntries=function(){var e=Object(v.a)(f.a.mark((function e(t,n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a._clearEntries();case 2:return a.currentPage=t,a.currentCategoryIndex=n,e.next=6,a._addEntries();case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),a._clearEntries=Object(v.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Promise((function(e){a._removeEntry((function(){e()}))})),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)}))),a._removeEntry=function(e){var t=Object(m.a)(a.state.pageEntries);t.shift(),a.setState({pageEntries:t}),t.length>0?setTimeout((function(){a._removeEntry(e)}),100):setTimeout((function(){e()}),600)},a._addEntries=Object(v.a)(f.a.mark((function e(){var t,n,r,i,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.props.content[a.currentCategoryIndex].name,a.currentTitle="".concat(a.props.title," - ").concat(t||""),!a.props.content[a.currentCategoryIndex].lines[a.currentPage]){e.next=21;break}n=Object(m.a)(a.props.content[a.currentCategoryIndex].lines[a.currentPage]),r=Object(d.a)(n),e.prev=5,r.s();case 7:if((i=r.n()).done){e.next=13;break}return s=i.value,e.next=11,a._addEntry(s);case 11:e.next=7;break;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),r.e(e.t0);case 18:return e.prev=18,r.f(),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[5,15,18,21]])}))),a._addEntry=function(){var e=Object(v.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Promise((function(e){var n=Object(m.a)(a.state.pageEntries);n.push(t),a.setState({pageEntries:n}),setTimeout((function(){e()}),100)})),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.currentPage=-1,a.currentCategoryIndex=0,a.currentTitle=a.props.title,a.NEXT_PAGE_KEY="Q".charCodeAt(0),a.TEAM_DRIVER_SWAP_KEY="W".charCodeAt(0),a.state={pageEntries:[],visState:g,staticTitle:""},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this._handleKeyDown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this._handleKeyDown)}},{key:"title",value:function(){return""!==this.state.staticTitle?r.a.createElement(b,{staticTitle:this.state.staticTitle,title:this.props.title}):r.a.createElement("div",null)}},{key:"render",value:function(){var e=this,t=this.state.pageEntries;return r.a.createElement("div",{className:"OverlayPage"},r.a.createElement("div",{className:"test"},r.a.createElement(y.a,null,r.a.createElement(T.a,{key:"".concat(this.state.staticTitle,"-transition"),classNames:"item",timeout:500},this.title()))),r.a.createElement(y.a,null,t.map((function(t){return r.a.createElement(T.a,{key:"".concat(t.id,"-transition"),classNames:"item",timeout:2200},r.a.createElement(e.props.entryClass,{key:"".concat(t.id,"-entry"),entry:t}))}))))}}]),n}(a.Component),O=(n(34),n(35),n(16)),R=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).sizeForDeficitLength=function(){return a.props.entry.timing.deficit.length>=9?21:8===a.props.entry.timing.deficit.length?24:7===a.props.entry.timing.deficit.length?27:a.props.entry.timing.deficit.length<=6?30:void 0},a.sizeForTimeLength=function(){return a.props.entry.timing.bestLap.length>=9?27:8===a.props.entry.timing.bestLap.length?30:7===a.props.entry.timing.bestLap.length?33:a.props.entry.timing.bestLap.length<=6?36:void 0},a}return Object(o.a)(n,[{key:"render",value:function(){var e="";return e=this.props.visualstate===E?this.props.entry.car.teamName:this.props.entry.name,r.a.createElement("div",{key:this.props.entry.car.carId,className:"Row SessionResultsRow-".concat(this.props.entry.category)},r.a.createElement("div",{className:"SessionResultPositionCol"},this.props.entry.position),r.a.createElement("div",{className:"SessionResultCarNumberCol ".concat(this.props.entry.category)},this.props.entry.carNumber),r.a.createElement("div",{className:"SessionResultDriverCol"},e),r.a.createElement("div",{className:"SessionResultCarCol"},this.props.entry.car),r.a.createElement("div",{className:"SessionResultTimeCol",style:{fontSize:this.sizeForTimeLength()}},this.props.entry.timing.bestLap),r.a.createElement("div",{className:"SessionResultTimeDiffCol",style:{fontSize:this.sizeForDeficitLength()}},this.props.entry.timing.deficit))}}]),n}(a.Component),S=n(18);var G=["GT3-PRO","GT3-SILVER","GT3-AM","GT3-ROOKIE","ST-PRO","ST-SILVER","ST-AM","ST-ROOKIE","CUP-PRO","CUP-SILVER","CUP-AM","CUP-ROOKIE","GT4-PRO","GT4-SILVER","GT4-AM","GT4-ROOKIE"],N=function(e){return 18===parseInt(e,10)?"ST":9===parseInt(e,10)?"CUP":e<50?"GT3":"GT4"},j=function(e){switch(e){case 0:return"PRO";case 1:return"SILVER";case 2:return"AM";case 3:default:return"ROOKIE"}},k=function(e,t){return t?"---":"".concat(e.currentDriver.firstName," ").concat(e.currentDriver.lastName)},x=function(e){var t="";return"0"===(t=e>6e4?new Date(e).toISOString().slice(14,-1):new Date(e).toISOString().slice(17,-1))[0]&&(t=t.slice(1)),t},w=function(e){var t=e.reduce((function(e,t){var n="".concat(t.class,"-").concat(t.category);return e[n]||(e[n]=[]),e[n].push(t),e}),{});return Object.keys(t).map((function(e){var n,a=t[e],r=[];for(a=a.sort((function(e,t){var n=parseInt(e.points,10),a=parseInt(t.points,10);return n>a?-1:n<a?1:0})).map((function(e,t){return Object(S.a)(Object(S.a)({},e),{},{position:"".concat(t+1)})})),n=0;n<a.length;n+=10)r.push(a.slice(n,n+10));return{name:e,lines:r}})).sort((function(e,t){var n=G.indexOf(e.name),a=G.indexOf(t.name);return n<a?-1:n>a?1:0}))},L=function(e){var t=1,n=2,a=3,r=4,i=5,s=6,c=function(e,t){t=t||",";for(var n=new RegExp("(\\"+t+'|\\r?\\n|\\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^"\\'+t+"\\r\\n]*))","gi"),a=[[]],r=null;r=n.exec(e);){var i,s=r[1];s.length&&s!==t&&a.push([]),i=r[2]?r[2].replace(new RegExp('""',"g"),'"'):r[3],a[a.length-1].push(i)}return a}(e,",");c.shift();var o=c.filter((function(e){return""!==e[r]})).map((function(e,c){return{id:c,carNumber:e[a],class:e[t],name:e[r],car:e[i],category:e[n].toUpperCase(),championshipStandings:{points:e[s],deficit:0}}}));return w(o)},M=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onFileRead=function(e){var t=a.fReader.result;a.content=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=e.sessionResult.leaderBoardLines,a="R"===e.sessionType,r=n[0].timing.lapCount,i=n[0].timing.totalTime,s=n[0].timing.bestLap,c=function(e,t,n){if(t){if(e.lapCount<r){var a=r-e.lapCount;return"+".concat(a," lap").concat(a>1?"s":"")}return 0===n?"":"+".concat(x(e.totalTime-i))}return 0===n?"":"+".concat(x(e.bestLap-s))},o=n.map((function(e,n){return{id:e.car.carId,car:O[e.car.carModel],carNumber:e.car.raceNumber.toString(),category:j(e.car.cupCategory),class:N(e.car.carModel),name:k(e,t),points:"0",position:n+1,timing:{bestLap:x(e.timing.bestLap),deficit:c(e.timing,a,n)}}}));return w(o)}(JSON.parse(t)),a.setState({dataLoaded:!0})},a.onUpload=function(){a.fReader.onloadend=a.onFileRead,a.fReader.readAsText(a.fileInput.current.files[0],"UTF-16LE")},a.handleChange=function(e){a.setState({title:e.target.value})},a.state={dataLoaded:!1,title:""},a.fileInput=r.a.createRef(),a.textInput=r.a.createRef(),a.fReader=new FileReader,a}return Object(o.a)(n,[{key:"render",value:function(){var e=r.a.createElement("div",{className:"MainMenu"},r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Title..",onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("input",{type:"file",ref:this.fileInput})),r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:this.onUpload},"load")));return this.state.dataLoaded&&(e=r.a.createElement("div",{className:"SessionResultsPage"},r.a.createElement(C,{content:this.content,title:this.state.title,entryClass:R}))),e}}]),n}(a.Component),I=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(c.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Row ChampionshipStandingsRow-".concat(this.props.entry.category)},r.a.createElement("div",{className:"ChampionshipStandingsPositionCol"},this.props.entry.position),r.a.createElement("div",{className:"ChampionshipStandingsCarNumCol ".concat(this.props.entry.category)},this.props.entry.carNumber),r.a.createElement("div",{className:"ChampionshipStandingsNameCol"},this.props.entry.name),r.a.createElement("div",{className:"ChampionshipStandingsCarCol"},this.props.entry.car),r.a.createElement("div",{className:"ChampionshipStandingsPointsCol"},this.props.entry.championshipStandings.points))}}]),n}(a.Component),P=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onFileRead=function(e){var t=a.fReader.result;a.content=L(t),a.setState({dataLoaded:!0})},a.onUpload=function(){a.fReader.onloadend=a.onFileRead,a.fReader.readAsText(a.fileInput.current.files[0],"UTF-8")},a.handleChange=function(e){a.setState({title:e.target.value})},a.state={dataLoaded:!1},a.fileInput=r.a.createRef(),a.fReader=new FileReader,a.state={},a}return Object(o.a)(n,[{key:"render",value:function(){var e=r.a.createElement("div",{className:"MainMenu"},r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Title..",onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("input",{type:"file",ref:this.fileInput})),r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:this.onUpload},"load")));return this.state.dataLoaded&&(e=r.a.createElement(C,{content:this.content,title:this.state.title,entryClass:I})),e}}]),n}(a.Component),_="result_json",A="champ_standings_json",F=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onClickedOption=function(e){a.setState({activePage:e.target.id})},a.state={activePage:""},a}return Object(o.a)(n,[{key:"render",value:function(){this.onClickedOption;return this.state.activePage===_?r.a.createElement(M,null):this.state.activePage===A?r.a.createElement(P,null):r.a.createElement("div",{className:"MainMenu",id:"MainMenu"},r.a.createElement(p.a,{type:"button",id:_,onClick:this.onClickedOption},"Results .json"),r.a.createElement(p.a,{type:"button",id:A,onClick:this.onClickedOption},"Championship standings .csv"))}}]),n}(a.Component);var D=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(F,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.4825f8ec.chunk.js.map