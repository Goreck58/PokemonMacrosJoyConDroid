(this["webpackJsonppoke-macros-joycondroid"]=this["webpackJsonppoke-macros-joycondroid"]||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(9),o=a.n(s),i=a(2),c=a(3),l=a(5),u=a(4),h=a(1),m=a(6),d=a(7),p=a.n(d),g=(a(16),[31,29,31,30,31,30,31,31,30,31,30,31]),f=0,y=1,v=2,b=3;function k(e){var t;return p.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=null,a.next=3,p.a.awrap(fetch(e).then((function(e){return e.json()})));case 3:return t=a.sent,a.abrupt("return",t);case 5:case"end":return a.stop()}}))}function E(e){var t={background:"#FFF"},a={};return e.selected&&(t={background:"#000"},a={filter:"invert(1)"}),r.a.createElement("div",{className:"player-button",id:e.name,style:t,onClick:function(t){return e.clickHandler()}},r.a.createElement("img",{className:"icon",src:e.src,alt:e.name+" Button Icon",style:a}))}function S(e){var t={background:"white"};return e.selected&&(t={background:"black"}),r.a.createElement("div",{className:"macro"},r.a.createElement("div",{className:"macro-button",id:e.name,style:t,onClick:function(t){return e.clickHandler(e.index)}},r.a.createElement("img",{className:"icon",src:e.src,alt:"Icon "+e.name})),r.a.createElement("label",{className:"macro-button-label"},e.name))}function j(e){var t={width:"".concat(e.percentage,"%")};return r.a.createElement("div",{className:"progress-bar"},r.a.createElement("div",{className:"filler",style:t}))}function w(e){return r.a.createElement("div",{key:e.ind,className:"key-log"},r.a.createElement("b",{className:"key-log-cell"}," ",e.index," "),r.a.createElement("b",{className:"key-log-cell"}," ",e.pressedKey," "),r.a.createElement("b",{className:"key-log-cell"}," ",e.onTime," "),r.a.createElement("b",{className:"key-log-cell"}," ",e.offTime," "))}var C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){return this.props.onChange(this.props.paramKey,e.target.checked)}},{key:"render",value:function(){return r.a.createElement("input",{type:"checkbox",checked:this.props.checked,onChange:this.handleChange})}}]),t}(r.a.Component),M=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){""!==e.target.value?this.props.onChange(parseInt(e.currentTarget.value)):this.props.onChange(1)}},{key:"render",value:function(){return r.a.createElement("input",{type:"number",className:"integer-input",readOnly:this.props.readonly,value:this.props.value,onChange:this.handleChange,max:this.props.max,min:this.props.min})}}]),t}(r.a.Component),T=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){""!==e.target.value?this.props.onChange(parseInt(e.currentTarget.value)):this.props.onChange(0)}},{key:"renderOptions",value:function(){return this.props.options.map((function(e,t){return r.a.createElement("option",{key:"option"+t.toString(),value:t},e)}))}},{key:"render",value:function(){var e=this.renderOptions();return r.a.createElement("select",{className:"drop-down-list",onChange:this.handleChange},e)}}]),t}(r.a.Component),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={active:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.parameters;switch(this.props.macro){default:return r.a.createElement("div",{className:"macro-parameters",id:"DefaultParams"});case"Time Skip":return r.a.createElement("div",{className:"macro-parameters",id:"TimeSkipParams"},r.a.createElement("div",{className:"parameters-entry"},r.a.createElement("label",{className:"parameter-label"},"Skip Count"),r.a.createElement("div",{className:"parameter"},r.a.createElement(M,{id:"daysToAdvance",name:"days-to-advance",value:t.daysToAdvance,onChange:function(t){return e.props.eventHandler("daysToAdvance",t)},min:"1",max:"10000"}))),r.a.createElement("div",{className:"parameters-entry"},r.a.createElement("label",{className:"parameter-label"},"Date Format"),r.a.createElement("div",{className:"parameter"},r.a.createElement(T,{id:"dateFormat",name:"date-format",value:t.dateFormat,options:["World","US"],onChange:function(t){return e.props.eventHandler("dateFormat",t)}}))));case"Loto ID":return r.a.createElement("div",{className:"macro-parameters",id:"LottoIDParams"},r.a.createElement("div",{className:"parameters-entry"},r.a.createElement("label",{className:"parameter-label"},"First Day Loto"),r.a.createElement("div",{className:"parameter"},r.a.createElement(C,{id:"firstDayLoto",name:"first-day-loto",checked:t.getFirst,paramKey:"getFirst",onChange:this.props.eventHandler}))),r.a.createElement("div",{className:"parameters-entry"},r.a.createElement("label",{className:"parameter-label"},"Attempts"),r.a.createElement("div",{className:"parameter"},r.a.createElement(M,{id:"Attempts",name:"lotto-id-attempts",value:t.attempts,onChange:function(t){return e.props.eventHandler("attempts",t)},min:"0",max:"10000"}))),r.a.createElement("div",{className:"parameters-entry"},r.a.createElement("label",{className:"parameter-label"},"Date Format"),r.a.createElement("div",{className:"parameter"},r.a.createElement(T,{id:"dateFormat",name:"date-format",value:t.dateFormat,options:["World","US"],onChange:function(t){return e.props.eventHandler("dateFormat",t)}}))));case"Wonder Box":return r.a.createElement("div",{className:"macro-parameters",id:"WonderBoxParams"},r.a.createElement("div",{className:"parameters-entry"},r.a.createElement("label",{className:"parameter-label"},"Count"),r.a.createElement("div",{className:"parameter"},r.a.createElement(M,{id:"WTradeCount",name:"wonder-trade-count",value:t.count,onChange:function(t){return e.props.eventHandler("count",t)},min:"1",max:"30"}))),r.a.createElement("div",{className:"parameters-entry"},r.a.createElement("label",{className:"parameter-label"},"Wait Time"),r.a.createElement("div",{className:"parameter"},r.a.createElement(M,{id:"WTradeWaitTime",name:"wonder-trade-wait-time",value:t.waitTime,onChange:function(t){return e.props.eventHandler("waitTime",t)},min:"2",max:"600"}))))}}}]),t}(r.a.Component),L=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e={display:"none"};this.props.show&&(e.display="flex");for(var t=[],a=0;a<this.props.sections.length;a++){var n=this.props.sections[a];t[a]=r.a.createElement("div",{className:"infoSection",key:"infoSect_"+a.toString()},r.a.createElement("h2",{className:"infoSectionTitle"}," ",n.title," "),n.text)}return r.a.createElement("div",{id:"infoOverlay",className:"info-overlay",style:e},r.a.createElement("div",{id:"infoOverlayOut",onMouseDown:this.props.onMouseDown,onTouchStart:this.props.onTouchStart}),r.a.createElement("div",{id:"infoTextBox",className:"text-box"},r.a.createElement("h1",{className:"infoTextTitle"}," ",this.props.title," "),t))}}]),t}(r.a.Component);var x=function(){function e(t){Object(i.a)(this,e),this.day=0,this.month=0,this.year=0,this.setFromString(t)}return Object(c.a)(e,[{key:"isLeapYear",value:function(){return this.year%4===0&&(this.year%100!==0||this.year%400===0)}},{key:"increment",value:function(e){this.day+=e;var t=g[this.month],a=this.day-t;for(1!==this.month||this.isLeapYear()||(a+=1);a>0;)this.day=a,this.month+=1,12===this.month&&(this.year+=1,this.month=0),t=g[this.month],a=this.day-t,1!==this.month||this.isLeapYear()||(a+=1)}},{key:"decrement",value:function(e){for(this.day-=e;this.day<=0;){this.month-=1,this.month<0&&(this.month=11,this.year-=1);var t=g[this.month];1!==this.month||this.isLeapYear()||(t-=1),this.day+=t}}},{key:"dayDifference",value:function(e){var t=new Date(this.toString());return(new Date(e.toString()).getTime()-t.getTime())/864e5}},{key:"daysToNextMonth",value:function(){var e=g[this.month];return 1!==this.month||this.isLeapYear()||(e-=1),e-this.day+1}},{key:"setFromString",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"2020-01-01";this.year=parseInt(e.substr(0,4)),this.month=parseInt(e.substr(5,2))-1,this.day=parseInt(e.substr(8,2))}},{key:"toString",value:function(){var e=this.day.toString();this.day<=9&&(e="0"+e);var t=(this.month+1).toString();return this.month<9&&(t="0"+t),this.year.toString()+"-"+t+"-"+e}},{key:"compare",value:function(e){var t=e.year;if(t===this.year){var a=e.month;return a===this.month?e.day-this.day:a-this.month}return t-this.year}}]),e}(),N=function(){function e(){Object(i.a)(this,e),this.segments={FstSkip:{filename:"FirstSkip.json",object:""},FstSkipUS:{filename:"FirstSkipUS.json",object:""},AdvDay:{filename:"AdvanceDay.json",object:""},LotoID:{filename:"LotoID.json",object:""},Return:{filename:"ReturnToGameFromSettings.json",object:""},Universal:{filename:"UniversalSkip.json",object:""},UniversalUS:{filename:"UniversalSkipUS.json",object:""},SelectInBox:{filename:"SelectInBox.json",object:""},StartWonder:{filename:"StartWonderTrade.json",object:""},EndWonder:{filename:"ConcludeWonderTrade.json",object:""}};var t=Object.entries(this.segments);this.loadedCount=0,this.segmentCount=t.length,this.loadConcluded=!1;for(var a=0;a<this.segmentCount;a++)this.loadMacro(t[a][0])}return Object(c.a)(e,[{key:"loadMacro",value:function(e){var t;return p.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=this.segments[e],a.next=3,p.a.awrap(k("./macros/"+t.filename));case 3:t.object=a.sent,this.loadedCount+=1,this.loadedCount===this.segmentCount&&(this.loadConcluded=!0,console.log("JSON Load Concluded"));case 6:case"end":return a.stop()}}),null,this)}},{key:"getMacro",value:function(e){var t=this.segments[e];return JSON.parse(JSON.stringify(t.object))}}]),e}(),F=function(){function e(t,a,n){Object(i.a)(this,e),this.jsonManager=t,this.name=a,this.icon=n,this.macro=0,this.macroJSON=[],this.parameters={},this.paramHandlers={},this.info=[]}return Object(c.a)(e,[{key:"changeParameter",value:function(e,t){return(0,this.paramHandlers[e])(t)}},{key:"getMacro",value:function(e){return this.jsonManager.loadConcluded?this.jsonManager.getMacro(e):null}},{key:"concatToMacro",value:function(e){this.macroJSON=this.macroJSON.concat(e)}},{key:"getRenderData",value:function(){return{name:this.name,icon:this.icon,parameters:this.parameters,info:this.info}}}]),e}(),P=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e,"Time Skip","./images/timeskip_icon.png"))).parameters.daysToAdvance=1,a.parameters.dateFormat=0,a.currentFormat="",a.onDaysToAdvanceChange=a.onDaysToAdvanceChange.bind(Object(h.a)(a)),a.onDateFormatChange=a.onDateFormatChange.bind(Object(h.a)(a)),a.paramHandlers={daysToAdvance:a.onDaysToAdvanceChange,dateFormat:a.onDateFormatChange};var n=r.a.createElement("p",null,r.a.createElement("b",null,"1-")," In the ",r.a.createElement("b",null,"Console Settings"),", turn ",r.a.createElement("b",null,"Synchronize Time")," off.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"2-")," The ",r.a.createElement("b",null,"Date")," in ",r.a.createElement("b",null,"Console Settings")," must be the first of any 31 day month.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"3-")," Set ",r.a.createElement("b",null,"Skip Count")," to the number of days to advance.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"4-")," Set ",r.a.createElement("b",null,"Date Format")," to match your console's format.");return a.info=[{title:"SetUp",text:n},{title:"How it works",text:"The frame of the seed will advance with each time the date is advanced. This means that we can just change the day, with the only downside being that when returning to the first of the month no advancement will happen. The macro takes this into account and adds repetitions so that in the end the correct number of skips is achieved."},{title:"Recommendations",text:"Avoid doing many skips in the Wild Area as this is known to sometimes result in game crashes. Use this macro indoors."}],a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"onDaysToAdvanceChange",value:function(e){return this.parameters.daysToAdvance!==e&&(this.parameters.daysToAdvance=e,!0)}},{key:"onDateFormatChange",value:function(e){if(this.parameters.dateFormat!==e){switch(this.parameters.dateFormat=e,e){default:case 0:this.currentFormat="";break;case 1:this.currentFormat="US"}return!0}return!1}},{key:"AdvanceDay",value:function(e){var t=this.getMacro("AdvDay");t[0].count=e,this.concatToMacro(t)}},{key:"InitMacro",value:function(){this.concatToMacro(this.getMacro("FstSkip"+this.currentFormat))}},{key:"build",value:function(){if(!this.jsonManager.loadConcluded)return null;this.macroJSON=[],this.InitMacro();var e=this.parameters.daysToAdvance;if(e>1){var t=Math.floor(e/31);t>=31&&(t+=Math.floor(t/31)),this.AdvanceDay(e+t)}return this.concatToMacro(this.getMacro("Return")),this.macro=new A(this.name,this.icon,this.macroJSON),this.macro}}]),t}(F),D=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e,"Loto ID","./images/lotoid_icon.png"))).parameters.attempts=1,a.parameters.getFirst=!0,a.parameters.dateFormat=0,a.currentFormat="",a.onAttemptsChange=a.onAttemptsChange.bind(Object(h.a)(a)),a.onGetFirstChange=a.onGetFirstChange.bind(Object(h.a)(a)),a.onDateFormatChange=a.onDateFormatChange.bind(Object(h.a)(a)),a.paramHandlers={attempts:a.onAttemptsChange,getFirst:a.onGetFirstChange};var n=r.a.createElement("p",null,r.a.createElement("b",null,"1-")," In the ",r.a.createElement("b",null,"Console Settings"),", turn ",r.a.createElement("b",null,"Synchronize Time")," off.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"2-")," Position the character in front of the PC, facing it.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"3-")," Check the ",r.a.createElement("b",null,"First Day Loto")," box only if you have the Loto still available.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"4-")," Set ",r.a.createElement("b",null,"Attempts")," to how many times you want to try the Loto.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"5-")," Set ",r.a.createElement("b",null,"Date Format")," to the your Switch's region date format.");return a.info=[{title:"SetUp",text:n}],a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"onAttemptsChange",value:function(e){return this.parameters.attempts!==e&&(this.parameters.attempts=e,!0)}},{key:"onGetFirstChange",value:function(e){return this.parameters.getFirst!==e&&(this.parameters.getFirst=e,!0)}},{key:"onDateFormatChange",value:function(e){if(this.parameters.dateFormat!==e){switch(this.parameters.dateFormat=e,e){default:case 0:this.currentFormat="";break;case 1:this.currentFormat="US"}return!0}return!1}},{key:"AdvanceDate",value:function(e){var t=new x(e.toString());t.increment(1),e.month<t.month?e.year<t.year?this.concatToMacro(this.getMacro("FstSkipY")):this.concatToMacro(this.getMacro("FstSkipM")):this.concatToMacro(this.getMacro("FstSkipD"))}},{key:"build",value:function(){if(!this.jsonManager.loadConcluded)return null;this.macroJSON=[];var e=0;for(this.parameters.getFirst&&(this.concatToMacro(this.getMacro("LotoID")),e=1);e<this.parameters.attempts;)this.concatToMacro(this.getMacro("Universal"+this.currentFormat)),e++,this.concatToMacro(this.getMacro("Return")),this.concatToMacro(this.getMacro("LotoID"));return this.macro=new A(this.name,this.icon,this.macroJSON),this.macro}}]),t}(F),I=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e,"Wonder Box","./images/wonderbox_icon.png"))).parameters.count=1,a.parameters.waitTime=25,a.onCountChange=a.onCountChange.bind(Object(h.a)(a)),a.onWaitTimeChange=a.onWaitTimeChange.bind(Object(h.a)(a)),a.paramHandlers={count:a.onCountChange,waitTime:a.onWaitTimeChange};var n=r.a.createElement("p",null,r.a.createElement("b",null,"1-")," In-Game, open your PC and go to the box with the pokemon to be wonder traded.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"2-")," Make sure there are no empty spots between pokemon. The macro will start trading from the top left corner and go left to right, top to bottom.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"3-")," Exit all menus.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"4-")," Set the ",r.a.createElement("b",null,"Count")," parameter to how many pokemon you want to trade away from that box.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"4-")," Set the ",r.a.createElement("b",null,"Wait Time")," parameter to how many ",r.a.createElement("b",null,"seconds")," the macro should wait for the Wonder Trade to complete."),s=r.a.createElement("p",null,"When running this macro, the time for a trade to go through can vary a lot. Because of this, you may need to adjust the ",r.a.createElement("b",null,"Wait Time"),". It can go up to 10 minutes (600 s), or as low as 2 seconds.",r.a.createElement("br",null),"If it is too erratic and you want to be more efficient, you can set the value relatively low and press pause after the search for a trade starts and press play to resume the macro when you see it has finished.",r.a.createElement("br",null),r.a.createElement("br",null),"It is also very important to make sure you have the correct box selected at the start of the macro.");return a.info=[{title:"SetUp",text:n},{title:"Recommendations",text:s}],a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"onCountChange",value:function(e){return this.parameters.count!==e&&(this.parameters.count=e,!0)}},{key:"onWaitTimeChange",value:function(e){return this.parameters.waitTime!==e&&(this.parameters.waitTime=e,!0)}},{key:"SelectInBox",value:function(e,t){var a=this.getMacro("SelectInBox");a[0].macro[0].count=e,a[0].macro[1].count=t,this.concatToMacro(a)}},{key:"ConcludeTrade",value:function(){var e=this.getMacro("EndWonder");e[0].macro[2].offTime=1e3*this.parameters.waitTime,this.concatToMacro(e)}},{key:"build",value:function(){if(!this.jsonManager.loadConcluded)return null;this.macroJSON=[];for(var e=0,t=0,a=0;t<5;t++){for(a=0;a<6&&(this.concatToMacro(this.getMacro("StartWonder")),this.SelectInBox(t,a),this.ConcludeTrade(),!(++e>=this.parameters.count));a++);if(e>=this.parameters.count)break}return this.macro=new A(this.name,this.icon,this.macroJSON),this.macro}}]),t}(F),A=function(){function e(t,a,n){var r;for(Object(i.a)(this,e),this.name=t,this.icon=a,this.state=f,this.onWait=!1,this.waitTimeout=null,this.runner=null,this.segments=n,this.totalSteps=0,this.currentOverallStep=0,this.totalTime=0,r=0;r<this.segments.length;r++){var s,o=this.segments[r],c=0;for(s=0;s<o.macro.length;s++){c+=o.macro[s].count}this.totalSteps+=c*o.count}}return Object(c.a)(e,[{key:"progress",value:function(){return 0===this.totalSteps?0:this.currentOverallStep/this.totalSteps}},{key:"startRunner",value:function(){var e=p.a.mark((function e(){var t,a,n,r,s,o,i,c,l,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.currentOverallStep=0,t={state:this.state,abort:!1},a=0;case 3:if(!(a<this.segments.length)){e.next=66;break}n=this.segments[a],r=n.macro,s=n.count,o=0;case 8:if(!(o<s)){e.next=63;break}i=0;case 10:if(!(i<r.length)){e.next=60;break}case 11:if(this.state===y){e.next=20;break}return void(e.next=14);case 14:if(!(t=e.sent).abort){e.next=17;break}return e.abrupt("return");case 17:this.state=t.state,e.next=11;break;case 20:c=r[i],l={button:c.button,pressed:!0,time:0},u=0,u=0;case 24:if(!(u<c.count)){e.next=57;break}return l.pressed=!0,this.wait(Math.max(c.onTime,20)),l.time=c.onTime,e.next=30,l;case 30:if(!this.onWait){e.next=39;break}return void(e.next=33);case 33:if(!(t=e.sent).abort){e.next=36;break}return e.abrupt("return");case 36:this.state=t.state,e.next=30;break;case 39:return l.pressed=!1,this.wait(Math.max(c.offTime,20)),l.time=c.offTime,e.next=44,l;case 44:if(!this.onWait&&this.state!==v){e.next=53;break}return void(e.next=47);case 47:if(!(t=e.sent).abort){e.next=50;break}return e.abrupt("return");case 50:this.state=t.state,e.next=44;break;case 53:this.currentOverallStep++;case 54:u++,e.next=24;break;case 57:i++,e.next=10;break;case 60:o++,e.next=8;break;case 63:a++,e.next=3;break;case 66:return e.abrupt("return");case 67:case"end":return e.stop()}}),e,this)}));this.runner=function(e,t){var a=e.apply(t);return a.next(),function(e){return a.next(e)}}(e,this)}},{key:"wait",value:function(e){this.waitTimeout=setTimeout(this.resume,e,this),this.onWait=!0}},{key:"resume",value:function(e){e.onWait=!1}},{key:"reset",value:function(){this.state=f,this.onWait&&(this.onWait=!1,clearTimeout(this.waitTimeout),this.waitTimeout=null),this.currentOverallStep=0,null!==this.runner&&(this.runner({state:this.state,abort:!0}),this.runner=null)}},{key:"toString",value:function(){for(var e="Macro - \n",t=0;t<this.segments.length;t++){var a=this.segments[t];e+="\t"+a.name+" x"+a.count.toString()+"\n"}return e}}]),e}(),J=function(){function e(){Object(i.a)(this,e),this.state={selectedMacro:0,playState:0,macroProgress:0,loadConcluded:!1},this.jsonManager=new N,this.builders=[],this.builders[0]=new P(this.jsonManager),this.builders[1]=new D(this.jsonManager),this.builders[2]=new I(this.jsonManager);var t=this.builders.length;this.dirtyMacro=Array(t).fill(!1),this.macros=Array(t).fill(null),this.selectMacro=this.selectMacro.bind(this),this.changeParameter=this.changeParameter.bind(this)}return Object(c.a)(e,[{key:"checkLoadConcluded",value:function(){var e=this.jsonManager.loadConcluded;if(e){for(var t=0;t<this.builders.length;t++)this.buildMacro(t),null!==this.macros[t]&&void 0!==this.macros[t]||(e=!1);this.state.loadConcluded=e}}},{key:"selectMacro",value:function(e){if(this.state.selectedMacro===e)return!1;new Audio("/click.mp3").play();var t=this.macros[this.state.selectedMacro];return t.state!==f&&(t.reset(),this.state.playState=f,this.state.macroProgress=0),this.state.selectedMacro=e,!0}},{key:"changeParameter",value:function(e,t){this.builders[this.state.selectedMacro].changeParameter(e,t)&&(this.dirtyMacro[this.state.selectedMacro]=!0)}},{key:"play",value:function(){var e=this.state.selectedMacro,t=this.macros[e],a=this.dirtyMacro[e];switch(t.state){default:case y:case v:break;case f:case b:t.state===b&&t.reset(),a&&(this.dirtyMacro[e]=!1,this.buildMacro(e),t=this.macros[e]),t.startRunner()}return t.state=y,this.state.playState=y,!0}},{key:"pause",value:function(){var e=this.macros[this.state.selectedMacro];return e.state===y&&(e.state=v,this.state.playState=v,!0)}},{key:"reset",value:function(){var e=this.macros[this.state.selectedMacro];return e.state!==f&&(e.reset(),this.state.playState=f,this.state.macroProgress=0,!0)}},{key:"getMacroState",value:function(){return{macroState:this.state.playState,macroProgress:this.state.macroProgress}}},{key:"getAllMacroData",value:function(){for(var e=[],t=0;t<this.builders.length;t++){var a=this.builders[t];e[t]=a.getRenderData()}return e}},{key:"getCurrentMacroData",value:function(){return this.builders[this.state.selectedMacro].getRenderData()}},{key:"buildMacro",value:function(e){var t=this.builders[e].build(this.parameters);this.macros[e]=t,console.log(t.toString())}},{key:"updateMacros",value:function(){for(var e=0;e<this.macroBuilders.length;e++){this.macroParamsDirty[e]&&(this.buildMacro(e),this.macroParamsDirty[e]=!1)}}},{key:"update",value:function(){var e=void 0;if(this.state.loadConcluded||this.checkLoadConcluded(),this.state.loadConcluded){var t=void 0,a=this.macros[this.state.selectedMacro];if(void 0===a||null===a)return;switch(a.state){default:case f:case b:return;case y:case v:t=a.runner({state:a.state,abort:!1})}void 0!==t&&(void 0!==t.value&&(e=t.value),t.done&&(a.state=b)),this.state.playState=a.state,this.state.macroProgress=100*a.progress()}return e}}]),e}(),W=function(){function e(){Object(i.a)(this,e),this.keys={a:{pressed:!1,pendingLog:null},b:{pressed:!1,pendingLog:null},x:{pressed:!1,pendingLog:null},y:{pressed:!1,pendingLog:null},lsl:{pressed:!1,pendingLog:null},lsr:{pressed:!1,pendingLog:null},rsl:{pressed:!1,pendingLog:null},rsr:{pressed:!1,pendingLog:null},plus:{pressed:!1,pendingLog:null},minus:{pressed:!1,pendingLog:null},up:{pressed:!1,pendingLog:null},right:{pressed:!1,pendingLog:null},left:{pressed:!1,pendingLog:null},down:{pressed:!1,pendingLog:null},left_stick:{pressed:!1,pendingLog:null},right_stick:{pressed:!1,pendingLog:null},left_stick_dir:{pressed:!1,pendingLog:null},right_stick_dir:{pressed:!1,pendingLog:null},home:{pressed:!1,pendingLog:null}},this.log=[],this.log_count=0}return Object(c.a)(e,[{key:"clear",value:function(){this.keys={a:{pressed:!1,pendingLog:null},b:{pressed:!1,pendingLog:null},x:{pressed:!1,pendingLog:null},y:{pressed:!1,pendingLog:null},lsl:{pressed:!1,pendingLog:null},lsr:{pressed:!1,pendingLog:null},rsl:{pressed:!1,pendingLog:null},rsr:{pressed:!1,pendingLog:null},plus:{pressed:!1,pendingLog:null},minus:{pressed:!1,pendingLog:null},up:{pressed:!1,pendingLog:null},right:{pressed:!1,pendingLog:null},left:{pressed:!1,pendingLog:null},down:{pressed:!1,pendingLog:null},left_stick:{pressed:!1,pendingLog:null},right_stick:{pressed:!1,pendingLog:null},left_stick_dir:{pressed:!1,pendingLog:null},right_stick_dir:{pressed:!1,pendingLog:null},home:{pressed:!1,pendingLog:null}},this.log=[],this.log_count=0}},{key:"pressKey",value:function(e,t){if("buffer"!==e){var a=this.keys[e];!1===a.pressed&&(a.pressed=!0,a.pendingLog=this.addLogEntry(e,t)),this.keys[e]=a}}},{key:"addLogEntry",value:function(e,t){var a={index:this.log_count,key:e,onTime:t,offTime:""};return this.log[this.log_count]=a,this.log_count++,a}},{key:"releaseKey",value:function(e,t){if("buffer"!==e){var a=this.keys[e];if(!0===a.pressed){a.pressed=!1;var n=a.pendingLog;a.pendingLog=null,n.offTime=t,this.log[n.index]=n}}}},{key:"getPressed",value:function(){var e=[];for(var t in this.keys){!0===this.keys[t].pressed&&e.push(t)}return e}},{key:"update",value:function(e,t,a){t?this.pressKey(e,a):this.releaseKey(e,a)}},{key:"renderPressed",value:function(){for(var e=Object.entries(this.keys),t=[],a=0,n=0;n<e.length;n++){var s=e[n];!0===s[1].pressed&&(t[a]=r.a.createElement("div",{className:"pressedKey",key:s[0]},s[0]),a++)}return r.a.createElement("div",{id:"PressedKeys"},r.a.createElement("b",null," Pressed "),t)}},{key:"renderLogged",value:function(){var e=[];if(this.log_count>0)for(var t=0;t<Math.min(3,this.log_count);t++){var a=this.log[this.log_count-(t+1)];e.push(r.a.createElement(w,{key:"keylog_"+t,index:a.index.toString(),pressedKey:a.key,onTime:a.onTime,offTime:a.offTime}))}return r.a.createElement("div",{id:"KeyLogs"},e)}}]),e}(),_=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a.onButtonEvent=a.onButtonEvent.bind(Object(h.a)(a)),a.selectMacro=a.selectMacro.bind(Object(h.a)(a)),a.parameterChange=a.parameterChange.bind(Object(h.a)(a)),a.macroPlayer=new J,a.keyLogger=new W,a.currentTime=0,a.state={selectedMacro:0,macroState:-1,macroProgress:0,displayInfo:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.UpdateTimerId=setInterval((function(){return e.update()}),20)}},{key:"componentWillUnmount",value:function(){clearInterval(this.UpdateTimerId)}},{key:"update",value:function(){this.currentTime+=20;var e=this.macroPlayer.update(this.currentTime);this.setState(this.macroPlayer.getMacroState()),void 0!==e&&(this.handleSwitchKeys(e.button,e.pressed),this.keyLogger.update(e.button,e.pressed,e.time))}},{key:"onButtonEvent",value:function(e){switch(new Audio("/click.mp3").play(),e){default:return;case"play":this.macroPlayer.play();break;case"pause":this.macroPlayer.pause();break;case"reset":if(this.macroPlayer.reset()){var t=this.keyLogger.getPressed();for(var a in t)this.handleSwitchKeys(a,!1);this.keyLogger.clear()}break;case"info":var n=!this.state.displayInfo;this.setState({displayInfo:n})}this.setState(this.macroPlayer.getMacroState())}},{key:"selectMacro",value:function(e){this.macroPlayer.selectMacro(e)&&this.keyLogger.clear()}},{key:"parameterChange",value:function(e,t){this.macroPlayer.changeParameter(e,t)}},{key:"handleSwitchKeys",value:function(e,t){void 0!==window.joyconJS&&("minus"===e&&window.joyconJS.onMinus(t),"left-stick"===e&&window.joyconJS.onLeftJoystickPressed(t),"up"===e&&window.joyconJS.onUp(t),"right"===e&&window.joyconJS.onRight(t),"down"===e&&window.joyconJS.onDown(t),"left"===e&&window.joyconJS.onLeft(t),"lsl"===e&&window.joyconJS.onLeftSL(t),"lsr"===e&&window.joyconJS.onLeftSR(t),"plus"===e&&window.joyconJS.onPlus(t),"a"===e&&window.joyconJS.onA(t),"b"===e&&window.joyconJS.onB(t),"x"===e&&window.joyconJS.onX(t),"y"===e&&window.joyconJS.onY(t),"rsl"===e&&window.joyconJS.onRightSL(t),"rsr"===e&&window.joyconJS.onRightSR(t),"right-stick"===e&&window.joyconJS.onRightJoystickPressed(t),"home"===e&&window.joyconJS.onHome(t))}},{key:"renderMacros",value:function(){var e=this;if(!this.macroPlayer.state.loadConcluded)return r.a.createElement("b",null," Loading ");var t=this.macroPlayer.state.selectedMacro,a=this.macroPlayer.getAllMacroData(),n=-1;return a.map((function(a){n++;var s=t===n;return r.a.createElement(S,{key:"macro_"+n.toString(),index:n,selected:s,name:a.name,src:a.icon,clickHandler:e.selectMacro})}))}},{key:"renderParameters",value:function(){if(!this.macroPlayer.state.loadConcluded)return r.a.createElement("b",null," Loading ");var e=this.macroPlayer.getCurrentMacroData();return r.a.createElement(O,{key:"macroParams",macro:e.name,parameters:e.parameters,eventHandler:this.parameterChange})}},{key:"renderInfo",value:function(){var e=this,t=this.macroPlayer.getCurrentMacroData(),a=t.name,n=t.info;return r.a.createElement("div",{id:"Info"},r.a.createElement("button",{className:"info-button",id:"InfoButton",onMouseDown:function(t){return e.onButtonEvent("info",!0)},onTouchStart:function(t){return e.onButtonEvent("info",!0)}},"Info"),r.a.createElement(L,{show:this.state.displayInfo,title:a,sections:n,onMouseDown:function(t){return e.onButtonEvent("info",!1)},onTouchStart:function(t){return e.onButtonEvent("info",!1)}}))}},{key:"render",value:function(){var e=this,t=this.keyLogger.renderPressed(),a=this.keyLogger.renderLogged(),n=this.renderMacros(),s=this.renderParameters(),o=this.renderInfo(),i=this.macroPlayer.state.playState;return r.a.createElement("div",{className:"App",style:{backgroundImage:"url(./images/background.png)"}},r.a.createElement("div",{className:"App-header"},r.a.createElement("img",{className:"icon",src:"./images/macro_app_icon.png",alt:"AppIcon"}),r.a.createElement("b",{className:"App-title",style:{color:"black"}}," POK\xc9MACROS ")),r.a.createElement("div",{id:"body"},r.a.createElement("div",{id:"Macros"},n),r.a.createElement("div",{id:"Parameters"},s,o),r.a.createElement("div",{id:"Tracker"},r.a.createElement(j,{key:"progressbar",percentage:this.state.macroProgress}),r.a.createElement("div",{id:"KeyLogging"},t,a)),r.a.createElement("div",{id:"PlayerButtons"},r.a.createElement(E,{id:"ResetButton",selected:i===f,name:"Reset",src:"./images/reset_icon.png",clickHandler:function(t){return e.onButtonEvent("reset")}}),r.a.createElement(E,{id:"PlayButton",selected:i===y,name:"Play",src:"./images/play_icon.png",clickHandler:function(t){return e.onButtonEvent("play")}}),r.a.createElement(E,{id:"PauseButton",selected:i===v,name:"Pause",src:"./images/pause_icon.png",clickHandler:function(t){return e.onButtonEvent("pause")}}))))}}]),t}(n.Component);a(17);o.a.render(r.a.createElement(_,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.8f647f54.chunk.js.map