(this["webpackJsonpresults-overlay"]=this["webpackJsonpresults-overlay"]||[]).push([[0],{102:function(e,t){},207:function(e){e.exports=JSON.parse('{"monza":"Monza","monza_2019":"Monza","zolder":"Zolder","zolder_2019":"Zolder","brands_hatch":"Brands Hatch","brands_hatch_2019":"Brands Hatch","silverstone":"Silverstone","silverstone_2019":"Silverstone","paul_ricard":"Paul Richard","paul_ricard_2019":"Paul Richard","misano":"Misano","misano_2019":"Misano","spa":"Spa","spa_2019":"Spa","nurburgring":"N\xfcrburgring","nurburgring_2019":"N\xfcrburgring","barcelona":"Barcelona","barcelona_2019":"Barcelona","hungaroring":"Hungaroring","hungaroring_2019":"Hungaroring","zandvoort":"Zandvoort","zandvoort_2019":"Zandvoort"}')},208:function(e){e.exports=JSON.parse('{"Q":"Qualifying","S":"Superpole","R":"Race"}')},209:function(e){e.exports=JSON.parse('{"0":"Porsche 991 GT3","1":"Mercedes AMG GT3","2":"Ferrari 488 GT3","3":"Audi R8 LMS","4":"Lamborghini Huracan GT3","5":"McLaren 650s GT3","6":"Nissan GT R Nismo GT3 (2018)","7":"BMW M6 GT3","8":"Bentley Continental GT3 (2018)","9":"Porsche 991.2 GT3 Cup","10":"Nissan GT-R Nismo GT3 (2017)","11":"Bentley Continental GT3 (2016)","12":"Aston Martin Vantage V12 GT3","13":"Lamborghini Gallardo R-EX","14":"Jaguar G3","15":"Lexus RCF GT3","16":"Lamborghini Huracan Evo (2019)","17":"Honda NSX GT3","18":"Lamborghini Huracan Super Trofeo","19":"Audi R8 LMS Evo (2019)","20":"AMR V8 Vantage (2019)","21":"Honda NS XEvo (2019)","22":"McLaren 720S GT3 (2019)","23":"Porsche 911 II GT3 R (2019)","50":"Alpine A110 GT4","51":"Aston Martin Vantage GT4","52":"Audi R8 LMS GT4","53":"BMW M4 GT4","55":"Chevrolet Camaro GT4","56":"Ginetta G55 GT4","57":"KTM X-Bow GT4","58":"Maserati MCGT4","59":"McLaren 570S GT4","60":"Mercedes AMG GT4","61":"Porsche 718 Cayman GT4"}')},213:function(e,t,n){e.exports=n(411)},218:function(e,t,n){},219:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},266:function(e,t){},268:function(e,t){},278:function(e,t){},280:function(e,t){},306:function(e,t){},308:function(e,t){},309:function(e,t){},315:function(e,t){},317:function(e,t){},335:function(e,t){},338:function(e,t){},354:function(e,t){},357:function(e,t){},408:function(e,t,n){},411:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(45),o=n.n(i),s=(n(218),n(219),n(11)),c=n(12),u=n(71),l=n(14),d=n(13),p=n(220).GoogleSpreadsheet,m=0,f=1,h=2,v=3,g=4,E=5,y=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).getData=function(){var e=new p("10rzTjo2N0e8Jv3u_5MITR15rPKyNP_PZhQZT8Y9BuI8");e.useApiKey("AIzaSyCxX-4lqK3lI6IljhQ_EqJdK7-bYqDu7ms"),e.loadInfo().then((function(){e.sheetsByIndex[1].loadCells("A1:F100").then((function(){for(var t=!0,n=0,r=[];t;){var i=e.sheetsByIndex[1].getCell(n,m).value,o=e.sheetsByIndex[1].getCell(n,f).value,s=e.sheetsByIndex[1].getCell(n,h).value,c=e.sheetsByIndex[1].getCell(n,v).value,l=e.sheetsByIndex[1].getCell(n,g).value,d=e.sheetsByIndex[1].getCell(n,E).value;i?(r.push({position:i,cupPosition:o,teamName:s,driverName:c,laps:l,gap:d}),n+=1):t=!1}a.setState({entries:r}),a.intervalID=setTimeout(a.getData.bind(Object(u.a)(a)),1500)}))}))},a.state={entries:[]},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.entries.map((function(e,t){return r.a.createElement("div",{class:"div-".concat(t%2),align:"left",background:"green",key:e.position},e.position,". ",e.teamName," - ",e.driverName)})))}}]),n}(a.Component),b=(n(408),n(412)),T=(a.Component,n(72)),C=n(31),O=n(4),_=n.n(O),k=n(27),S="driver",N="team",j=n(414),R=n(415),x=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(c.a)(n,[{key:"render",value:function(){var e="";return e=this.props.visualstate===N?this.props.entry.car.teamName:this.props.entry.currentDriver.firstName+" "+this.props.entry.currentDriver.lastName,r.a.createElement("div",{key:this.props.entry.car.carId,className:"SessionResultRow"},r.a.createElement("div",{className:"PositionCol"},this.props.entry.position),r.a.createElement("div",{className:"CarnumberCol"},this.props.entry.car.raceNumber),r.a.createElement("div",{className:"DriverCol"},e),r.a.createElement("div",{className:"CarCol"},this.props.entry.carName),r.a.createElement("div",{className:"TimeCol"},this.props.entry.timing.bestLapFormatted),r.a.createElement("div",{className:"TimeDiffCol"},this.props.entry.timing.timeDiffFormatted))}}]),n}(a.Component),w=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e))._handleKeyDown=function(e){if(e.keyCode===a.NEXT_PAGE_KEY){var t=a.currentPage+1;t===a.props.content.leaderboard.length&&(t=0),a._updateEntries(t)}else e.keyCode===a.TEAM_DRIVER_SWAP_KEY&&(a.state.visState===N?a.setState({visState:S}):a.state.visState===S&&a.setState({visState:N}))},a._updateEntries=function(){var e=Object(k.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a._clearEntries();case 2:return a.currentPage=t,e.next=5,a._addEntries();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a._clearEntries=Object(k.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Promise((function(e){a._removeEntry((function(){e()}))})),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)}))),a._removeEntry=function(e){var t=Object(C.a)(a.state.pageEntries);t.shift(),a.setState({pageEntries:t}),t.length>0?setTimeout((function(){a._removeEntry(e)}),100):setTimeout((function(){e()}),600)},a._addEntries=Object(k.a)(_.a.mark((function e(){var t,n,r,i;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object(C.a)(a.props.content.leaderboard[a.currentPage]),n=Object(T.a)(t),e.prev=2,n.s();case 4:if((r=n.n()).done){e.next=10;break}return i=r.value,e.next=8,a._addEntry(i);case 8:e.next=4;break;case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),n.e(e.t0);case 15:return e.prev=15,n.f(),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[2,12,15,18]])}))),a._addEntry=function(){var e=Object(k.a)(_.a.mark((function e(t){var n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Promise((function(e){var n=Object(C.a)(a.state.pageEntries);n.push(t),a.setState({pageEntries:n}),setTimeout((function(){e()}),100)})),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.currentPage=-1,a.NEXT_PAGE_KEY="Q".charCodeAt(0),a.TEAM_DRIVER_SWAP_KEY="W".charCodeAt(0),a.state={pageEntries:[],visState:S},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this._handleKeyDown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this._handleKeyDown)}},{key:"render",value:function(){var e=this.state.pageEntries,t=this.state.visState;return r.a.createElement("div",{className:"SessionResultsPage"},r.a.createElement("div",{className:"Title"},"".concat(this.props.title," - ").concat(this.props.content.track," - ").concat(this.props.content.session)),r.a.createElement(j.a,null,e.map((function(e,n){return r.a.createElement(R.a,{key:"".concat(e.car.carId,"-transition"),classNames:"item",timeout:2200},r.a.createElement(x,{key:e.car.carId,entry:e,visualstate:t,style:n%2===0?"div-entry-1":"div-entry-2"}))}))))}}]),n}(a.Component),G=n(207),P=n(208),M=n(209),I=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).chunkLeaderboardLines=function(e){var t,n=[];for(t=0;t<e.length;t+=10){var a=e.slice(t,t+10);n.push(a)}return n},a.msToTime=function(e){return new Date(e).toISOString().slice(14,-1)},a.addPositionField=function(e,t){var n=e[0].timing.lapCount,r=e[0].timing.totalTime,i=e[0].timing.bestLap;return e.map((function(o,s){o.position=s+1,o.carName=M[o.car.carModel];var c="---";if(t)if(o.timing.lapCount<n){var u=n-o.timing.lapCount;c="+".concat(u," lap").concat(u>1?"s":"")}else o.timing.timeDiff=o.timing.totalTime-r,c=0===s?"":"+"+a.msToTime(o.timing.timeDiff);else o.timing.timeDiff=0===s?0:e[s].timing.bestLap-i,c=0===s?"":"+"+a.msToTime(o.timing.timeDiff);return o.timing.timeDiffFormatted=c,o.timing.bestLapFormatted=a.msToTime(o.timing.bestLap),o}))},a.onFileRead=function(e){var t=a.fReader.result,n=JSON.parse(t),r={session:P[n.sessionType],track:G[n.trackName]},i=a.addPositionField(n.sessionResult.leaderBoardLines,"R"===n.sessionType),o=a.chunkLeaderboardLines(i);r.leaderboard=o,a.content=r,a.setState({dataLoaded:!0})},a.onUpload=function(){a.fReader.onloadend=a.onFileRead,a.fReader.readAsText(a.fileInput.current.files[0],"UTF-16LE")},a.handleChange=function(e){a.setState({title:e.target.value})},a.state={dataLoaded:!1,title:""},a.fileInput=r.a.createRef(),a.textInput=r.a.createRef(),a.fReader=new FileReader,a}return Object(c.a)(n,[{key:"render",value:function(){var e=r.a.createElement("div",{className:"MainMenu"},r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Title..",onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("input",{type:"file",ref:this.fileInput})),r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:this.onUpload},"load")));return this.state.dataLoaded&&(e=r.a.createElement("div",{className:"SessionResultsPage"},r.a.createElement(w,{content:this.content,title:this.state.title}))),e}}]),n}(a.Component);var L=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Row ChampionshipStandingsRow-".concat(this.props.entry.category)},r.a.createElement("div",{className:"ChampionshipStandingsPositionCol"},this.props.entry.position),r.a.createElement("div",{className:"ChampionshipStandingsCarNumCol ".concat(this.props.entry.category)},this.props.entry.carNumber),r.a.createElement("div",{className:"ChampionshipStandingsNameCol"},this.props.entry.name),r.a.createElement("div",{className:"ChampionshipStandingsCarCol"},this.props.entry.car),r.a.createElement("div",{className:"ChampionshipStandingsPointsCol"},this.props.entry.points))}}]),n}(a.Component),A=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e))._handleKeyDown=function(e){if(e.keyCode===a.NEXT_PAGE_KEY){var t=a.currentPage+1,n=a.currentCategoryIndex;t===a.props.content[a.currentCategoryIndex].lines.length&&(t=0,(n+=1)===a.props.content.length&&(n=0)),a._updateEntries(t,n)}},a._updateEntries=function(){var e=Object(k.a)(_.a.mark((function e(t,n){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a._clearEntries();case 2:return a.currentPage=t,a.currentCategoryIndex=n,e.next=6,a._addEntries();case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),a._clearEntries=Object(k.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Promise((function(e){a._removeEntry((function(){e()}))})),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)}))),a._removeEntry=function(e){var t=Object(C.a)(a.state.pageEntries);t.shift(),a.setState({pageEntries:t}),t.length>0?setTimeout((function(){a._removeEntry(e)}),100):setTimeout((function(){e()}),600)},a._addEntries=Object(k.a)(_.a.mark((function e(){var t,n,r,i;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.currentTitle="".concat(a.props.title," - ").concat(a.props.content[a.currentCategoryIndex].name),t=Object(C.a)(a.props.content[a.currentCategoryIndex].lines[a.currentPage]),n=Object(T.a)(t),e.prev=3,n.s();case 5:if((r=n.n()).done){e.next=11;break}return i=r.value,e.next=9,a._addEntry(i);case 9:e.next=5;break;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),n.e(e.t0);case 16:return e.prev=16,n.f(),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[3,13,16,19]])}))),a._addEntry=function(){var e=Object(k.a)(_.a.mark((function e(t){var n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Promise((function(e){var n=Object(C.a)(a.state.pageEntries);n.push(t),a.setState({pageEntries:n}),setTimeout((function(){e()}),100)})),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.currentPage=-1,a.currentCategoryIndex=0,a.currentTitle=a.props.title,a.NEXT_PAGE_KEY="Q".charCodeAt(0),a.TEAM_DRIVER_SWAP_KEY="W".charCodeAt(0),a.state={pageEntries:[],visState:S},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this._handleKeyDown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this._handleKeyDown)}},{key:"render",value:function(){var e=this.state.pageEntries;return r.a.createElement("div",{className:"SessionResultsPage"},r.a.createElement("div",{className:"ChampionshipStandingsTitle"},this.props.title),r.a.createElement(j.a,null,e.map((function(e,t){return r.a.createElement(R.a,{key:"".concat(e.id,"-transition"),classNames:"item",timeout:2200},r.a.createElement(L,{key:"".concat(e.id,"-entry"),entry:e}))}))))}}]),n}(a.Component),D=0,B=1,K=2,F=3,W=4,z=5,V=6,H=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).onFileRead=function(e){var t=function(e,t){t=t||",";for(var n=new RegExp("(\\"+t+'|\\r?\\n|\\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^"\\'+t+"\\r\\n]*))","gi"),a=[[]],r=null;r=n.exec(e);){var i,o=r[1];o.length&&o!==t&&a.push([]),i=r[2]?r[2].replace(new RegExp('""',"g"),'"'):r[3],a[a.length-1].push(i)}return a}(a.fReader.result,",");t.shift(),t=t.map((function(e,t){return{carNumber:e[F],class:e[B],position:e[D],name:e[W],car:e[z],points:e[V],id:t,category:e[K]}})),a.content=a.paginateStandings(t,10),a.setState({dataLoaded:!0})},a.paginateStandings=function(e,t){var n=e.reduce((function(e,t){var n="".concat(t.class,"-").concat(t.category);return e[n]||(e[n]=[]),e[n].push(t),e}),{});return Object.keys(n).map((function(e){var a,r=n[e],i=[];for(a=0;a<r.length;a+=t)i.push(r.slice(a,a+t));return{name:e,lines:i}})).sort((function(e,t){var n=a.paginationOrder.indexOf(e.name),r=a.paginationOrder.indexOf(t.name);return n<r?-1:n<r?1:0}))},a.onUpload=function(){a.fReader.onloadend=a.onFileRead,a.fReader.readAsText(a.fileInput.current.files[0],"UTF-8")},a.handleChange=function(e){a.setState({title:e.target.value})},a.state={dataLoaded:!1},a.fileInput=r.a.createRef(),a.fReader=new FileReader,a.paginationOrder=["GT3-PRO","GT3-SILVER","GT3-AM","GT3-ROOKIE","GT4-PRO","GT4-SILVER","GT4-AM","GT4-ROOKIE"],a.state={},a}return Object(c.a)(n,[{key:"render",value:function(){var e=r.a.createElement("div",{className:"MainMenu"},r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Title..",onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("input",{type:"file",ref:this.fileInput})),r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:this.onUpload},"load")));return this.state.dataLoaded&&(e=r.a.createElement(A,{content:this.content,title:this.state.title})),e}}]),n}(a.Component),J="result_json",U="champ_standings_json",X=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).onClickedOption=function(e){a.setState({activePage:e.target.id})},a.state={activePage:""},a}return Object(c.a)(n,[{key:"render",value:function(){this.onClickedOption;return"Leaderboard"===this.state.activePage?r.a.createElement(y,null):this.state.activePage===J?r.a.createElement(I,null):this.state.activePage===U?r.a.createElement(H,null):r.a.createElement("div",{className:"MainMenu",id:"MainMenu"},r.a.createElement(b.a,{type:"button",id:J,onClick:this.onClickedOption},"Results .json"),r.a.createElement(b.a,{type:"button",id:U,onClick:this.onClickedOption},"Championship standings .csv"))}}]),n}(a.Component);var Y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(X,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[213,1,2]]]);
//# sourceMappingURL=main.900ff55c.chunk.js.map