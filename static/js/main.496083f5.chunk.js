(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){e.exports=t(22)},22:function(e,a,t){"use strict";t.r(a);var r=t(0),c=t.n(r),l=t(7),n=t.n(l),o=t(8),s=t(9),i=t(11),m=t(10),u=t(12),g=t(23);var f=function(e){return c.a.createElement("nav",{className:"navbar navbar-light navbar-expand-md bg-faded justify-content-center"},c.a.createElement("div",{className:"navbar-brand d-flex w-50 mr-auto nav-item"},c.a.createElement("h3",null,"Clicky Game")),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},c.a.createElement("ul",{className:"navbar-nav w-100"},c.a.createElement("li",{className:"nav-item click-message"},e.clickMessage)),c.a.createElement("ul",{className:"nav navbar-nav ml-auto w-100 justify-content-end"},c.a.createElement("li",{className:"nav-item"},"Score: ",e.score," | High Score: ",e.highScore))))};var w=function(e){var a=e.image;return c.a.createElement("button",{onClick:function(){return e.imageClicked(a)}},c.a.createElement("img",{alt:a.alt,src:a.source,className:"image-card"}))};var d=function(e){for(var a=e.images.map(function(a){return c.a.createElement(w,{image:a,imageClicked:e.imageClicked})}),t=a.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),l=[a[r],a[t]];a[t]=l[0],a[r]=l[1]}return c.a.createElement("div",{class:"d-flex flex-row flex-wrap justify-content-center image-container"},a.map(function(e){return c.a.createElement("div",{class:"justify-content-center p-3 image"},e)}))},v=t(5),h=function(e){function a(){var e,t;Object(o.a)(this,a);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={score:0,clickMessage:"",highScore:0},t.currentGameReset=function(){t.setState({score:0}),t.setState({clickMessage:""});var e=!0,a=!1,r=void 0;try{for(var c,l=v[Symbol.iterator]();!(e=(c=l.next()).done);e=!0){c.value.clicked=!1}}catch(n){a=!0,r=n}finally{try{e||null==l.return||l.return()}finally{if(a)throw r}}},t.handleImageClick=function(e){e.clicked&&!1!==e.clicked?t.currentGameReset():(e.clicked=!0,t.setState({score:t.state.score+1}),t.setState({clickMessage:"Good Click!"}),t.state.highScore<=t.state.score&&t.setState({highScore:t.state.highScore+1}))},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement(g.a,null,c.a.createElement("div",null,c.a.createElement(f,{clickMessage:this.state.clickMessage,score:this.state.score,highScore:this.state.highScore}),c.a.createElement(d,{images:v,imageClicked:this.handleImageClick})))}}]),a}(c.a.Component);n.a.render(c.a.createElement(h,null),document.getElementById("root"))},5:function(e){e.exports=[{alt:"Flower",source:"images/flower(1).jpg"},{alt:"Flower",source:"images/flower(2).jpg"},{alt:"Flower",source:"images/flower(3).jpg"},{alt:"Flower",source:"images/flower(4).jpg"},{alt:"Flower",source:"images/flower(5).jpg"},{alt:"Flower",source:"images/flower(6).jpg"},{alt:"Flower",source:"images/flower(7).jpg"},{alt:"Flower",source:"images/flower(8).jpg"},{alt:"Flower",source:"images/flower(9).jpg"},{alt:"Flower",source:"images/flower(10).jpg"},{alt:"Flower",source:"images/flower(11).jpg"},{alt:"Flower",source:"images/flower(12).jpg"}]}},[[14,2,1]]]);
//# sourceMappingURL=main.496083f5.chunk.js.map